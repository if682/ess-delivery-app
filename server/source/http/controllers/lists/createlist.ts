import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
import { makeCreateListUseCase } from "../../../use-cases/factories/make-createlist-usecase";

export async function createlist(request: FastifyRequest, reply: FastifyReply){
    const createlistBodySchema = z.object({
        userId: z.string(), 
        name: z.string()
    });

    const {userId, name} = createlistBodySchema.parse(request.body);

    try{
        const createlistUsecase = makeCreateListUseCase();

        await createlistUsecase.handle({userId, name});
    }
    catch(err){
        reply.status(400).send({ err });
        throw err;
    }

    return reply.status(201).send();

}