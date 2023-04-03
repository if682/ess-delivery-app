import { FastifyInstance } from "fastify";
import { createReview } from "./create-review";

export async function reviewRoutes(app: FastifyInstance) {
    app.post("/review", createReview);
}