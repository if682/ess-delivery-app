import { List, MovieList } from "@prisma/client";
import { IListsRepository } from "../repositories/IListsRepository";
import { IMoviesRepository } from "../repositories/IMoviesRepository";

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
        await this.moviesRepository.createMovie({id: movieId, title, cover, description});

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