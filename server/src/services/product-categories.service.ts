import ProductCategoryModel from '../models/product-category.model';
import ProductCategoriesRepository from '../repositories/product-categories.repository';
import { NotFoundError } from '../utils/errors/http.error';

class ProductCategoriesServiceMessageCode {
  public static readonly product_categories_not_found =
    'product_categories_not_found';
}

class ProductCategoriesService {
  private productCategoriesRepository: ProductCategoriesRepository;

  constructor(productCategoriesRepository: ProductCategoriesRepository) {
    this.productCategoriesRepository = productCategoriesRepository;
  }

  public async getProductCategories(): Promise<ProductCategoryModel[]> {
    try {
      const productCategoriesEntity =
        await this.productCategoriesRepository.getProductCategories();

      const productCategories = productCategoriesEntity.map(
        (productCategory) => {
          return new ProductCategoryModel(productCategory);
        }
      );

      return productCategories;
    } catch (e) {
      throw e;
    }
  }

  public async getProductCategoryById(
    id: string
  ): Promise<ProductCategoryModel> {
    try {
      const productCategory =
        await this.productCategoriesRepository.getProductCategoryById(id);

      if (!productCategory) {
        throw new NotFoundError({
          msg: 'Categoria do produto não encontrada!',
          msgCode:
            ProductCategoriesServiceMessageCode.product_categories_not_found,
        });
      }

      return new ProductCategoryModel(productCategory);
    } catch (e) {
      throw e;
    }
  }
}

export default ProductCategoriesService;
