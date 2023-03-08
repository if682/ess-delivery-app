import BaseModel from './base.model';

class UserModel extends BaseModel {
  name: string;

  constructor({ id, name }: { id: string; name: string }) {
    super(id);
    this.name = name;
  }
}

export default UserModel;
