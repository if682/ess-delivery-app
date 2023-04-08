import { FastifyRequest, FastifyReply} from "fastify";
import { z } from "zod";
import { makeShowMoviesFromListUseCase } from "../../../use-cases/factories/make-showmoviesfromlist-usecase";

export async function showmoviesfromlist(request: FastifyRequest, reply: FastifyReply) {
    const showmoviesfromlistParamsSchema = z.object({
        userId: z.string(),
        listName: z.string()
    })

    const {userId, listName} = showmoviesfromlistParamsSchema.parse(request.params);
    var data;
    try{
        const showmoviesfromlistUseCase = makeShowMoviesFromListUseCase();

        data = await showmoviesfromlistUseCase.handle({userId, listName});
    }
    catch(err){
        reply.status(400).send({ err });
        throw err;
    }

    reply.status(201).send(data);

}
