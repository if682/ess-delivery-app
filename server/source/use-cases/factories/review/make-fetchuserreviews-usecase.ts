import { PrismaReviewsRepository } from "../../../repositories/prisma/PrismaReviewsRepository";
import { PrismaUsersRepository } from "../../../repositories/prisma/PrismaUsersRepository";
import { FetchUserReviewsUseCase } from "../../review/fetch-user-reviews";

export function makeFetchUserReviewsUseCase() {
    const reviewsRepository = new PrismaReviewsRepository();
    const usersRepository = new PrismaUsersRepository();
    const fetchUserReviewsUseCase = new FetchUserReviewsUseCase(reviewsRepository, usersRepository);

    return fetchUserReviewsUseCase;
}