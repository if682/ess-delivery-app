import { List, MovieList, Prisma } from "@prisma/client";
import { IListsRepository } from "../IListsRepository";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class PrismaListsRepository implements IListsRepository {
    async createList(name: string, userId: string): Promise<List> {
        const list = await prisma.list.create({
            data:{
                name,
                userId
            }
        })

        return list;
    }

    async addMovieToList(userId: string, listName: string, movieId: string): Promise<MovieList> {
        const movielist = await prisma.movieList.create({
            data:{
                listOwner: userId,
                listName: listName,
                movieId: movieId
            }
        })
        return movielist;
    }

    async showLists(userId: string): Promise<List[]> {
        const lists = await prisma.list.findMany({
            where:{
                userId: userId
            }
        })

        return lists
    }

    async showMoviesFromList(userId: string, listName: string): Promise<string[]> {

        const movies = await prisma.movieList.findMany({
            where :{
                listName: listName,
                listOwner: userId
            },
            select:{
                movieId: true
            }
        }) 
        
        const ret = movies.map((movieId) => movieId.movieId); // só o conteúdo da coluna movieId

        return ret;
    }

    async movieInList(movieId: string, listOwner: string, listName: string): Promise<boolean> {
        const found = await prisma.movieList.count({
            where: {
                movieId,
                listName,
                listOwner
            }
        })

        return (found ? true: false);
    }

    async deleteList(userId: string, listName: string): Promise<void> {
        await prisma.movieList.deleteMany({
            where: {
                listName,
                listOwner: userId
            }
        })

        await prisma.list.delete({
            where: {
                userId_name: {
                    userId,
                    name: listName
                }
            }
        })
    }

    async deleteMovieFromList(userId: string, listName: string, movieId: string): Promise<void> {
        await prisma.movieList.delete({
            where: {
                listOwner_listName_movieId: {
                    listOwner: userId,
                    listName,
                    movieId
                }
            }
        })
    }

    async findList(userId: string, listName: string): Promise<List | null> {
        const found = await prisma.list.findFirst({
            where: {
                userId,
                name: {
                    equals: listName,
                    mode: 'insensitive'
                }
            }
        })

        return found;
    }
}