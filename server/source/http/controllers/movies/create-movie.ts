import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeCreateMovieUseCase } from "../../../use-cases/factories/make-createmovie-usecase";

export async function createMovie(request: FastifyRequest, reply: FastifyReply) {
    const createMovieBodySchema = z.object({
        id: z.string(),
        title: z.string(),
        cover: z.string(),
        description: z.string(),
    })

    const { id, title, cover, description } = createMovieBodySchema.parse(request.body);

    try {
        const createMovieUseCase = makeCreateMovieUseCase()

        const movie = await createMovieUseCase.handle({
            id,
            title,
            cover,
            description,
        })

        return reply.status(201).send(movie);
    } catch (err) {
        return reply.status(500).send(err)
    }
}