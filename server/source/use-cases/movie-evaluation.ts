import { Evaluation, User } from "@prisma/client";
import { IMoviesRepository } from "../repositories/IMoviesRepository";
interface IMovieEvaluationUseCaseRequest{
    userId: string,
    movieId: string,
    rating: number
}

interface IMovieEvaluationUseCaseReply{
    evaluation: Evaluation,
    average: number|null
}

export class MovieEvaluationUseCase{
    constructor(private moviesRepository : IMoviesRepository) {}

    async handle({
        userId,
        movieId,
        rating
    }: IMovieEvaluationUseCaseRequest): Promise<IMovieEvaluationUseCaseReply> {
        
        const evaluation = await this.moviesRepository.addEvaluation(userId, movieId, rating);
        const average = await this.moviesRepository.getAverage(movieId);
        return {
            evaluation,
            average
        };
   
    }
}
