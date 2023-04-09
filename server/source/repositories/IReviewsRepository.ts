import { Prisma, Review } from "@prisma/client";

export interface IReviewsRepository {
    create(data: Prisma.ReviewUncheckedCreateInput): Promise<Review>;
    findManyByAuthorId(id: string): Promise<Review[]>;
    findManyByMovieId(id: string): Promise<Review[]>;
}