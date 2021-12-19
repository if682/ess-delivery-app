import { Promotion } from './../shared/interfaces/promotion.interface';
import { Payment } from './../shared/interfaces/payment.interface';
import { Product } from './../shared/interfaces/product.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private promotionSubject = new BehaviorSubject<any>([]);
  private paymentSubject = new BehaviorSubject<any>([]);

  private promotionLoadingSubject = new BehaviorSubject<boolean>(true);
  private paymentLoadingSubject = new BehaviorSubject<boolean>(true);

  BASE_URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  public getPromotions() {
    this.promotionLoadingSubject.next(true);

    this.http
      .get<Promotion[]>(this.BASE_URL + 'promotions')
      .subscribe((promotions) => {
        console.log(promotions);
        this.promotionSubject.next(promotions);
        this.promotionLoadingSubject.next(false);
      });
  }

  public getPayments() {
    this.paymentLoadingSubject.next(true);

    this.http
      .get<Payment[]>(this.BASE_URL + 'payments')
      .subscribe((payments) => {
        console.log(payments);
        this.paymentSubject.next(payments);
        this.paymentLoadingSubject.next(false);
      });
  }

  get promotions$() {
    return this.promotionSubject.asObservable();
  }

  get payments$() {
    return this.paymentSubject.asObservable();
  }

  get loadingPromotions$() {
    return this.promotionLoadingSubject.asObservable();
  }
  get loadingPayments$() {
    return this.paymentLoadingSubject.asObservable();
  }

  public updatePayments(data: Payment) {
    this.http.post(this.BASE_URL + 'payments', data).subscribe((res) => {
      console.log(res);
    });
    this.paymentSubject.value.push(data);
    this.paymentSubject.next(this.paymentSubject.value);
  }

  public updatePromotions(data: Promotion) {
    this.http.post(this.BASE_URL + 'promotions', data).subscribe((res) => {
      console.log(res);
    });

    this.promotionSubject.value.push(data);
    this.promotionSubject.next(this.promotionSubject.value);
  }
}
