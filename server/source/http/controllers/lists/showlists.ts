import { FastifyRequest, FastifyReply} from "fastify";
import { z } from "zod";
import { makeShowListsUseCase } from "../../../use-cases/factories/make-showlists-usecase";

export async function showlists(request: FastifyRequest, reply: FastifyReply) {
    const showlistsParamsSchema = z.object({
        userId: z.string()
    })

    const {userId} = showlistsParamsSchema.parse(request.params);
    var data;
    try{
        const showlistsUseCase = await makeShowListsUseCase();

        data = await showlistsUseCase.handle({userId});
    }
    catch(err){
        reply.status(400).send({ err });
        throw err;
    }

    reply.status(201).send(data);

}
