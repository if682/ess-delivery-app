import { Payment } from "./payment";

export class PaymentService {

  paymentMethods: Payment[] = [];
  
  add(payment: Payment): void {
    this.paymentMethods.push(new Payment(payment));
  }

  update(payment: Payment): void {
    const toBeUpdated = this.getById(payment.id)
    toBeUpdated.update(payment);
  }

  deleteById(paymentId: number): void {
    this.paymentMethods.filter(payment => payment.id != paymentId);
  }

  deleteByName(paymentName: string): void {
    this.paymentMethods.filter(payment => payment.name != paymentName);
  }

  get() : Payment[] {
    return this.paymentMethods;
  }

  getById(paymentId: number) : Payment {
    return this.paymentMethods.find(({id}) => id == paymentId)
  }

}
