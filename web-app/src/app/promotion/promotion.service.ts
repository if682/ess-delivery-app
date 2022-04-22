import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Coupon } from '../admin/coupon';

const ADMIN = "/promotion/admin";
const RESTAURANT = "/promotion/restaurant";

@Injectable()
export class PromotionService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private taURL = 'http://localhost:3000';
  private _currentURL: string;
  
  public get currentURL(): string {
    return this._currentURL;
  }

  public set currentURL(value: string) {
    this._currentURL = value;
  }

  constructor(private http: Http) {
    this.currentURL = window.location.pathname.replace("/add-coupon", "");
  }

  setAttributes(coupon){
    if(this.currentURL == ADMIN){
      coupon.adm = true;
      coupon.product = "Nenhum";
    }else{
      if(this.currentURL == RESTAURANT){
        coupon.adm = false;
      }
    }
  }

  createCoupon(coupon: Coupon): Promise<Coupon> { 

    this.setAttributes(coupon);

    return this.http.post(this.taURL + this.currentURL, JSON.stringify(coupon), { headers: this.headers })
      .toPromise()
      .then(res => {
        if (res.status === 201) {
          return coupon;
        } else {
          return null;
        }
      })
      .catch(this.catch);
  }

  private catch(erro: any): Promise<any> {
    console.error('Oops, something went wrong', erro);
    return Promise.reject(erro.message || erro);
  }
}