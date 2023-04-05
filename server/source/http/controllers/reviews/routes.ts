import { FastifyInstance } from "fastify";
import { createReview } from "./create-review";
import { listReviews } from "./list-reviews";

export async function reviewRoutes(app: FastifyInstance) {
    app.post("/review", createReview);
    app.get("/review/:id", listReviews);
}