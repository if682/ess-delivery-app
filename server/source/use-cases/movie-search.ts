import { Movie, Review, Evaluation } from "@prisma/client";
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
        const movie = await this.moviesRepository.findMovie(id);

        if(!movie){
            const newMovie = await this.moviesRepository.createMovie({id});
            return {movie: newMovie};
        }

        return {
            movie,
        };
   
    }
}

