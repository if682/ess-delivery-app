import BrandRepository from '../repositories/brand.repository';
import ProductCategoriesRepository from '../repositories/product-categories.repository';
import ProductRepository from '../repositories/product.repository';
import SectorRepository from '../repositories/sector.repository';
import UserRepository from '../repositories/user.repository';
import BrandService from '../services/brand.service';
import ProductCategoriesService from '../services/product-categories.service';
import ProductService from '../services/product.service';
import SectorService from '../services/sector.service';
import UserService from '../services/user.service';
import Injector from './injector';

export const di = new Injector();

// User
di.registerRepository(UserRepository, new UserRepository());
di.registerService(
  UserService,
  new UserService(di.getRepository(UserRepository))
);

// Sector
di.registerRepository(SectorRepository, new SectorRepository());
di.registerService(
  SectorService,
  new SectorService(di.getRepository(SectorRepository))
);

// Brand
di.registerRepository(BrandRepository, new BrandRepository());
di.registerService(
  BrandService,
  new BrandService(
    di.getRepository(BrandRepository),
    di.getService(SectorService)
  )
);

// Product Category
di.registerRepository(
  ProductCategoriesRepository,
  new ProductCategoriesRepository()
);
di.registerService(
  ProductCategoriesService,
  new ProductCategoriesService(di.getRepository(ProductCategoriesRepository))
);

// Product
di.registerRepository(ProductRepository, new ProductRepository());
di.registerService(
  ProductService,
  new ProductService(
    di.getRepository(ProductRepository),
    di.getService(BrandService),
    di.getService(ProductCategoriesService)
  )
);
