import ProductEntity from '../entities/product.entity';
import logger from '../logger';
import ProductModel from '../models/product.model';
import ProductRepository from '../repositories/product.repository';
import { BadRequestError } from '../utils/errors/http.error';
import BrandService from './brand.service';
import ProductCategoriesService from './product-categories.service';

class ProductServiceMessageCode {
  public static readonly product_not_found = 'product_not_found';
  public static readonly product_not_created = 'product_not_created';
}

class ProductService {
  private productRepository: ProductRepository;
  private brandService: BrandService;
  private productCategoriesService: ProductCategoriesService;

  constructor(
    productRepository: ProductRepository,
    brandService: BrandService,
    productCategoriesService: ProductCategoriesService
  ) {
    this.productRepository = productRepository;
    this.brandService = brandService;
    this.productCategoriesService = productCategoriesService;
  }

  public async getProducts(): Promise<ProductModel[]> {
    try {
      const products = await this.productRepository.getProducts();

      const results = await Promise.all(
        products.map(async (product) => {
          try {
            const brand = await this.brandService.getBrandById(product.brandId);
            const productCategory =
              await this.productCategoriesService.getProductCategoryById(
                product.productCategoryId
              );

            return new ProductModel({
              ...product,
              brand: brand,
              productCategory: productCategory,
            });
          } catch (e) {
            logger.error(
              `[ProductService][getProducts] Error while processing product ${product.id}:`,
              e
            );
            return null;
          }
        })
      );

      const filteredResults = results.filter(
        (result) => result !== null
      ) as ProductModel[];

      return filteredResults;
    } catch (e) {
      throw e;
    }
  }

  public async createProduct(data: ProductEntity): Promise<void> {
    try {
      const product = await this.productRepository.createProduct(data);

      if (!product) {
        throw new BadRequestError({
          msg: 'Erro ao criar produto!',
          msgCode: ProductServiceMessageCode.product_not_created,
        });
      }
    } catch (e) {
      throw e;
    }
  }
}

export default ProductService;
