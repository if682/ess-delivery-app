import { Evaluation, Movie, Prisma } from "@prisma/client";
import { IMoviesRepository } from "../IMoviesRepository";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export class PrismaMoviesRepository implements IMoviesRepository {
    async createMovie(data: Prisma.MovieUncheckedCreateInput){
        const movie = await prisma.movie.create({
            data
        })

        return movie;
    }

    async getMovie(id: string) {
        const movie = await prisma.movie.findUnique({
            where: {
                id,
            }
        })

        return movie
    }

    async getAverage(id: string){
        const countEvaluations = await prisma.evaluation.count({
            where:{
                movieId: id
            }
        })

        if(countEvaluations < 5) return null;

        const average = await prisma.evaluation.aggregate({
            where: {
                movieId: id
            },
            _avg: {
                rating: true
            }
        })

        return average._avg.rating;
    }

    async addEvaluation(userId: string, movieId: string, newRating: number) {
        const evaluation = await prisma.evaluation.upsert({
            where: {
                userId_movieId:{
                    userId,
                    movieId
                }
            },
            update: {
                rating: newRating
            },
            create: {
                userId,
                movieId,
                rating: newRating
            }
        })

        return evaluation;
    }

    async getUserEvaluations(id: string) {
        const evaluations = await prisma.evaluation.findMany({
            where: {
                userId: id,
            }
        })

        return evaluations;
    }
}