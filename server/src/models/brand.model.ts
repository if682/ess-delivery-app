import BaseModel from './base.model';
import SectorModel from './sector.model';

export default class BrandModel extends BaseModel {
  name: string;
  sector: SectorModel;

  constructor({
    id,
    name,
    sector,
  }: {
    id: string;
    name: string;
    sector: SectorModel;
  }) {
    super(id);
    this.name = name;
    this.sector = sector;
  }
}
