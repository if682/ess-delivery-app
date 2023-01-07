import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserAuthDTO } from './interfaces';

@Controller('login')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  async userLogin(@Body() userCredentials: UserAuthDTO) {
    return this.authService.validateLogin(userCredentials);
  }
}
