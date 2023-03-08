import ProductCategoryEntity from '../entities/product-category.entity';
import { InternalServerError } from '../utils/errors/http.error';
import { BaseRepository } from './base.repository';

class ProductCategoriesRepository extends BaseRepository<ProductCategoryEntity> {
  constructor() {
    super('product-categories');
  }

  public async getProductCategories(): Promise<ProductCategoryEntity[]> {
    try {
      return await this.findAll();
    } catch (e) {
      throw new InternalServerError();
    }
  }

  public async getProductCategoryById(
    id: string
  ): Promise<ProductCategoryEntity | undefined> {
    try {
      let productCategories = await this.findAll();
      let productCategory = productCategories.find(
        (productCategory) => productCategory.id === id
      );

      return productCategory;
    } catch (e) {
      throw new InternalServerError();
    }
  }
}

export default ProductCategoriesRepository;
