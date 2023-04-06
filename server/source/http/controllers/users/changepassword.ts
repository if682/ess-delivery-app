import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
import { makeChangePasswordUseCase } from "../../../use-cases/factories/make-changepassword-usecase";

export async function changepassword (request: FastifyRequest, reply: FastifyReply) {
    const changepasswordBodySchema = z.object({
        email: z.string().email(),
        token: z.string(),
        newPassword: z.string(),
        repeatNewPassword: z.string()
    });

    const {email, token, newPassword, repeatNewPassword} = changepasswordBodySchema.parse(request.body);

    try {
        const changepasswordUseCase = makeChangePasswordUseCase();

        await changepasswordUseCase.handle({email, token, newPassword, repeatNewPassword})

    } catch(err) {
        reply.status(400).send({ err });
        throw err;
    }

    return reply.status(200).send();
}