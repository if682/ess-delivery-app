import BaseEntity from './base.entity';

export default class BrandEntity extends BaseEntity {
  name: string;
  sectorId: string;

  constructor(data: Partial<BrandEntity>) {
    super(data.id || '');
    this.name = data.name || '';
    this.sectorId = data.sectorId || '';
  }
}
