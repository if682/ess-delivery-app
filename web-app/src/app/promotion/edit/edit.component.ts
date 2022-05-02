import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Admin } from 'src/app/admin/admin';
import { Coupon } from 'src/app/admin/coupon';
import { Restaurant } from 'src/app/admin/restaurant';
import { LocalStorageService } from 'src/app/local-storage.service';
import { EditService } from './edit.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css', '../promotion.component.css']
})
export class EditComponent implements OnInit {

  couponName: string;
  coupon: Coupon = new Coupon();
  newCoupon: Coupon = new Coupon();
  data: any;
  status: string;
  type: string;
  localStorage = new LocalStorageService();

  constructor(private service: EditService, private route: Router, private acRoute: ActivatedRoute) {
  }
  
  ngOnInit(){
    this.coupon = this.localStorage.get('coupon');
    this.status = this.coupon.status;
    this.type = this.localStorage.get('type');
    this.data = this.localStorage.get(this.type);
    this.newCoupon.product=this.coupon.product;
  }

  activate(): void {
    if(this.status == "Inativo"){
      this.status = "Ativo";
    }else{
      this.status = "Inativo";
    }
  }

  editCoupon(){
    this.newCoupon.status = this.status;
    this.service.editCoupon(this.newCoupon)
      .then(result => {
        if (result) {
          this.localStorage.set('coupons', result);
          this.newCoupon = new Coupon();
        }
      })
      .catch(erro => alert("Dados inválidos"));
  }
/*
  updateLocalStorage(newCoupon: Coupon) {
    var coupons: Coupon[] = this.localStorage.get('coupons');
    this.localStorage.remove('coupons');
    coupons.forEach(e => console.log("fe", e.id, this.coupon.id));
    var index = coupons.findIndex(e => e.id == this.coupon.id);
    //console.log(index);
    coupons[index] = newCoupon;

    this.localStorage.set('coupons', coupons);
    //console.log(this.localStorage.get('coupons'));
  }
*/
  back(){
    if(this.type == 'rest'){
      this.route.navigate(["promotion", this.type, this.data.name]);
    }else{
      this.route.navigate(["promotion", this.type]);
    }
  }

}