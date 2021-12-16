import { Promotion } from "./promotion";

export class PromotionService {

  promotions: Promotion[] = [];
  
  add(promotion: Promotion): void {
    this.promotions.push(new Promotion(promotion));
  }

  update(promotion: Promotion): void {
    const toBeUpdated = this.getById(promotion.id)
    toBeUpdated.update(promotion);
  }

  deleteById(promotionId: number): void {
    this.promotions.filter(promotion => promotion.id != promotionId);
  }

  deleteByName(promotionName: string): void {
    this.promotions.filter(promotion => promotion.name != promotionName);
  }

  get() : Promotion[] {
    return this.promotions;
  }

  getById(promotionId: number) : Promotion {
    return this.promotions.find(({id}) => id == promotionId)
  }
}
