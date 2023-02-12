export class UserModel {
  id: string = '';
  name: string = '';

  constructor(data?: Partial<UserModel>) {
    Object.assign(this, data);
  }
}
