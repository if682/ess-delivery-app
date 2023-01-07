import { Injectable } from '@nestjs/common';
import {
  UserResponseDTO,
  UserCreationDTO,
} from '../../interfaces/user.interface';
import UserRepository from '../../repositories/UserRepository';
import { PrismaService } from '../prisma.service';

import { randomUUID as uuId } from 'node:crypto';

@Injectable()
export class PrismaUser implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async getUser(id: string): Promise<UserResponseDTO> {
    const user = await this.prisma.user.findFirst({
      where: {
        id,
      },
    });

    if (!user) {
      throw new Error('User does not exists');
    }

    const { email, name } = user;

    const userReturn: UserResponseDTO = {
      id,
      email,
      name,
    };

    return userReturn;
  }
  async createUser({ email, name, password }: UserCreationDTO): Promise<void> {
    const userId = uuId();

    await this.prisma.user.create({
      data: {
        id: userId,
        email,
        name,
        password,
      },
    });
  }

  async getUsers(): Promise<UserResponseDTO[]> {
    const usersReturn = (await this.prisma.user.findMany({})).map(
      ({ id, name, email }) => ({
        id,
        name,
        email,
      }),
    );

    return usersReturn;
  }
}
