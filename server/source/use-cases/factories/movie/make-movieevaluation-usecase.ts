import { PrismaMoviesRepository } from "../../../repositories/prisma/PrismaMoviesRepository";
import { MovieEvaluationUseCase } from "../../movie/movie-evaluation";

export function makeMovieEvaluationUseCase() {
    const moviesRepository = new PrismaMoviesRepository();
    const movieevaluationUseCase = new MovieEvaluationUseCase(moviesRepository);

    return movieevaluationUseCase;
}