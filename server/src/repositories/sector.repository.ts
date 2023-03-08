import SectorEntity from '../entities/sector.entity';
import { InternalServerError } from '../utils/errors/http.error';
import { BaseRepository } from './base.repository';

class SectorRepository extends BaseRepository<SectorEntity> {
  constructor() {
    super('sectories');
  }

  public async getSectories(): Promise<SectorEntity[]> {
    try {
      return await this.findAll();
    } catch (e) {
      throw new InternalServerError();
    }
  }

  public async getSectorById(id: string): Promise<SectorEntity | undefined> {
    try {
      let sectories = await this.findAll();
      let sector = sectories.find((sector) => sector.id === id);

      return sector;
    } catch (e) {
      throw new InternalServerError();
    }
  }
}

export default SectorRepository;
