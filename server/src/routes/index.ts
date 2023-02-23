import { Express, Router } from 'express';
import BrandController from '../controllers/brand.controller';
import ProductCategoriesController from '../controllers/product-categories.controller';
import ProductController from '../controllers/product.controller';
import SectorController from '../controllers/sector.controller';
import UserController from '../controllers/user.controller';
import { di } from '../di';
import BrandService from '../services/brand.service';
import ProductCategoriesService from '../services/product-categories.service';
import ProductService from '../services/product.service';
import SectorService from '../services/sector.service';
import UserService from '../services/user.service';

const router = Router();
const prefix = '/api';

export default (app: Express) => {
  app.use(
    prefix,
    new UserController(router, di.getService(UserService)).router
  );
  app.use(
    prefix,
    new ProductController(router, di.getService(ProductService)).router
  );
  app.use(
    prefix,
    new BrandController(router, di.getService(BrandService)).router
  );
  app.use(
    prefix,
    new SectorController(router, di.getService(SectorService)).router
  );
  app.use(
    prefix,
    new ProductCategoriesController(
      router,
      di.getService(ProductCategoriesService)
    ).router
  );
};
