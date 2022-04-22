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

  coupon: Coupon = new Coupon();

  constructor(private http: Http) {
    this.currentURL = window.location.pathname;
  }
  
  removeCoupon(couponName: string): Promise<Coupon[]> {
    return this.http.delete(this.taURL + this.currentURL + "/" + couponName)
             .toPromise()
             .then(res => res.json() as Coupon[])
             .catch(this.catch);
  }
  
  getCoupons(): Promise<Coupon[]> {
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