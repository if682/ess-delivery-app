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
        await this.moviesRepository.createMovie({id: movieId});

        const movielist = await this.listsRepository.addMovieToList(userId, listName, movieId);

        return{
            movielist
        }

    }
}