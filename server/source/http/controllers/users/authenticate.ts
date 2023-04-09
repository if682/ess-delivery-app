import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
import { makeAuthenticateUseCase } from "../../../use-cases/factories/make-authenticate-usecase";

export async function authenticate (request: FastifyRequest, reply: FastifyReply) {
    const authenticateBodySchema = z.object({
        username: z.string(),
        password: z.string(),
    });

    const { username, password } = authenticateBodySchema.parse(request.body);

    try {
        const authenticateUseCase = makeAuthenticateUseCase();

        await authenticateUseCase.handle({
            username,
            password,
        })

    } catch(err) {
        reply.status(500).send(err);
        throw err;
    }

    return reply.status(200).send();
}