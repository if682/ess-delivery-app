import { Injectable, Inject } from '@nestjs/common';
import { EncryptService } from 'src/utils/encrypt/encrypt.service';
import { Repository } from 'typeorm';
import { UserCreationDTO } from '../../../interfaces/user.interface';
import UserRepository from '../../../repositories/UserRepository';
import { User } from '../../entities/User.entity';

@Injectable()
export class TypeOrmUserRepository implements UserRepository {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
    private encryptService: EncryptService,
  ) {}

  getUserById(id: string): Promise<User> {
    return this.userRepository.findOne({
      where: {
        id,
      },
    });
  }
  getUserByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({
      where: {
        email,
      },
    });
  }
  async createUser({
    cpf,
    email,
    name,
    password,
  }: UserCreationDTO): Promise<void> {
    const userId = this.encryptService.getId();
    const hashPassword = this.encryptService.getPassword(password).toString();

    const newUser = new User();

    Object.assign(newUser, {
      id: userId,
      email,
      name,
      password: hashPassword,
      cpf,
      role: 'USER',
    });

    await this.userRepository.save(newUser);
  }

  async createAdminUser({
    cpf,
    email,
    name,
    password,
  }: UserCreationDTO): Promise<User> {
    const userId = this.encryptService.getId();
    const hashPassword = this.encryptService.getPassword(password).toString();

    const newUser = new User();

    Object.assign(newUser, {
      id: userId,
      email,
      name,
      password: hashPassword,
      cpf,
      role: 'ADMIN',
    });

    await this.userRepository.save(newUser);

    return newUser;
  }

  getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  getUserByCPF(cpf: string): Promise<User> {
    return this.userRepository.findOne({
      where: {
        cpf,
      },
    });
  }
}
