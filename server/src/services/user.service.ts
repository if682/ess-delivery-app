import UserModel from '../models/user.model';
import UserRepository from '../repositories/user.repository';
import { NotFoundError } from '../utils/errors/http.error';
import isDefined from '../utils/isDefined';

class UserServiceMessageCode {
  public static readonly user_not_found = 'user_not_found';
}

class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public getUsers(): UserModel[] {
    try {
      return this.userRepository.getUsers();
    } catch (e) {
      throw e;
    }
  }

  public getUserById(id: string): UserModel | void {
    try {
      let user = this.userRepository.getUserById(id);

      if (!isDefined(user)) {
        throw new NotFoundError({
          msg: 'Usuário não encontrado!',
          msgCode: UserServiceMessageCode.user_not_found,
        });
      }

      return user;
    } catch (e) {
      throw e;
    }
  }

  public createUser(user: UserModel): UserModel {
    try {
      return this.userRepository.createUser(user);
    } catch (e) {
      throw e;
    }
  }
}

export default UserService;
