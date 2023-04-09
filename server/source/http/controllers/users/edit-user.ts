import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
import { makeEditUserUseCase } from "../../../use-cases/factories/make-edituser-usecase";

export async function editUser(request: FastifyRequest, reply: FastifyReply) {
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
        const editUserUseCase = makeEditUserUseCase();

        await editUserUseCase.handle({
            name,
            username, 
            email, 
            password, 
            birthdate: new Date(birthdate), 
            phone, 
            location,
        })
    } catch (err) {
        reply.status(500).send(err);
        throw err;
    }

    return reply.status(201).send();
}