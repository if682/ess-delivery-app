import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { formatCPF } from './functions/formatData';
import { UserResponse } from './interfaces';

@Injectable()
export class UserService {
  getUserResponse(user: User): UserResponse {
    const { id, email, name, cpf, role } = user;

    return {
      id,
      email,
      name,
      cpf: formatCPF(cpf),
      role,
    };
  }
}
