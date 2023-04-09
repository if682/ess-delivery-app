import { Prisma } from "@prisma/client";
import { IReviewsRepository } from "../IReviewsRepository";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export class PrismaReviewsRepository implements IReviewsRepository {
    async create(data: Prisma.ReviewUncheckedCreateInput) {
        const review = await prisma.review.create({
            data,
        })

        return review;
    }

    async findManyByAuthorId(id: string) {
        const reviews = await prisma.review.findMany({
            where: {
                userId: id,
            }
        })

        return reviews;
    }

    async findManyByMovieId(id: string) {
        const reviews = await prisma.review.findMany({
            where: {
                movieId: id,
            },
            include: { author: { select: { name: true } } }
        })
        return reviews;
    }

}