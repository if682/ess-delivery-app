import { Injectable } from '@nestjs/common';
import { UserCreationDTO } from '../../interfaces/user.interface';
import UserRepository from '../../repositories/UserRepository';
import { PrismaService } from '../prisma.service';

import { EncryptService } from 'src/utils/encrypt/encrypt.service';
import { User } from '../../typeorm/entities/User.entity';

@Injectable()
export class PrismaUser implements UserRepository {
  constructor(
    private prisma: PrismaService,
    private encryptService: EncryptService,
  ) {}

  async getUserById(id: string): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: {
        id,
      },
    });

    if (!user) {
      throw new Error('User does not exists');
    }

    return user;
  }

  async getUserByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error('User does not exists');
    }

    return user;
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

  async getUsers(): Promise<User[]> {
    return await this.prisma.user.findMany({});
  }

  async createAdminUser(user: UserCreationDTO): Promise<User> {
    throw new Error('Method not implemented');
  }

  async getUserByCPF(cpf: string): Promise<User> {
    throw new Error('Method not implemented');
  }
}
