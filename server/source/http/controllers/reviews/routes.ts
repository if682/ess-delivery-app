import { FastifyInstance } from "fastify";
import { createReview } from "./create-review";
import { listReviews } from "./list-reviews";
import { listMovieReviews } from "./list-movie-reviews";

export async function reviewRoutes(app: FastifyInstance) {
    app.post("/review", createReview);
    app.get("/review/:authorId", listReviews);
    app.get("/review/movie/:movieId", listMovieReviews)
}