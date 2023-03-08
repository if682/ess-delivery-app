import { Router, Request, Response } from 'express';
import UserModel from '../models/user.model';
import UserService from '../services/user.service';
import { Result, SuccessResult } from '../utils/result';

class UserController {
  private prefix: string = '/users';
  public router: Router;
  private userService: UserService;

  constructor(router: Router, userService: UserService) {
    this.router = router;
    this.userService = userService;
    this.initRoutes();
  }

  private initRoutes() {
    this.router.get(this.prefix, (req: Request, res: Response) =>
      this.getUsers(req, res)
    );
    this.router.get(`${this.prefix}/:id`, (req: Request, res: Response) =>
      this.getUserById(req, res)
    );
    this.router.post(this.prefix, (req: Request, res: Response) =>
      this.createUsers(req, res)
    );
  }

  private getUsers(req: Request, res: Response) {
    let users = this.userService.getUsers();

    return new SuccessResult({
      msg: Result.transformRequestOnMsg(req),
      data: users,
    }).handleSuccess(res);
  }

  private getUserById(req: Request, res: Response) {
    let user = this.userService.getUserById(req.params.id);

    return new SuccessResult({
      msg: Result.transformRequestOnMsg(req),
      data: user,
    }).handleSuccess(res);
  }

  private createUsers(req: Request, res: Response) {
    let user = this.userService.createUser(
      new UserModel({
        id: req.body.id,
        name: req.body.name,
      })
    );

    return new SuccessResult({
      msg: Result.transformRequestOnMsg(req),
      code: 201,
      data: user,
    }).handleSuccess(res);
  }
}

export default UserController;
