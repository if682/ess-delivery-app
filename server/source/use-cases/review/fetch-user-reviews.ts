import { Review } from "@prisma/client";
import { IReviewsRepository } from "../../repositories/IReviewsRepository";
import { IUserRepository } from "../../repositories/IUsersRepository";

interface IFetchUserReviewsUseCaseRequest {
    authorId: string
}

interface IFetchUserReviewsUseCaseReply {
    reviews: Review[]
}

export class FetchUserReviewsUseCase {
    constructor(
        private reviewsRepository: IReviewsRepository,
        private usersRepository: IUserRepository
        ) {}

    async handle({
        authorId,
    }: IFetchUserReviewsUseCaseRequest): Promise<IFetchUserReviewsUseCaseReply> {
        // const user = await this.usersRepository.findById(authorId);

        // if(!user){
        //     throw new Error('Bad request')
        // }

        const reviews = await this.reviewsRepository.findManyByAuthorId(authorId);

        return {
            reviews,
        }
    }
}