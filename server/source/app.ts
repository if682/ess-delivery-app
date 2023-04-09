import fastify from "fastify";
import { userRoutes } from "./http/controllers/users/routes";
import { reviewRoutes } from "./http/controllers/reviews/routes";
import { movieRoutes } from "./http/controllers/movies/routes";
import { listRoutes } from "./http/controllers/lists/routes";
import cors from "@fastify/cors";

export const app = fastify();

app.register(cors, {
    origin: true,
});

app.register(userRoutes);
app.register(reviewRoutes);
app.register(movieRoutes);
app.register(listRoutes);