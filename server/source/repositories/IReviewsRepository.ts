import { Prisma, Review } from "@prisma/client";

export interface IReviewsRepository {
    create(data: Prisma.ReviewCreateInput): Promise<Review>;
    findManyByAuthorId(id: string): Promise<Review[]>;
}