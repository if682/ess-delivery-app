import Identifiable from '../utils/identifiable';

export default class BaseModel implements Identifiable {
  id: string;

  constructor(id: string) {
    this.id = id;
  }
}
