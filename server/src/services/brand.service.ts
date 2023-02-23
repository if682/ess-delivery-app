import logger from '../logger';
import BrandModel from '../models/brand.model';
import BrandRepository from '../repositories/brand.repository';
import { NotFoundError } from '../utils/errors/http.error';
import SectorService from './sector.service';

class BrandServiceMessageCode {
  public static readonly brand_not_found = 'brand_not_found';
}

class BrandService {
  private brandRepository: BrandRepository;
  private sectorService: SectorService;

  constructor(brandRepository: BrandRepository, sectorService: SectorService) {
    this.brandRepository = brandRepository;
    this.sectorService = sectorService;
  }

  public async getBrands(): Promise<BrandModel[]> {
    try {
      const brands = await this.brandRepository.getBrands();

      const results = await Promise.all(
        brands.map(async (brand) => {
          try {
            const sector = await this.sectorService.getSectorById(
              brand.sectorId
            );

            return new BrandModel({
              ...brand,
              sector: sector,
            });
          } catch (e) {
            logger.error(
              `[BrandService][getBrands] Error while processing brand ${brand.id}:`,
              e
            );
            return null;
          }
        })
      );

      const filteredResults = results.filter(
        (result) => result !== null
      ) as BrandModel[];

      return filteredResults;
    } catch (e) {
      throw e;
    }
  }

  public async getBrandById(id: string): Promise<BrandModel> {
    try {
      const brand = await this.brandRepository.getBrandById(id);

      if (!brand) {
        throw new NotFoundError({
          msg: 'Marca não encontrada!',
          msgCode: BrandServiceMessageCode.brand_not_found,
        });
      }

      const sector = await this.sectorService.getSectorById(brand!.sectorId);

      return new BrandModel({
        ...brand,
        sector: sector,
      });
    } catch (e) {
      throw e;
    }
  }
}

export default BrandService;
