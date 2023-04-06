import { Injectable } from '@nestjs/common';
import { formatCPF } from './functions/formatData';
import { UserResponse } from './interfaces';
import { User } from 'src/infra/database/typeorm/entities/User.entity';

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
