import UserRepository from '../repositories/user.repository';
import UserService from '../services/user.service';
import Injector from './injector';

export const di = new Injector();

di.registerRepository(UserRepository, new UserRepository());
di.registerService(
  UserService,
  new UserService(di.getRepository(UserRepository))
);
