import { Prisma, Review } from "@prisma/client";
import { IReviewsRepository } from "../IReviewsRepository";
import { randomUUID } from "crypto";

export class InMemoryReviewsRepository implements IReviewsRepository{
    public reviews: Review[] = []

    async create(data: Prisma.ReviewUncheckedCreateInput): Promise<Review> {
        this.reviews.push({
            id: randomUUID(),
            title: data.title,
            review: data.review,
            userId: data.userId,
            movieId: data.movieId,
            createdAt: new Date(),
            likes: 0,
            evaluationMovieId: data.evaluationMovieId? data.evaluationMovieId : null,
            evaluationUserId: data.evaluationUserId? data.evaluationUserId : null,
            movieCover: data.movieCover? data.movieCover : null ,
            rating: data.rating? data.rating : null
        })

        return this.reviews[this.reviews.length - 1];
    }

    async findManyByAuthorId(id: string): Promise<Review[]> {
        const reviewsBy = this.reviews.filter((item) => item.userId == id);
        return reviewsBy;
    }

    async findManyByMovieId(id: string): Promise<Review[]> {
        const movieReviews = this.reviews.filter((item) => item.movieId == id);
        return movieReviews;
    }
}