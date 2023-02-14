import SectorModel from '../models/sector.model';
import SectorRepository from '../repositories/sector.repository';
import { NotFoundError } from '../utils/errors/http.error';

class SectorServiceMessageCode {
  public static readonly sector_not_found = 'sector_not_found';
}

class SectorService {
  private sectorRepository: SectorRepository;

  constructor(sectorRepository: SectorRepository) {
    this.sectorRepository = sectorRepository;
  }

  public async getSectories(): Promise<SectorModel[]> {
    try {
      const sectoriesEntity = await this.sectorRepository.getSectories();

      const sectories = sectoriesEntity.map((sector) => {
        return new SectorModel(sector);
      });

      return sectories;
    } catch (e) {
      throw e;
    }
  }

  public async getSectorById(id: string): Promise<SectorModel> {
    try {
      const sector = await this.sectorRepository.getSectorById(id);

      if (!sector) {
        throw new NotFoundError({
          msg: 'Setor não encontrado!',
          msgCode: SectorServiceMessageCode.sector_not_found,
        });
      }

      return new SectorModel(sector);
    } catch (e) {
      throw e;
    }
  }
}

export default SectorService;
