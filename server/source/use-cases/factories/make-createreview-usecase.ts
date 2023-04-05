import { PrismaReviewsRepository } from "../../repositories/prisma/PrismaReviewsRepository";
import { CreateReviewUseCase } from "../create-review";

export function makeCreateReviewUseCase() {
    const reviewsRepository = new PrismaReviewsRepository();
    const createReviewUseCase = new CreateReviewUseCase(reviewsRepository);

    return createReviewUseCase;
}