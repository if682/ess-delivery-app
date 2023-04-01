import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserCreationDTO } from 'src/infra/database/interfaces/user.interface';
import UserRepository from 'src/infra/database/repositories/UserRepository';
import { UserService } from './user.service';
import UserContactRepository from 'src/infra/database/repositories/ADMUserContactRepository';
import { ADMUserCreationDTO } from 'src/infra/database/interfaces/userContact.interface';

@Controller('user')
export class UserController {
  constructor(
    private userRepository: UserRepository,
    private userContactRepository: UserContactRepository,
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

  @Get('admin/:userId')
  async getAdminUserInfo(@Param('userId') userId: string) {
    const admin = await this.userRepository.getUserById(userId);
    const contact = await this.userContactRepository.getContactByUserId(userId);

    const info = {
      ...admin,
      ...contact,
    };

    return info;
  }

  @Post('admin')
  async createAdminUser(@Body() body: ADMUserCreationDTO) {
    const { email, password, name, cpf } = body;
    const user = await this.userRepository.createAdminUser({
      email,
      password,
      name,
      cpf,
    });

    console.log('dsaddd->>>>', user.id);

    const info = await this.userContactRepository.createContact({
      ...body,
      userId: user.id,
    });

    return {
      ...user,
      ...info,
    };
  }
}
