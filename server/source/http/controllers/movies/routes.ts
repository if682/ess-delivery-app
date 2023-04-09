import { FastifyInstance } from "fastify";
import { moviesearch } from "./moviesearch";
import { movieevaluation } from "./movieevaluation";
import { fetchEvaluations } from "./get-evaluations";
import { createMovie } from "./create-movie";


export async function movieRoutes(app: FastifyInstance) {
    app.get("/movie/:id", moviesearch);
    app.post("/movie/:movieId", movieevaluation);
    app.get("/evaluation/:authorId", fetchEvaluations);
    app.post("/movie", createMovie);
}