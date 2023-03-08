import { Router, Request, Response } from 'express';
import BrandService from '../services/brand.service';
import { Result, SuccessResult } from '../utils/result';

class BrandController {
  private prefix: string = '/brands';
  public router: Router;
  private brandService: BrandService;

  constructor(router: Router, brandService: BrandService) {
    this.router = router;
    this.brandService = brandService;
    this.initRoutes();
  }

  private initRoutes() {
    this.router.get(this.prefix, (req: Request, res: Response) =>
      this.getBrands(req, res)
    );
  }

  private async getBrands(req: Request, res: Response): Promise<Response> {
    let brands = await this.brandService.getBrands();

    return new SuccessResult({
      msg: Result.transformRequestOnMsg(req),
      data: brands,
    }).handleSuccess(res);
  }
}

export default BrandController;
