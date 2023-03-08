import { Router, Request, Response } from 'express';
import SectorService from '../services/sector.service';
import { Result, SuccessResult } from '../utils/result';

class SectorController {
  private prefix: string = '/sectories';
  public router: Router;
  private sectorService: SectorService;

  constructor(router: Router, sectorService: SectorService) {
    this.router = router;
    this.sectorService = sectorService;
    this.initRoutes();
  }

  private initRoutes() {
    this.router.get(this.prefix, (req: Request, res: Response) =>
      this.getSectories(req, res)
    );
  }

  private async getSectories(req: Request, res: Response): Promise<Response> {
    let sectories = await this.sectorService.getSectories();

    return new SuccessResult({
      msg: Result.transformRequestOnMsg(req),
      data: sectories,
    }).handleSuccess(res);
  }
}

export default SectorController;
