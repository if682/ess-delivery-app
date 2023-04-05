import { Review } from "@prisma/client";
import { IReviewsRepository } from "../repositories/IReviewsRepository";

interface IFetchUserReviewsUseCaseRequest {
    authorId: string
}

interface IFetchUserReviewsUseCaseReply {
    reviews: Review[]
}

export class FetchUserReviewsUseCase {
    constructor(private reviewsRepository: IReviewsRepository) {}

    async handle({
        authorId,
    }: IFetchUserReviewsUseCaseRequest): Promise<IFetchUserReviewsUseCaseReply> {
        const reviews = await this.reviewsRepository.findManyByAuthorId(authorId);

        return {
            reviews,
        }
    }
}