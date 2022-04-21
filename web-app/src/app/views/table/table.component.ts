import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTable} from '@angular/material/table';

import { coupons, COUPONS, RESTAURANTS } from '../../bd';

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

  @ViewChild(MatTable) table: MatTable<coupons>;

  addData(coupon: Coupon) {
    this.service.create(coupon)
        .then(coupon => this.coupons.push(coupon))
        .catch(erro => alert(erro));
    this.table.renderRows();
  }

  removeData(coupon: Coupon) {
    var index = this.coupons.indexOf(coupon);

    this.service.remove(coupon)
        .then(coupon => this.coupons.splice(index, 1))
        .catch(erro => alert(erro));
    this.table.renderRows();
  }
}
