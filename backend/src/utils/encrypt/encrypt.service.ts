import { Injectable } from '@nestjs/common';
import generateId from './functions/generateId';
import { generatePassword, verifyPassword } from './functions/hashPassword';

@Injectable()
export class EncryptService {
  getId() {
    return generateId();
  }

  getPassword(password: string) {
    return generatePassword(password);
  }

  validatePassword(password: string, hash: string) {
    return verifyPassword(password, hash);
  }
}
