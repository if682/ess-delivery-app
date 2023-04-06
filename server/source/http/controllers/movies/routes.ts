import { FastifyInstance } from "fastify";
import { moviesearch } from "./moviesearch";
import { movieevaluation } from "./movieevaluation";


export async function movieRoutes(app: FastifyInstance) {
    app.get("/movie/:id", moviesearch);
    app.post("/movie/:movieId", movieevaluation);
}