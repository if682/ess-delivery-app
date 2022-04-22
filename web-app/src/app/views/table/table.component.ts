import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTable} from '@angular/material/table';

import { Coupon } from 'src/app/admin/coupon';
import { AdminService } from 'src/app/admin/admin.service';
// import { RestaurantService } from 'src/app/restaurant/restaurant.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  displayedColumns: string[] = ['ID', 'Nome', 'Produto', 'Desconto', 'Valor Mínimo', 'Status', 'Editar' ,'Deletar'];
  coupons: Coupon[] = [];

  constructor(private service: AdminService) {}

  ngOnInit(): void {
    this.service.getCoupons()
        .then(coupons => this.coupons = coupons)
        .catch(erro => alert(erro));
  }

  @ViewChild(MatTable) table: MatTable<Coupon>;

  // imgClick() {
  //   document.querySelectorAll("img").forEach( function(img) {
    
  //     img.addEventListener("click", function(event) {
  //       const el = event.target;
  //       const id = el.id;
  //       console.log(id);
  //     });
      
  //   });
  // }

  // removeData() {
  //   var couponName = document.getElementById()
  //   var index = this.coupons.findIndex(c => c.name == couponName);

  //   this.service.removeCoupon(couponName)
  //       .then(coupon => this.coupons.splice(index, 1))
  //       .catch(erro => alert(erro));
  //   this.table.renderRows();
  // }
}
