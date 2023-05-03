import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeCreateReviewUseCase } from "../../../use-cases/factories/review/make-createreview-usecase";

export async function createReview(request: FastifyRequest, reply: FastifyReply) {
    const createReviewBodySchema = z.object({
        title: z.string(),
        review: z.string(),
        movieId: z.string(),
        userId: z.string(),
        movieCover: z.string(),
        rating: z.number(),
    })

    const { title, review, movieId, userId, movieCover, rating } = createReviewBodySchema.parse(request.body);

    const createReviewUseCase = makeCreateReviewUseCase();

    const createdReview = await createReviewUseCase.handle({
        title,
        review,
        movieId,
        userId,
        movieCover,
        rating
    })

    reply.status(201).send(createReview);
}