import { PrismaReviewsRepository } from "../../../repositories/prisma/PrismaReviewsRepository";
import { FetchUserReviewsUseCase } from "../../review/fetch-user-reviews";

export function makeFetchUserReviewsUseCase() {
    const reviewsRepository = new PrismaReviewsRepository();
    const fetchUserReviewsUseCase = new FetchUserReviewsUseCase(reviewsRepository);

    return fetchUserReviewsUseCase;
}