export class Payment {
  id: number;
  name: string;
  flag: string;

  constructor(payment: Payment) {
    this.id = payment.id;
    this.name = payment.name;
    this.flag = payment.flag;
  }

  update(payment: Payment): void {
    this.name = payment.name;
    this.flag = payment.flag;
  }        
}