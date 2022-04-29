import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTable} from '@angular/material/table';

import { Coupon } from 'src/app/admin/coupon';
import { AdminService } from 'src/app/admin/admin.service';
// import { RestaurantService } from 'src/app/restaurant/restaurant.service';
import { PromotionService } from 'src/app/promotion/promotion.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['ID', 'Nome', 'Produto', 'Desconto', 'Valor Mínimo', 'Status', 'Editar' ,'Deletar'];
  public coupons: Coupon[] = [];
  @ViewChild(MatTable) table: MatTable<Coupon>;

  constructor(private service: AdminService, private editService: PromotionService) {}

  ngOnInit() {
    // this.service.getCoupons()
    //     .then(coupons => this.coupons = coupons)
    //     .catch(erro => alert(erro));
    this.coupons = window.history.state.coupons;
  }


  removeData(couponName: string) {

    var index = this.coupons.findIndex(c => c.name == couponName);
    var couponCopy = this.coupons[index];

    this.coupons.splice(index, 1)
    this.table.renderRows();

    this.service.removeCoupon(couponName)
          .catch(erro => {
            alert(erro);
            this.coupons.push(couponCopy);
            this.table.renderRows();
          });
  }

  sendData(coupon: Coupon){
    this.editService.coupon = coupon;
  }
  
}