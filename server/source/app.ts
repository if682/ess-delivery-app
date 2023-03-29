import fastify from "fastify";

export const app = fastify();

app.get("/", (request, reply) => {
    reply.status(200).send("Hello");
})