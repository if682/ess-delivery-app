import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeFetchUserReviewsUseCase } from "../../../use-cases/factories/review/make-fetchuserreviews-usecase";

export async function listReviews (request: FastifyRequest, reply: FastifyReply) {
    const listReviewsBodySchema = z.object({
        authorId: z.string(),
    })

    const { authorId } = listReviewsBodySchema.parse(request.params);

    const listUserReviewsUseCase = makeFetchUserReviewsUseCase();

    const data = await listUserReviewsUseCase.handle({
        authorId,
    })

    reply.status(200).send(data);
}