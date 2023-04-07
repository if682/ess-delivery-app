import { FastifyInstance } from "fastify";
import { createlist } from "./createlist";
import { showlists } from "./showlists";
import { addmovietolist } from "./addmovietolist";
import { showmoviesfromlist } from "./showmoviesfromlist";

export async function listRoutes(app: FastifyInstance){
    app.post("/list/:userId", createlist);
    app.get("/list/:userId", showlists);
    app.post("/list/:userId/:listName", addmovietolist);
    app.get("/list/:userId/:listName", showmoviesfromlist);
}