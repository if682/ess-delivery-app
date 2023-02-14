import ProductEntity from '../entities/product.entity';
import { InternalServerError } from '../utils/errors/http.error';
import { BaseRepository } from './base.repository';

class ProductRepository extends BaseRepository<ProductEntity> {
  constructor() {
    super('products');
  }

  public async getProducts(): Promise<ProductEntity[]> {
    try {
      return await this.findAll();
    } catch (e) {
      throw new InternalServerError();
    }
  }

  public async getProductById(id: string): Promise<ProductEntity | undefined> {
    try {
      let products = await this.findAll();
      let product = products.find((product) => product.id === id);

      return product;
    } catch (e) {
      throw new InternalServerError();
    }
  }

  public async createProduct(
    data: ProductEntity
  ): Promise<ProductEntity | undefined> {
    try {
      let product = await this.add(data);

      return product;
    } catch (e) {
      throw new InternalServerError();
    }
  }
}

export default ProductRepository;
