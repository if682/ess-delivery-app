import { Router, Request, Response } from "express";


class UserController {
    public router: Router;
    constructor () {
        this.router = Router();
        this.initRoutes();
    } 

    private initRoutes () {
        this.router.get('/users',this.getUsers);
    } 
    
    private getUsers (req:Request, res:Response) {
        return res.status(200).send("Runnig")    
    }
}

export default UserController;