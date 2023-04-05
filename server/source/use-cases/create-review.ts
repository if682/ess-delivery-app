import { Review } from "@prisma/client";
import { IReviewsRepository } from "../repositories/IReviewsRepository";

interface ICreateReviewUseCaseRequest {
    title: string
    review: string
    userId: string
    movieId: string
}

interface ICreateReviewUseCaseReply {
    review: Review
}

export class CreateReviewUseCase {
    constructor(private reviewsRepository: IReviewsRepository){}

    async handle({
        title,
        review,
        movieId,
        userId,
    }: ICreateReviewUseCaseRequest): Promise<ICreateReviewUseCaseReply> {
        const reviewObject = await this.reviewsRepository.create({
            title,
            review,
            movieId,
            userId,
        })

        return {
            review: reviewObject
        }
    }
}