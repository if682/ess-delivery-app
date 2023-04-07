import { FastifyInstance } from "fastify";
import { createlist } from "./createlist";

export async function listRoutes(app: FastifyInstance){
    app.post("/list/:userId", createlist);
}