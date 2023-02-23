import Identifiable from '../utils/identifiable';

export default class BaseEntity implements Identifiable {
  id: string;

  constructor(id: string) {
    this.id = id;
  }
}
