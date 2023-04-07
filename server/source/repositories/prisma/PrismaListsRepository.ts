import { List, Movie, MovieList, Prisma } from "@prisma/client";
import { IListsRepository } from "../IListsRepository";
import { PrismaClient } from "@prisma/client";
import { userRoutes } from "../../http/controllers/users/routes";
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

    async addMovieToList(userId: string, listName: string, movieId: string): Promise<void> {
        await prisma.movieList.create({
            data:{
                listOwner: userId,
                listName: listName,
                movieId: movieId
            }
        })
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
}