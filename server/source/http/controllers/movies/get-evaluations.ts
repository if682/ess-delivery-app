import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeFetchUserEvaluationsUseCase } from "../../../use-cases/factories/make-fetchuserevals-usecase";

export async function fetchEvaluations (request: FastifyRequest, reply: FastifyReply) {
    const listReviewsBodySchema = z.object({
        authorId: z.string(),
    })

    const { authorId } = listReviewsBodySchema.parse(request.params);

    const fetchUserEvaluationsUseCase = makeFetchUserEvaluationsUseCase();

    const data = await fetchUserEvaluationsUseCase.handle({
        authorId,
    })

    reply.status(200).send(data);
}