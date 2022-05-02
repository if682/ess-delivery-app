import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTable} from '@angular/material/table';

import { Coupon } from 'src/app/admin/coupon';
import { AdminService } from 'src/app/admin/admin.service';
// import { RestaurantService } from 'src/app/restaurant/restaurant.service';
import { PromotionService } from 'src/app/promotion/promotion.service';
import { Restaurant } from 'src/app/admin/restaurant';
import { Admin } from 'src/app/admin/admin';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'src/app/local-storage.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['ID', 'Nome', 'Produto', 'Desconto', 'Valor Mínimo', 'Status', 'Editar' ,'Deletar'];
  // restaurant: Restaurant;
  // admin: Admin;
  data: any;
  public coupons: Coupon[] = [];
  type: string;
  localStorage = new LocalStorageService();

  @ViewChild(MatTable) table: MatTable<Coupon>;

  constructor(private service: AdminService, private editService: PromotionService, private acRoute: ActivatedRoute, private route: Router) {
  }
  
  ngOnInit(): void {
    this.type = this.localStorage.get('type');
    this.data = this.localStorage.get(this.type);
    this.coupons = this.localStorage.get('coupons');
    console.log(this.coupons.length);
    // this.table.renderRows();
  }
  
  // setCoupons(){
  //   //this.restaurant = window.history.state.data;
  //   //this.admin = window.history.state.data;
  //   if(this.type == "rest"){
  //   }else{
  //     // this.admin = this.localStorage.get('admin');
  //     this.getAdminCoupons();
  //     this.localStorage.set('coupons', this.coupons);
  //   }
  // }

  // getAdminCoupons() {
  //   this.service.getCoupons()
  //     .then(coupons => this.coupons = coupons)
  //     .catch(erro => alert(erro));
  // }


  removeData(couponName: string) {

    var index = this.coupons.findIndex(c => c.name == couponName);
    var couponCopy = this.coupons[index];

    this.coupons.splice(index, 1)
    this.table.renderRows();

    this.service.removeCoupon(couponName)
    .then(updatedCoupons => {
      this.localStorage.set('coupons', updatedCoupons);
    })
    .catch(erro => {
      alert(erro);
      this.coupons.push(couponCopy);
      this.table.renderRows();
    });
    
   
  }

  updateLocalStorage() {
    this.localStorage.remove('coupons');
    this.localStorage.set('coupons', this.coupons);
  }

  editData(coupon: Coupon){
    this.localStorage.set('coupon', coupon);
    if(this.type == 'rest'){ 
      this.route.navigate(["promotion/rest/edit", this.data.name, coupon.name]);
    }else{
      this.route.navigate(["promotion/admin/edit", coupon.name]);
    }
  }
  
}