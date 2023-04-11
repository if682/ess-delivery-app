import { PrismaMoviesRepository } from "../../../repositories/prisma/PrismaMoviesRepository";
import { PrismaReviewsRepository } from "../../../repositories/prisma/PrismaReviewsRepository";
import { PrismaUsersRepository } from "../../../repositories/prisma/PrismaUsersRepository";
import { CreateReviewUseCase } from "../../review/create-review";

export function makeCreateReviewUseCase() {
    const reviewsRepository = new PrismaReviewsRepository();
    const usersRepository = new PrismaUsersRepository();
    const moviesRepository = new PrismaMoviesRepository();
    const createReviewUseCase = new CreateReviewUseCase(reviewsRepository, usersRepository, moviesRepository);

    return createReviewUseCase;
}