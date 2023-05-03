import { FastifyInstance } from "fastify";
import { register } from "./register";
import { authenticate } from "./authenticate";
import { forgotpassword } from "./forgotpassword";
import { changepassword } from "./changepassword";
import { editUser } from "./edit-user";
import { getProfile } from "./get-profile";

export async function userRoutes(app: FastifyInstance) {
    app.post("/register", register);
    app.post("/login", authenticate);
    app.put("/forgotpassword", forgotpassword);
    app.put("/changepassword", changepassword);
    app.put("/edit", editUser)
    app.get("/profile/:id", getProfile);
}