import BaseModel from './base.model';
import BrandModel from './brand.model';
import ProductCategoryModel from './product-category.model';

class ProductModel extends BaseModel {
  name: string;
  brand: BrandModel;
  value: string;
  productCategory: ProductCategoryModel;

  constructor({
    id,
    name,
    brand,
    value,
    productCategory,
  }: {
    id: string;
    name: string;
    brand: BrandModel;
    value: string;
    productCategory: ProductCategoryModel;
  }) {
    super(id);
    this.name = name;
    this.brand = brand;
    this.value = value;
    this.productCategory = productCategory;
  }
}

export default ProductModel;
