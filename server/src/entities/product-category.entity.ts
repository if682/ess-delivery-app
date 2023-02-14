import BaseModel from '../models/base.model';

export default class ProductCategoryEntity extends BaseModel {
  name: string;

  constructor(data: Partial<ProductCategoryEntity>) {
    super(data.id || '');
    this.name = data.name || '';
  }
}
