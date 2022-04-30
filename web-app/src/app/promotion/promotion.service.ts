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
  public type: string;
  public id: string;
  
  public coupon: Coupon;
  
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
    if(this.type != "restaurants"){
      this.id = "";
    }
    var act = path.replace("/promotion/" + this.type + "/" + this.id , "");
    
    if(act == "/add-coupon"){
      this.currentURL = path.replace("/add-coupon", "");
    }else{
      this.currentURL = path.replace("/edit-coupon", "");
    }
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