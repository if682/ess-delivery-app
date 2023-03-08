import BaseEntity from './base.entity';

export default class ProductEntity extends BaseEntity {
  name: string;
  brandId: string;
  value: string;
  productCategoryId: string;

  constructor(data: Partial<ProductEntity>) {
    super(data.id || '');
    this.name = data.name || '';
    this.brandId = data.brandId || '';
    this.value = data.value || '';
    this.productCategoryId = data.productCategoryId || '';
  }
}
