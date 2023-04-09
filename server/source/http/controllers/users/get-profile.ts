import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeGetUserProfileUseCase } from "../../../use-cases/factories/make-getuserprofile-usecase";

export async function getProfile(request: FastifyRequest, reply: FastifyReply) {
    const getProfileBodySchema = z.object({
        id: z.string(),
    })

    const { id } = getProfileBodySchema.parse(request.params);

    try {
        const getUserProfileUseCase = makeGetUserProfileUseCase();

        const user = getUserProfileUseCase.handle({
            id,
        });

        return reply.status(200).send(user);
    } catch (err) {
        return reply.status(500).send(err);
    }
}