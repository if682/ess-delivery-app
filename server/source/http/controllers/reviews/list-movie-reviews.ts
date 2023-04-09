import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeFetchMovieReviewsUseCase } from "../../../use-cases/factories/review/make-fetchmoviereviews-usecase";

export async function listMovieReviews (request: FastifyRequest, reply: FastifyReply) {
    const listMovieReviewsBodySchema = z.object({
        movieId: z.string(),
    })

    const { movieId } = listMovieReviewsBodySchema.parse(request.params);

    const listMovieReviewsUseCase = makeFetchMovieReviewsUseCase();

    const data = await listMovieReviewsUseCase.handle({
        movieId,
    })

    reply.status(200).send(data);
}
