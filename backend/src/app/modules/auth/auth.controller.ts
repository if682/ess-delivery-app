import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserAuthDTO } from './interfaces';

@Controller('login')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  async userLogin(@Body() userCredentials: UserAuthDTO) {
    const test = await this.authService.validateLogin(userCredentials);
    console.log('Login response');
    console.log(test);
    return test;
  }

  @Get(':token')
  async getUserIdByToken(@Param('token') token: string) {
    return this.authService.validateTokenAndReturnId(token);
  }
}
