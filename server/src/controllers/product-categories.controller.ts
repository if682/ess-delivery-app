import { Router, Request, Response } from 'express';
import ProductCategoriesService from '../services/product-categories.service';
import { Result, SuccessResult } from '../utils/result';

class ProductCategoriesController {
  private prefix: string = '/product-categories';
  public router: Router;
  private productCategoriesService: ProductCategoriesService;

  constructor(
    router: Router,
    productCategoriesService: ProductCategoriesService
  ) {
    this.router = router;
    this.productCategoriesService = productCategoriesService;
    this.initRoutes();
  }

  private initRoutes() {
    this.router.get(this.prefix, (req: Request, res: Response) =>
      this.getProductCategories(req, res)
    );
  }

  private async getProductCategories(
    req: Request,
    res: Response
  ): Promise<Response> {
    let productCategories =
      await this.productCategoriesService.getProductCategories();

    return new SuccessResult({
      msg: Result.transformRequestOnMsg(req),
      data: productCategories,
    }).handleSuccess(res);
  }
}

export default ProductCategoriesController;
