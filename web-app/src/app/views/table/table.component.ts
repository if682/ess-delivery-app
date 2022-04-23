import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTable} from '@angular/material/table';

import { Coupon } from 'src/app/admin/coupon';
import { AdminService } from 'src/app/admin/admin.service';
// import { RestaurantService } from 'src/app/restaurant/restaurant.service';
import * as $ from 'jquery';

var couponName: string;

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

  removeData() {
    couponName.replace("delete-", "");

    alert(couponName);

    var index = this.coupons.findIndex(c => c.name == couponName);

    this.service.removeCoupon(couponName)
        .then(coupon => this.coupons.splice(index, 1))
        .catch(erro => alert(erro));
    this.table.renderRows();
  }

  // removeData(couponName: string) {
  //   var index = this.coupons.findIndex(c => c.name == couponName);

  //   this.service.removeCoupon(couponName)
  //       .then(coupon => this.coupons.splice(index, 1))
  //       .catch(erro => alert(erro));
  //   this.table.renderRows();
  // }

  // editData() {
  //   var name: string;
  //   this.service.removeCoupon(name)
  //       .then(coupon => this.coupons.splice(index, 1))
  //       .catch(erro => alert(erro));
  //   this.table.renderRows();
  // }
}
$(function() {
  $(document).on('click', '.trash', function(e) {
      e.preventDefault;
      couponName = $(this).closest('tr').find('td[data-name]').data('name');
      alert(couponName);
  });
});
