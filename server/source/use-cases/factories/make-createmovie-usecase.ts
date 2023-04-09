import { PrismaMoviesRepository } from "../../repositories/prisma/PrismaMoviesRepository";
import { CreateMovieUseCase } from "../create-movie";

export function makeCreateMovieUseCase() {
    const moviesRepository = new PrismaMoviesRepository()
    const createMovieUseCase = new CreateMovieUseCase(moviesRepository);

    return createMovieUseCase;
}