import { Express, Router } from 'express';
import UserController from '../controllers/user.controller';
import { di } from '../di';
import UserService from '../services/user.service';

const router = Router();
const prefix = '/api';

export default (app: Express) => {
  app.use(
    prefix,
    new UserController(router, di.getService(UserService)).router
  );
};
