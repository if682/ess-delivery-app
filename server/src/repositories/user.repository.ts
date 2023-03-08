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
      let formattedUser = new UserModel({
        ...user,
        id: (this.users.length + 1).toString(),
      });

      this.users.push(formattedUser);

      return formattedUser;
    } catch (e) {
      throw new InternalServerError();
    }
  }
}

export default UserRepository;
