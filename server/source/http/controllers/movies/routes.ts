import { FastifyInstance } from "fastify";
import { moviesearch } from "./moviesearch";


export async function movieRoutes(app: FastifyInstance) {
    app.get("/movie/:id", moviesearch);
}