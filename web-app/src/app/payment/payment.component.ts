// import { Component, OnInit } from '@angular/core';
// import { NgModule } from '@angular/core';

// import { Payment } from './payment';
// import { PaymentService } from './payment.service';


// @Component({
//   selector: 'app-root',
//   templateUrl: './payment.component.html',
//   styleUrls: ['./payment.component.css']
// })
// export class PaymentComponent implements OnInit {
//    constructor(private paymentervice: PaymentService) {}

//    car: Payment = new Payment();
//    payment: Payment[] = [];

//    createPayment(c: Payment): void {
//       this.paymentService.create(c)
//       .then(result => {
//             if (result) {
//                this.payment.push(<Payment> result);
//                this.Payment = new Car();
//             }
//          })
//          .catch(erro => alert(erro));
//    }

//    ngOnInit(): void {
//       this.paymentService.getpayment()
//          .then(payment => this.payment = payment)
//          .catch(erro => alert(erro));
//    }

// }