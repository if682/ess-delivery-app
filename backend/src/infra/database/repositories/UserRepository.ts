import { UserCreationDTO, UserResponseDTO } from '../interfaces/user.interface';

export default abstract class UserRepository {
  abstract getUserById(id: string): Promise<UserResponseDTO>;
  abstract getUserByEmail(email: string): Promise<UserResponseDTO>;
  abstract createUser(user: UserCreationDTO): Promise<void>;
  abstract getUsers(): Promise<UserResponseDTO[]>;
}
