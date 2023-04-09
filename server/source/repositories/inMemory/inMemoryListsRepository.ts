import { List, MovieList } from "@prisma/client";
import { IListsRepository } from "../IListsRepository";


export class InMemoryListsRepository implements IListsRepository{
    public lists: List[] = []
    public movieLists: MovieList[] = []

    async createList(name: string, userId: string): Promise<List> {
        this.lists.push({name, userId});
        return this.lists[this.lists.length - 1];
    }

    async addMovieToList(userId: string, listName: string, movieId: string): Promise<MovieList> {
        this.movieLists.push({listOwner:userId, listName, movieId});
        return this.movieLists[this.movieLists.length - 1];
    }

    async showLists(userId: string): Promise<List[]> {
        const list = this.lists.filter((item) => item.userId == userId);
        return list;
    }
    
    async showMoviesFromList(userId: string, listName: string): Promise<string[]> {
        const movies = this.movieLists.filter((item) => item.listOwner == userId && item.listName == listName);
        
        var ret: string[] = [];
        for(var i=0; i< movies.length; i++){
            ret.push(movies[i].movieId);
        }

        return ret;
    }

    async movieInList(movieId: string, listOwner: string, listName: string): Promise<boolean> {
        const found = this.movieLists.find((item) => 
            item.movieId == movieId &&
            item.listOwner == listOwner &&
            item.listName == listName
        )

        return (!found ? false : true)
    }

    async deleteList(userId: string, listName: string): Promise<void> {
        const index = this.lists.findIndex((item) => 
            item.name == listName &&
            item.userId == userId
        )
        
        this.lists.splice(index, 1);

        const new_array = this.movieLists.filter((item) => 
            item.listName !== listName ||
            item.listOwner !== userId 
        )

        this.movieLists = new_array;
    }

}