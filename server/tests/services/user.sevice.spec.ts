import UserService from '../../src/services/user.service';
import Injector from '../../src/di/injector';
import { di } from '../../src/di/index';
import UserRepository from '../../src/repositories/user.repository';
import UserModel from '../../src/models/user.model';

describe('UserService', () => {
  let userService: UserService;
  let userRepository: UserRepository;
  let injector: Injector = di;

  beforeEach(() => {
    injector.registerRepository(UserRepository, new UserRepository());
    userRepository = injector.getRepository(UserRepository);

    injector.registerService(UserService, new UserService(userRepository));
    userService = injector.getService(UserService);
  });

  const mockUser = new UserModel({
    id: '1',
    name: 'John',
  });

  it('should return a user', () => {
    jest.spyOn(userRepository, 'getUserById').mockReturnValue(mockUser);

    const user = userService.getUserById(mockUser.id);

    expect(user).toBeDefined();
  });
});
