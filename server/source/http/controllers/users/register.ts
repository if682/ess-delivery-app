import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
import { makeRegisterUseCase } from "../../../use-cases/factories/user/make-register-usecase";

export async function register (request: FastifyRequest, reply: FastifyReply) {
    const registerBodySchema = z.object({
        name: z.string(),
        username: z.string(),
        email: z.string().email(),
        description: z.string().nullable(),
        password: z.string(),
        birthdate: z.string().datetime(),
        phone: z.string().nullable(),
        location: z.string().nullable(),
    });

    const { name, username, email, description, password, birthdate, phone, location } = registerBodySchema.parse(request.body);

    try {
        const registerUseCase = makeRegisterUseCase();

        await registerUseCase.handle({
            name,
            email,
            description: description || "",
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