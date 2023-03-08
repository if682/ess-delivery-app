import BrandEntity from '../entities/brand.entity';
import { InternalServerError } from '../utils/errors/http.error';
import { BaseRepository } from './base.repository';

class BrandRepository extends BaseRepository<BrandEntity> {
  constructor() {
    super('brands');
  }

  public async getBrands(): Promise<BrandEntity[]> {
    try {
      return await this.findAll();
    } catch (e) {
      throw new InternalServerError();
    }
  }

  public async getBrandById(id: string): Promise<BrandEntity | undefined> {
    try {
      let brands = await this.findAll();
      let brand = brands.find((brand) => brand.id === id);

      return brand;
    } catch (e) {
      throw new InternalServerError();
    }
  }
}

export default BrandRepository;
