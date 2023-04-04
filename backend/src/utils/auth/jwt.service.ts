import { Injectable } from '@nestjs/common';
import { generateJWT } from './functions/generateJWT';
import { validateJWT } from './functions/validateJWT';

@Injectable()
export class JWTService {
  getJWT(idUser: string) {
    return generateJWT(idUser);
  }

  async validateJWT(token: string) {
    return await validateJWT(token);
  }
}
