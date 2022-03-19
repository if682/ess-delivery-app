import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTable} from '@angular/material/table';

import { coupons, COUPONS, RESTAURANTS } from '../../bd';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css', '../../../public/forms.css']
})

export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['Código', 'Produto', 'Desconto', 'Início', 'Fim', 'Status'];
  dataCoupons = COUPONS;

  @ViewChild(MatTable) table: MatTable<coupons>;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * COUPONS.length);
    this.dataCoupons.push(COUPONS[randomElementIndex]);
    this.table.renderRows();
  }

  removeData(cod) {
    // let index = this.dataCoupons.indexOf(cod);
    // this.dataCoupons.splice(index, 1);
    this.dataCoupons.pop();
    this.table.renderRows();
  }

}
