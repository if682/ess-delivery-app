import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
import { makeRegisterUseCase } from "../../../use-cases/factories/make-register-usecase";

export async function register (request: FastifyRequest, reply: FastifyReply) {
    const registerBodySchema = z.object({
        name: z.string(),
        username: z.string(),
        email: z.string().email(),
        password: z.string(),
        birthdate: z.string().datetime(),
        phone: z.string().nullable(),
        location: z.string().nullable(),
    });

    const { name, username, email, password, birthdate, phone, location } = registerBodySchema.parse(request.body);

    try {
        const registerUseCase = makeRegisterUseCase();

        await registerUseCase.handle({
            name,
            email,
            username,
            birthdate: new Date(birthdate),
            password,
            location,
            phone,
        })
    } catch(err) {
        reply.status(500).send(err);
        throw err;
    }

    return reply.status(201).send();
}