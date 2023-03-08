import BaseModel from './base.model';

export default class SectorModel extends BaseModel {
  name: string;

  constructor({ id, name }: { id: string; name: string }) {
    super(id);
    this.name = name;
  }
}
