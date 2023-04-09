import { Review } from "@prisma/client";
import { IReviewsRepository } from "../repositories/IReviewsRepository";

interface IFetchMovieReviewsUseCaseRequest {
    movieId: string
}

interface IFetchMovieReviewsUseCaseReply {
    reviews: Review[]
}

export class FetchMovieReviewsUseCase {
    constructor(private reviewsRepository: IReviewsRepository) {}

    async handle({
        movieId,
    }: IFetchMovieReviewsUseCaseRequest): Promise<IFetchMovieReviewsUseCaseReply> {
        const reviews = await this.reviewsRepository.findManyByMovieId(movieId);

        return {
            reviews,
        }
    }
}