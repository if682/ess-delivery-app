import { Movie, Prisma, Evaluation } from "@prisma/client";
import { IMoviesRepository } from "../IMoviesRepository";


export class InMemoryMoviesRepository implements IMoviesRepository{
    public movies: Movie[] = []
    public evaluations: Evaluation[] = []

    async createMovie(id: string): Promise<Movie> {
        var movie = this.movies.find((item) => item.id == id)
        if(!movie){
            this.movies.push({
                id
            })
            return this.movies[this.movies.length - 1];
        }
        return movie;
    }

    async getAverage(id: string): Promise<number | null> {
        const movieEvaluations = this.evaluations.filter((item) => item.movieId == id)
        if(movieEvaluations.length < 5) return null;
        var sum = 0;
        for(var i =0; i< movieEvaluations.length; i++){
            sum = sum + movieEvaluations[i].rating;
        }
        return sum/movieEvaluations.length
    }

    async addEvaluation(userId: string, movieId: string, newRating: number): Promise<Evaluation> {
        const index = this.evaluations.findIndex((item) => item.userId == userId && item.movieId == movieId)

        if(index == -1){
            this.evaluations.push({
                userId,
                movieId,
                rating: newRating
            })
            return this.evaluations[this.evaluations.length - 1];
        }

        this.evaluations[index] = {userId, movieId, rating: newRating};
        return this.evaluations[index];                            
    }
}