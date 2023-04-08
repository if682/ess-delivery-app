import fastify from "fastify";
import { userRoutes } from "./http/controllers/users/routes";
import { reviewRoutes } from "./http/controllers/reviews/routes";
import { movieRoutes } from "./http/controllers/movies/routes";
import { listRoutes } from "./http/controllers/lists/routes";

export const app = fastify();

app.register(userRoutes);
app.register(reviewRoutes);
app.register(movieRoutes);
app.register(listRoutes);