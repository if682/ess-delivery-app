import { List, MovieList } from "@prisma/client";
import { IListsRepository } from "../../repositories/IListsRepository";
import { IMoviesRepository } from "../../repositories/IMoviesRepository";

interface IAddMovieToListRequest{
    userId: string,
    listName: string,
    movieId: string,
    title: string,
    cover: string,
    description: string

}

interface IAddMovieToListReply{
    movielist: MovieList
}

export class AddMovieToListUseCase{
    constructor(private listsRepository: IListsRepository){}

    async handle({
        userId,
        listName,
        movieId,
        title,
        cover,
        description
    }: IAddMovieToListRequest): Promise<IAddMovieToListReply>{

        const foundList = await this.listsRepository.findList(userId, listName);

        if(!foundList){
            throw new Error('List does not exist')
        }

        const foundMovieInList = await this.listsRepository.movieInList(movieId, userId, foundList.name);

        if(foundMovieInList){
            throw new Error('Movie already in List');
        }

        const movielist = await this.listsRepository.addMovieToList(userId, foundList.name, movieId);

        return{
            movielist
        }

    }
}