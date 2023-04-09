import { UserController } from './user.controller';
import {
  MockedUserContactRepository,
  MockedUserRepository,
  MockedUserService,
} from '../../../../test/mocks/mockedClasses';

describe('UserController', () => {
  let controller: UserController;

  const mockedUserRepository = new MockedUserRepository();
  const mockedUserContactRepository = new MockedUserContactRepository();
  const mockedUserService = new MockedUserService();

  describe('Default user routes', () => {
    beforeEach(async () => {
      controller = new UserController(
        mockedUserRepository,
        mockedUserContactRepository,
        mockedUserService,
      );
    });

    afterEach(async () => {
      jest.restoreAllMocks();
    });

    it('should be defined', () => {
      expect(controller).toBeDefined();
    });

    it('should be able to list all system users', async () => {
      const expectedData = [
        {
          id: undefined,
          role: undefined,
          name: 'Teste',
          cpf: '***.***.***-12',
          email: 'Teste',
        },
      ];

      const response = await controller.getUsers();

      expect(response).toStrictEqual(expectedData);
    });

    it('should be able to get user by id', async () => {
      const expectedData = {
        id: 'userId',
        role: undefined,
        name: 'Teste',
        cpf: '***.***.***-12',
        email: 'Teste',
      };

      const response = await controller.getUserById('userId');

      expect(response).toStrictEqual(expectedData);
    });

    it('should be able to create a user if all params are correct', async () => {
      jest
        .spyOn(mockedUserRepository, 'getUserByEmail')
        .mockResolvedValue(null);
      jest.spyOn(mockedUserRepository, 'getUserByCPF').mockResolvedValue(null);

      const userData = {
        name: 'Teste',
        email: 'Teste',
        cpf: '12345678912',
        password: '123456',
      };

      await expect(controller.createUser(userData)).resolves.not.toThrow();
    });

    it('should throw an error if email is already registered', async () => {
      jest.spyOn(mockedUserRepository, 'getUserByCPF').mockResolvedValue(null);

      const userData = {
        name: 'Teste',
        email: 'Teste',
        cpf: '12345678912',
        password: '123456',
      };

      await expect(controller.createUser(userData)).rejects.toThrowError(
        'Email already registered',
      );
    });

    it('should throw an error if cpf is already registered', async () => {
      jest
        .spyOn(mockedUserRepository, 'getUserByEmail')
        .mockResolvedValue(null);

      const userData = {
        name: 'Teste',
        email: 'Teste',
        cpf: '12345678912',
        password: '123456',
      };

      await expect(controller.createUser(userData)).rejects.toThrowError(
        'CPF already registered',
      );
    });
  });

  describe('ADM user routes', () => {
    beforeEach(async () => {
      controller = new UserController(
        mockedUserRepository,
        mockedUserContactRepository,
        mockedUserService,
      );
    });

    afterEach(async () => {
      jest.restoreAllMocks();
    });

    it('should be able to create a ADM user with successfull', async () => {
      const userData = {
        name: 'Teste',
        email: 'Teste',
        cpf: '12345678912',
        password: '123456',
        phone: '81 9 9999-9999',
        state: 'Estado',
        city: 'Cidade',
        neighborhood: 'Bairro',
        street: 'Rua',
        complement: 'Complemento',
        reference: 'Referencia',
      };

      jest
        .spyOn(mockedUserRepository, 'getUserByEmail')
        .mockResolvedValue(null);
      jest.spyOn(mockedUserRepository, 'getUserByCPF').mockResolvedValue(null);

      await expect(controller.createAdminUser(userData)).resolves.not.toThrow();
    });

    it('should throw an error if email already exists', async () => {
      const userData = {
        name: 'Teste',
        email: 'Teste',
        cpf: '12345678912',
        password: '123456',
        phone: '81 9 9999-9999',
        state: 'Estado',
        city: 'Cidade',
        neighborhood: 'Bairro',
        street: 'Rua',
        complement: 'Complemento',
        reference: 'Referencia',
      };

      jest.spyOn(mockedUserRepository, 'getUserByCPF').mockResolvedValue(null);

      await expect(controller.createAdminUser(userData)).rejects.toThrowError(
        'Email already registered',
      );
    });

    it('should throw an error if cpf already exists', async () => {
      const userData = {
        name: 'Teste',
        email: 'Teste',
        cpf: '12345678912',
        password: '123456',
        phone: '81 9 9999-9999',
        state: 'Estado',
        city: 'Cidade',
        neighborhood: 'Bairro',
        street: 'Rua',
        complement: 'Complemento',
        reference: 'Referencia',
      };

      jest
        .spyOn(mockedUserRepository, 'getUserByEmail')
        .mockResolvedValue(null);

      await expect(controller.createAdminUser(userData)).rejects.toThrowError(
        'CPF already registered',
      );
    });
  });
});
