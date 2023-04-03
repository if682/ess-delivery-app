import { z } from "zod";
import { app } from "./app";
import { env } from "./env";
import { PrismaClient } from "@prisma/client";
import { compare } from "bcryptjs";
const prisma = new PrismaClient();

app.post("/login", async (request, reply) => {
    const loginBodySchema = z.object({
        username: z.string(),
        password: z.string(),
    })

    const { username, password } = loginBodySchema.parse(request.body);

    const user = await prisma.user.findUnique({
        where: {
            username
        }
    })

    if (!user) {
        return reply.status(404).send("Bad request.")
    }

    const passwordIsMatch = await compare(user.password, password);

    if (!passwordIsMatch) {
        return reply.status(403).send("Unauthorized access.")
    }

    return reply.status(200).send(user);
})

app.listen({
    host: "0.0.0.0",
    port: env.PORT,
}).then(() => {
    console.log(`Server running on http://localhost:${env.PORT}`)
})
