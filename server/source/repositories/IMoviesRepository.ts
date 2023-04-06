import { Prisma, Movie, Evaluation } from "@prisma/client"


export interface IMoviesRepository{
    createMovie(data: Prisma.MovieCreateInput): Promise<Movie>;
    findMovie(id: string): Promise<Movie | null>;
    getAverage(id: string): Promise<number | null>;
    addEvaluation(userId: string, movieId: string, newRating: number): Promise<Evaluation>;
}