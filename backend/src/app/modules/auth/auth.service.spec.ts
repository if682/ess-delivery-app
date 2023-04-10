import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
<<<<<<< HEAD
=======

  it('should be able to validate a login', async () => {
    const password = '1234';

    const expectedData = {
      token: '123456',
      userName: 'Teste',
      ADM: false,
    };

    const response = await service.validateLogin({ email: 'Teste', password });

    expect(response).toStrictEqual(expectedData);
  });

  it('should return a error if not able to validate a login', async () => {
    const password = '12345';

    jest.spyOn(mockedEncryptService, 'validatePassword').mockReturnValue(false);

    await expect(async () => {
      await service.validateLogin({ email: 'Teste', password });
    }).rejects.toThrow();
  });
>>>>>>> refs/remotes/origin/master
});
