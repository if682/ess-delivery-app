import { Prisma, Movie, Evaluation } from "@prisma/client"


export interface IMoviesRepository{
    createMovie(id: string): Promise<Movie>;
    getMovie(id: string): Promise<Movie | null>;
    getAverage(id: string): Promise<number | null>;
    addEvaluation(userId: string, movieId: string, newRating: number): Promise<Evaluation>;
    getUserEvaluations(id: string): Promise<Evaluation[]>;
}