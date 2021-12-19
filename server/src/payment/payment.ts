export class Payment {
	id: number;
	type: string;
	status: string;
	value: string;

	constructor(payment: Payment) {
		this.id = payment.id;
		this.type = payment.type;
		this.value = payment.value;
		this.status = payment.status;
	}

	update(payment: Payment): void {
		this.type = payment.type;
		this.value = payment.value;
		this.status = payment.status;
	}
}
