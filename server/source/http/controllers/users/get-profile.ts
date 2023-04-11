import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeGetUserProfileUseCase } from "../../../use-cases/factories/user/make-getuserprofile-usecase";

export async function getProfile(request: FastifyRequest, reply: FastifyReply) {
    const getProfileBodySchema = z.object({
        id: z.string(),
    })

    const { id } = getProfileBodySchema.parse(request.params);

    try {
        const getUserProfileUseCase = makeGetUserProfileUseCase();

        const user = await getUserProfileUseCase.handle({
            id,
        });

        user.user.password = "";

        return reply.status(200).send(user);
    } catch (err) {
        return reply.status(500).send(err);
    }
}