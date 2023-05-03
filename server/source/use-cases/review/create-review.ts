import { Review } from "@prisma/client";
import { IReviewsRepository } from "../../repositories/IReviewsRepository";
import { IUserRepository } from "../../repositories/IUsersRepository";
import { IMoviesRepository } from "../../repositories/IMoviesRepository";

interface ICreateReviewUseCaseRequest {
    title: string
    review: string
    userId: string
    movieId: string
    movieCover: string
    rating: number
}

interface ICreateReviewUseCaseReply {
    review: Review
}

export class CreateReviewUseCase {
    constructor(
        private reviewsRepository: IReviewsRepository,
        private usersRepository: IUserRepository,
        private moviesRepository: IMoviesRepository
        ){}

    async handle({
        title,
        review,
        movieId,
        userId,
        movieCover,
        rating
    }: ICreateReviewUseCaseRequest): Promise<ICreateReviewUseCaseReply> {
        const user = await this.usersRepository.findById(userId);

        if(!user){
            throw new Error('Bad request')
        }
        
        const movie = await this.moviesRepository.getMovie(movieId);

        if(!movie){
            throw new Error('Bad request')
        }

        const reviewObject = await this.reviewsRepository.create({
            title,
            review,
            movieId,
            userId,
            movieCover,
            rating
        })

        return {
            review: reviewObject
        }
    }
}