import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeCreateReviewUseCase } from "../../../use-cases/factories/make-createreview-usecase";

export async function createReview(request: FastifyRequest, reply: FastifyReply) {
    const createReviewBodySchema = z.object({
        title: z.string(),
        review: z.string(),
        movieId: z.string(),
        userId: z.string(),
    })

    const { title, review, movieId, userId } = createReviewBodySchema.parse(request.body);

    const createReviewUseCase = makeCreateReviewUseCase();

    const createdReview = await createReviewUseCase.handle({
        title,
        review,
        movieId,
        userId,
    })

    reply.status(201).send(createReview);
}