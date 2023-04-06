import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeMovieSearchUseCase } from "../../../use-cases/factories/make-moviesearch-usecase";

export async function moviesearch (request: FastifyRequest, reply: FastifyReply) {
    const moviesearchParamsSchema = z.object({
        id: z.string(),
    })

    const { id } = moviesearchParamsSchema.parse(request.params);

    const moviesearchUseCase = makeMovieSearchUseCase();

    const data = await moviesearchUseCase.handle({
        id,
    })

    reply.status(200).send(data);
}