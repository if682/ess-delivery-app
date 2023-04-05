import fastify from "fastify";
import { userRoutes } from "./http/controllers/users/routes";
import { reviewRoutes } from "./http/controllers/reviews/routes";

export const app = fastify();

app.register(userRoutes);
app.register(reviewRoutes);