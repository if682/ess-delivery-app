import { Review } from "@prisma/client";
import { IReviewsRepository } from "../../repositories/IReviewsRepository";
import { IMoviesRepository } from "../../repositories/IMoviesRepository";

interface IFetchMovieReviewsUseCaseRequest {
    movieId: string
}

interface IFetchMovieReviewsUseCaseReply {
    reviews: Review[]
}

export class FetchMovieReviewsUseCase {
    constructor(
        private reviewsRepository: IReviewsRepository,
        private moviesRepository: IMoviesRepository
        ) {}

    async handle({
        movieId,
    }: IFetchMovieReviewsUseCaseRequest): Promise<IFetchMovieReviewsUseCaseReply> {
        const movie = await this.moviesRepository.getMovie(movieId);

        if(!movie){
            throw new Error('Bad request')
        }

        const reviews = await this.reviewsRepository.findManyByMovieId(movieId);

        return {
            reviews,
        }
    }
}