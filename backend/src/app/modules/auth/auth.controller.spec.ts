import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
<<<<<<< HEAD
=======

  it('should be able to validate a valid login', async () => {
    const expectedData = {
      token: 'mockToken',
      userName: 'mockUserName',
      ADM: false,
    };

    const response = await controller.userLogin({} as UserAuthDTO);

    expect(response).toStrictEqual(expectedData);
  });

  it('should be able to return a valid id if receives a token', async () => {
    const expectedData = 'mockId';

    const response = await controller.getUserIdByToken('token');

    expect(response).toBe(expectedData);
  });
>>>>>>> refs/remotes/origin/master
});
