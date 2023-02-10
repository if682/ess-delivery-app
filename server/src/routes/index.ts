import { Express } from "express"
import UserController from "../controllers/user.controller"

export default (app: Express ) => {

app.use('/api', new UserController().router);

}