import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
import { makeDeleteListUseCase } from "../../../use-cases/factories/list/make-deletelist-usecase";

export async function deletelist(request: FastifyRequest, reply: FastifyReply){
    const deletelistBodySchema = z.object({
        userId: z.string(), 
        listName: z.string()
    });

    const {userId, listName} = deletelistBodySchema.parse(request.body);

    try{
        const deletelistUsecase = makeDeleteListUseCase();

        await deletelistUsecase.handle({userId, listName});
    }
    catch(err){
        reply.status(400).send({ err });
        throw err;
    }

    return reply.status(201).send();

}