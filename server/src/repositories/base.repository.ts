import BaseEntity from '../entities/base.entity';
import JsonHandler from '../utils/json-handler';

export class BaseRepository<T extends BaseEntity> {
  private prefix: string;
  private db: JsonHandler<T>;

  constructor(prefix: string) {
    this.prefix = prefix;
    this.db = new JsonHandler(`${this.prefix}.json`);
  }

  public async add(data: T) {
    return await this.db.writeJsonFile(data);
  }

  public async findAll() {
    return (await this.db.readJsonFile()) || [];
  }
}
