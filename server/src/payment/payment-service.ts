import { Payment } from "./payment";

export class PaymentService {
	paymentMethods: Payment[] = [];

	add(payment: Payment): Payment {
		this.paymentMethods.push(new Payment(payment));

		// fetch('http://localhost:3000/payment', {body: JSON.stringify(payment), method: 'POST'});

		return payment;
	}

	update(payment: Payment): boolean {
		const toBeUpdated = this.getById(payment.id);

		try {
			toBeUpdated.update(payment);
		} catch (error) {
			return false;
		}

		return true;
	}

	deleteById(paymentId: number): void {
		let payments = this.paymentMethods.filter(
			(payment) => payment.id != paymentId
		);

		console.log(payments);

		this.paymentMethods = payments;
	}

	deleteByName(paymentName: string): void {
		this.paymentMethods.filter((payment) => payment.value != paymentName);
	}

	get(): Payment[] {
		return this.paymentMethods;
	}

	getById(paymentId: number): Payment {
		return this.paymentMethods.find(({ id }) => id == paymentId);
	}
}
