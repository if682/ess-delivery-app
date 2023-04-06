import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeMovieSearchUseCase } from "../../../use-cases/factories/make-moviesearch-usecase";

export async function moviesearch (request: FastifyRequest, reply: FastifyReply) {
    const moviesearchParamsSchema = z.object({
        id: z.string(),
    })

    const { id } = moviesearchParamsSchema.parse(request.params);
    

    try{
        const moviesearchUseCase = makeMovieSearchUseCase();
        await moviesearchUseCase.handle({
            id,
        })
    } catch(err){
        reply.status(400).send({ err });
        throw err;
    }


    reply.status(200).send();
}