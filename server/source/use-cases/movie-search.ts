import { Movie } from "@prisma/client";
import { IMoviesRepository } from "../repositories/IMoviesRepository";
interface IMovieSearchUseCaseRequest{
    id: string
}

interface IMovieSearchUseCaseReply{
    movie: Movie  
}

export class MovieSearchUseCase{
    constructor(private moviesRepository : IMoviesRepository) {}

    async handle({
        id
    }: IMovieSearchUseCaseRequest): Promise<IMovieSearchUseCaseReply> {
        let movie = await this.moviesRepository.getMovie(id);

        if(!movie) {
            movie = await this.moviesRepository.createMovie(id);
        }

        return {
            movie,
        };
   
    }
}

