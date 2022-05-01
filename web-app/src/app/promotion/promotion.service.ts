import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Coupon } from '../admin/coupon';
import { LocalStorageService } from '../local-storage.service';

const ADMIN = "/promotion/admin";
const RESTAURANT = "/promotion/restaurant";

@Injectable()
export class PromotionService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private taURL = 'http://localhost:3000';
  private _currentURL: string;
  
  public type: string;
  public coupon: Coupon;
  
  localStorage = new LocalStorageService();
  
  public get currentURL(): string {
    return this._currentURL;
  }

  public set currentURL(value: string) {
    this._currentURL = value;
  }

  constructor(private http: Http) {
    this.init();
  }

  init(){
    var path = window.location.pathname;
    this.type = this.localStorage.get('type');
    this.currentURL = path.replace("add-coupon", "");
    this.currentURL = this.currentURL.replace("rest", "restaurants");
    alert(this.currentURL);
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
    this.init();
    this.setAttributes(coupon);
    alert(this.currentURL);
    return this.http.post(this.taURL + this.currentURL, JSON.stringify(coupon), { headers: this.headers })
      .toPromise()
      .then(res => {
        if (res.status === 201) {
          alert("Cupom cadastrado com sucesso");
          return coupon;
        } else {
          // alert("Cupom não pode ser adicionado");
          return null;
        }
      })
      .catch(this.catch);
  }

  editCoupon(couponName: string, coupon: Coupon): Promise<Coupon[]> {
  
    return this.http.put(this.taURL + this.currentURL + "/" + couponName, JSON.stringify(coupon))
             .toPromise()
             .then(res => res.json() as Coupon[])
             .catch(this.catch);
  }

  private catch(erro: any): Promise<any> {
    // alert("Cupom não pode ser adicionado");
    // console.error('Oops, something went wrong', erro);
    return Promise.reject(erro.message || erro);
  }
}