import { PrismaReviewsRepository } from "../../repositories/prisma/PrismaReviewsRepository";
import { FetchMovieReviewsUseCase } from "../fetch-movie-reviews";

export function makeFetchMovieReviewsUseCase() {
    const reviewsRepository = new PrismaReviewsRepository();
    const fetchMovieReviewsUseCase = new FetchMovieReviewsUseCase(reviewsRepository);

    return fetchMovieReviewsUseCase;
}