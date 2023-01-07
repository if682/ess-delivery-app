import { UserCreationDTO, UserResponseDTO } from '../interfaces/user.interface';

export default abstract class UserRepository {
  abstract getUser(id: string): Promise<UserResponseDTO>;
  abstract createUser(user: UserCreationDTO): Promise<void>;
  abstract getUsers(): Promise<UserResponseDTO[]>;
}
