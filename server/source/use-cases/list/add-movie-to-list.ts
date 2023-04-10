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
    constructor(
        private listsRepository: IListsRepository,
        private moviesRepository: IMoviesRepository
                ){}

    async handle({
        userId,
        listName,
        movieId,
        title,
        cover,
        description
    }: IAddMovieToListRequest): Promise<IAddMovieToListReply>{

        const foundMovieInList = await this.listsRepository.movieInList(movieId, userId, listName);

        if(foundMovieInList){
            throw new Error('Movie already in List');
        }

        const foundList = await this.listsRepository.findList(userId, listName);

        if(!foundList){
            throw new Error('List does not exists')
        }


        const movielist = await this.listsRepository.addMovieToList(userId, listName, movieId);

        return{
            movielist
        }

    }
}