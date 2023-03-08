import BaseEntity from './base.entity';

export default class SectorEntity extends BaseEntity {
  name: string;

  constructor(data: Partial<SectorEntity>) {
    super(data.id || '');
    this.id = data.id || '';
    this.name = data.name || '';
  }
}
