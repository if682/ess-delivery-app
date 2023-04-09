import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
import { makeForgotPasswordUseCase } from "../../../use-cases/factories/user/make-forgotpassword-usecase";

export async function forgotpassword (request: FastifyRequest, reply: FastifyReply) {
    const forgotpasswordBodySchema = z.object({
        email: z.string().email(),
    });

    const {email} = forgotpasswordBodySchema.parse(request.body);

    try {
        const forgotpasswordUseCase = makeForgotPasswordUseCase();

        await forgotpasswordUseCase.handle({email})

    } catch(err) {
        reply.status(404).send({ err });
        throw err;
    }

    return reply.status(200).send();
}