import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
import { makeMovieEvaluationUseCase } from "../../../use-cases/factories/make-movieevaluation-usecase";

export async function movieevaluation (request: FastifyRequest, reply: FastifyReply) {
    const movieevaluationBodySchema = z.object({
        userId: z.string(),
        movieId: z.string(),
        rating: z.number()
    });

    const {userId, movieId, rating} = movieevaluationBodySchema.parse(request.body);
    var data;
    try {
        const movieevaluationUseCase = makeMovieEvaluationUseCase();

        data = await movieevaluationUseCase.handle({userId, movieId, rating});

    } catch(err) {
        reply.status(400).send({ err });
        throw err;
    }

    return reply.status(201).send(data);
}