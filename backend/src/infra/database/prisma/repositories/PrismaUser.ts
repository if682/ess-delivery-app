import { Injectable } from '@nestjs/common';
import {
  UserResponseDTO,
  UserCreationDTO,
} from '../../interfaces/user.interface';
import UserRepository from '../../repositories/UserRepository';
import { PrismaService } from '../prisma.service';

import { EncryptService } from 'src/utils/encrypt/encrypt.service';

@Injectable()
export class PrismaUser implements UserRepository {
  constructor(
    private prisma: PrismaService,
    private encryptService: EncryptService,
  ) {}

  async getUserById(id: string): Promise<UserResponseDTO> {
    const user = await this.prisma.user.findFirst({
      where: {
        id,
      },
    });

    if (!user) {
      throw new Error('User does not exists');
    }

    const { email, name, cpf } = user;

    const userReturn: UserResponseDTO = {
      id,
      email,
      cpf,
      name,
    };

    return userReturn;
  }

  async getUserByEmail(email: string): Promise<UserResponseDTO> {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error('User does not exists');
    }

    const { id, name, cpf, password } = user;

    const userReturn: UserResponseDTO = {
      id,
      email,
      cpf,
      name,
      password,
    };

    return userReturn;
  }

  async createUser({
    cpf,
    email,
    name,
    password,
  }: UserCreationDTO): Promise<void> {
    const userId = this.encryptService.getId();
    const hashPassword = this.encryptService.getPassword(password).toString();

    await this.prisma.user.create({
      data: {
        id: userId,
        email,
        name,
        password: hashPassword,
        cpf,
      },
    });
  }

  async getUsers(): Promise<UserResponseDTO[]> {
    const usersReturn = (await this.prisma.user.findMany({})).map(
      ({ id, name, cpf, email }) => ({
        id,
        name,
        email,
        cpf,
      }),
    );

    return usersReturn;
  }
}
