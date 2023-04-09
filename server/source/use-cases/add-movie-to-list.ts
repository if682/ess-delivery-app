import { List, MovieList } from "@prisma/client";
import { IListsRepository } from "../repositories/IListsRepository";
import { IMoviesRepository } from "../repositories/IMoviesRepository";

interface IAddMovieToListRequest{
    userId: string,
    listName: string,
    movieId: string
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
        movieId
    }: IAddMovieToListRequest): Promise<IAddMovieToListReply>{
        await this.moviesRepository.createMovie(movieId);

        const found = await this.listsRepository.movieInList(userId, listName, movieId);

        if(found){
            throw new Error('Movie already in List');
        }

        const movielist = await this.listsRepository.addMovieToList(userId, listName, movieId);

        return{
            movielist
        }

    }
}