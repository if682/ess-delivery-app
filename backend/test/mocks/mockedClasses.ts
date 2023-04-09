import { AuthService } from 'src/app/modules/auth/auth.service';
import { UserAuthDTO } from 'src/app/modules/auth/interfaces';
import { UserCreationDTO } from 'src/infra/database/interfaces/user.interface';
import UserRepository from 'src/infra/database/repositories/UserRepository';
import { User } from 'src/infra/database/typeorm/entities/User.entity';
import { JWTService } from 'src/utils/auth/jwt.service';
import { EncryptService } from 'src/utils/encrypt/encrypt.service';

export class MockAuthService extends AuthService {
  async validateLogin(userAuthDTO: UserAuthDTO) {
    return {
      token: 'mockToken',
      userName: 'mockUserName',
    };
  }

  async validateTokenAndReturnId(token: string) {
    return 'mockId';
  }
}

/* private userRepository: UserRepository,
    private encryptService: EncryptService,
    private jwtService: JWTService, */

export class MockedJWTService extends JWTService {
  getJWT(idUser: string) {
    return '123456';
  }

  async validateJWT(token: string) {
    return Promise.resolve('12345');
  }
}

export class MockedEncryptService extends EncryptService {
  getId() {
    return 'generateId';
  }

  getPassword(password: string) {
    return 'generatePassword' as unknown as Buffer;
  }

  validatePassword(password: string, hash: string) {
    return true;
  }
}

export class MockedUserRepository extends UserRepository {
  getUserById(id: string): Promise<User> {
    const user = new User();

    Object.assign(user, {
      id,
      name: 'Teste',
      cpf: '12345678912',
      email: 'Teste',
    });

    return Promise.resolve(user);
  }
  getUserByEmail(email: string): Promise<User> {
    const user = new User();

    Object.assign(user, {
      name: 'Teste',
      cpf: '12345678912',
      email,
    });

    return Promise.resolve(user);
  }
  createUser(user: UserCreationDTO): Promise<void> {
    return Promise.resolve();
  }
  createAdminUser(user: UserCreationDTO): Promise<User> {
    const newUser = new User();

    Object.assign(newUser, user);

    return Promise.resolve(newUser);
  }
  getUsers(): Promise<User[]> {
    const user = new User();

    Object.assign(user, {
      name: 'Teste',
      cpf: '12345678912',
      email: 'Teste',
    });

    return Promise.resolve([user]);
  }
  getUserByCPF(cpf: string): Promise<User> {
    const user = new User();

    Object.assign(user, {
      name: 'Teste',
      cpf,
      email: 'Teste',
    });

    return Promise.resolve(user);
  }
}
