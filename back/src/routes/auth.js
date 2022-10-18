import express from 'express';
import AuthController from '../controllers/auth.js';
import { authorizationMiddleware } from '../middlewares/authorization.js';

export const authRouter = express.Router();
const authController = new AuthController()

authRouter.post('/login', authController.login);

authRouter.post('/validate-token', authorizationMiddleware, authController.validateToken);