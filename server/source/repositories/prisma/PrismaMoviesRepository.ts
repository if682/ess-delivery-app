import { Movie, Prisma } from "@prisma/client";
import { IMoviesRepository } from "../IMoviesRepository";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export class PrismaMoviesRepository implements IMoviesRepository {
    async createMovie(data: Prisma.MovieCreateInput){
        const movie = await prisma.movie.create({
            data,
        })

        return movie;
    }

    async findMovie(id: string){
        const movie = await prisma.movie.findUnique({
            where :{
                id
            }
        })
        return movie;
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
}