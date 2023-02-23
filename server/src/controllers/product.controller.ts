import { Router, Request, Response } from 'express';
import ProductEntity from '../entities/product.entity';
import ProductService from '../services/product.service';
import { Result, SuccessResult } from '../utils/result';

class ProductController {
  private prefix: string = '/products';
  public router: Router;
  private productService: ProductService;

  constructor(router: Router, productService: ProductService) {
    this.router = router;
    this.productService = productService;
    this.initRoutes();
  }

  private initRoutes() {
    this.router.get(this.prefix, (req: Request, res: Response) =>
      this.getProducts(req, res)
    );
    this.router.post(this.prefix, (req: Request, res: Response) =>
      this.createProduct(req, res)
    );
  }

  private async getProducts(req: Request, res: Response): Promise<Response> {
    let products = await this.productService.getProducts();

    return new SuccessResult({
      msg: Result.transformRequestOnMsg(req),
      data: products,
    }).handleSuccess(res);
  }

  private async createProduct(req: Request, res: Response): Promise<Response> {
    await this.productService.createProduct(new ProductEntity(req.body));

    return new SuccessResult({
      msg: Result.transformRequestOnMsg(req),
    }).handleSuccess(res);
  }
}

export default ProductController;
