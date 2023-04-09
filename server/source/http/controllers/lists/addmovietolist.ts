import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
import { makeAddMovieToListUseCase } from "../../../use-cases/factories/list/make-addmovietolist-usecase";

export async function addmovietolist(request: FastifyRequest, reply: FastifyReply){
    const addmovietolistBodySchema = z.object({
        userId: z.string(), 
        listName: z.string(),
        movieId: z.string()
    });

    const {userId, listName, movieId} = addmovietolistBodySchema.parse(request.body);

    try{
        const addmovietolistUsecase = makeAddMovieToListUseCase();

        await addmovietolistUsecase.handle({userId, listName, movieId});
    }
    catch(err){
        reply.status(400).send({ err });
        throw err;
    }

    return reply.status(201).send();

}