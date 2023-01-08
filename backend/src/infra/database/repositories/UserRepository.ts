import { User } from '@prisma/client';
import { UserCreationDTO } from '../interfaces/user.interface';

export default abstract class UserRepository {
  abstract getUserById(id: string): Promise<User>;
  abstract getUserByEmail(email: string): Promise<User>;
  abstract createUser(user: UserCreationDTO): Promise<void>;
  abstract getUsers(): Promise<User[]>;
}
