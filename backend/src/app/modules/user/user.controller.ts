import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserCreationDTO } from 'src/infra/database/interfaces/user.interface';
import UserRepository from 'src/infra/database/repositories/UserRepository';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private userRepository: UserRepository,
    private userService: UserService,
  ) {}

  @Get()
  async getUsers() {
    const users = await this.userRepository.getUsers();
    return users.map(this.userService.getUserResponse);
  }

  @Get(':userId')
  async getUserById(@Param('userId') userId: string) {
    const user = await this.userRepository.getUserById(userId);
    return this.userService.getUserResponse(user);
  }

  @Post()
  async createUser(@Body() createUserDTO: UserCreationDTO) {
    return this.userRepository.createUser(createUserDTO);
  }
}
