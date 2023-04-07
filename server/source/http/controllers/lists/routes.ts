import { FastifyInstance } from "fastify";
import { createlist } from "./createlist";
import { showlists } from "./showlists";

export async function listRoutes(app: FastifyInstance){
    app.post("/list/:userId", createlist);
    app.get("/list/:userId", showlists);
}