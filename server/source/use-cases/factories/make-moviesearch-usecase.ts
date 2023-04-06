import { PrismaMoviesRepository } from "../../repositories/prisma/PrismaMoviesRepository";
import { MovieSearchUseCase } from "../movie-search";

export function makeMovieSearchUseCase() {
    const moviesRepository = new PrismaMoviesRepository();
    const moviesearchUseCase = new MovieSearchUseCase(moviesRepository);

    return moviesearchUseCase;
}