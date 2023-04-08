import { Evaluation } from "@prisma/client";
import { IMoviesRepository } from "../repositories/IMoviesRepository";

interface IFetchUserEvaluationsUseCaseRequest {
    authorId: string
}

interface IFetchUserEvaluationsUseCaseReply {
    evaluations: Evaluation[]
}

export class FetchUserEvaluationsUseCase {
    constructor(private moviesRepository: IMoviesRepository) {}

    async handle({
        authorId,
    }: IFetchUserEvaluationsUseCaseRequest): Promise<IFetchUserEvaluationsUseCaseReply> {
        const evaluations = await this.moviesRepository.getUserEvaluations(authorId);

        return {
            evaluations,
        }
    }
}