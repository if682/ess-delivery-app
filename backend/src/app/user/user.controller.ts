import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserCreationDTO } from 'src/infra/database/interfaces/user.interface';
import UserRepository from 'src/infra/database/repositories/UserRepository';

@Controller('user')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Get()
  async getUsers() {
    return this.userRepository.getUsers();
  }

  @Get(':userId')
  async getUserById(@Param('userId') userId: string) {
    return this.userRepository.getUser(userId);
  }

  @Post()
  async createUser(@Body() createUserDTO: UserCreationDTO) {
    return this.userRepository.createUser(createUserDTO);
  }
}
