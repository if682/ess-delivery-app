import { Movie } from "@prisma/client";
import { IMoviesRepository } from "../repositories/IMoviesRepository";

interface ICreateMovieUseCaseRequest {
    id: string,
    title: string,
    cover: string,
    description: string,
}

interface ICreateMovieUseCaseReply {
    movie: Movie
}

export class CreateMovieUseCase {
    constructor(private moviesRepository: IMoviesRepository) {}

    async handle({
        id,
        title,
        cover,
        description,
    }: ICreateMovieUseCaseRequest): Promise<ICreateMovieUseCaseReply> {
        const movie = await this.moviesRepository.createMovie({
            id,
            title,
            cover,
            description,
        })

        return {
            movie,
        }
    }
}