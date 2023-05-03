import { PrismaMoviesRepository } from "../../../repositories/prisma/PrismaMoviesRepository";
import { PrismaReviewsRepository } from "../../../repositories/prisma/PrismaReviewsRepository";
import { FetchMovieReviewsUseCase } from "../../review/fetch-movie-reviews";

export function makeFetchMovieReviewsUseCase() {
    const reviewsRepository = new PrismaReviewsRepository();
    const moviesRepository = new PrismaMoviesRepository();
    const fetchMovieReviewsUseCase = new FetchMovieReviewsUseCase(reviewsRepository, moviesRepository);

    return fetchMovieReviewsUseCase;
}