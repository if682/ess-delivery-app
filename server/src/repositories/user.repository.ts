import UserModel from '../models/user.model';
import { InternalServerError } from '../utils/errors/http.error';

class UserRepository {
  private users: UserModel[] = [];

  public getUsers(): UserModel[] {
    return this.users;
  }

  public getUserById(id: string): UserModel | undefined {
    try {
      return this.users.find((user) => user.id === id);
    } catch (e) {
      throw new InternalServerError();
    }
  }

  public createUser(user: UserModel): UserModel {
    try {
      this.users.push(user);

      return user;
    } catch (e) {
      throw new InternalServerError();
    }
  }
}

export default UserRepository;
