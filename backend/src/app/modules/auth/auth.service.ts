import { Injectable } from '@nestjs/common';
import UserRepository from 'src/infra/database/repositories/UserRepository';
import { EncryptService } from 'src/utils/encrypt/encrypt.service';
import { UserAuthDTO } from './interfaces';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private encryptService: EncryptService,
  ) {}

  async validateLogin({ email, password }: UserAuthDTO) {
    const { password: hash } = await this.userRepository.getUserByEmail(email);
    const isPasswordValid = this.encryptService.validatePassword(
      password,
      hash,
    );
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    return 'Valid credentials!';
  }
}
