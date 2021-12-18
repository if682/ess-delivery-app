import { Promotion } from "./promotion";

export class PromotionService {
	promotions: Promotion[] = [];

	add(promotion: Promotion): Promotion {
		this.promotions.push(new Promotion(promotion));
		return promotion;
	}

	update(promotion: Promotion): boolean {
		const toBeUpdated = this.getById(promotion.id);
		try {
			toBeUpdated.update(promotion);
		} catch {
			return false;
		}
		return true;
	}

	deleteById(promotionId: number): void {
		this.promotions = this.promotions.filter(
			(promotion) => promotion.id != promotionId
		);
	}

	deleteByName(promotionName: string): void {
		this.promotions.filter((promotion) => promotion.name != promotionName);
	}

	get(): Promotion[] {
		return this.promotions;
	}

	getById(promotionId: number): Promotion {
		return this.promotions.find(({ id }) => id == promotionId);
	}
}
