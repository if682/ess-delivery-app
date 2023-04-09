import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
import { makeDeleteMovieFromListUseCase } from "../../../use-cases/factories/make-deletemoviefromlist-usecase";

export async function deleteMovieFromList(request: FastifyRequest, reply: FastifyReply){
    const deleteMovieFromListBodySchema = z.object({
        userId: z.string(), 
        listName: z.string(),
        movieId: z.string()
    });

    const {userId, listName, movieId} = deleteMovieFromListBodySchema.parse(request.body);

    try{
        const deleteMovieFromListUsecase = makeDeleteMovieFromListUseCase();

        await deleteMovieFromListUsecase.handle({userId, listName, movieId});
    }
    catch(err){
        reply.status(400).send({ err });
        throw err;
    }

    return reply.status(201).send();

}