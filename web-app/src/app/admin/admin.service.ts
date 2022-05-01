import { Component, Injectable, Inject }    from '@angular/core';
import { Http, Headers } from '@angular/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Coupon } from './coupon';

@Injectable()
export class AdminService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private taURL = 'http://localhost:3000';
  private currentURL: string;

  public dialog: MatDialog;

  private _coupon: Coupon = new Coupon();

  public get coupon(): Coupon {
    return this._coupon;
  }
  public set coupon(value: Coupon) {
    this._coupon = value;
  }

  constructor(private http: Http) {
    this.currentURL = window.location.pathname;
  }

  init(){
    var path = window.location.pathname;
    var act = path.includes("add");

    if(act){
      this.currentURL = path.replace("/add-coupon", "");
    }else{
      this.currentURL = path.replace("/edit-coupon", "");
    }
  }
  
  removeCoupon(couponName: string): Promise<Coupon[]> {
    this.init();
    return this.http.delete(this.taURL + this.currentURL + "/" + couponName)
             .toPromise()
             .then(res => res.json() as Coupon[])
             .catch(this.catch);
  }
  
  getCoupons(): Promise<Coupon[]> {
    this.init();
    alert("entrou no get");
    return this.http.get(this.taURL + this.currentURL)
             .toPromise()
             .then(res => res.json() as Coupon[])
             .catch(this.catch);
  }

  private catch(erro: any): Promise<any>{
    console.error('Oops, something went wrong',erro);
    return Promise.reject(erro.message || erro);
  }
}