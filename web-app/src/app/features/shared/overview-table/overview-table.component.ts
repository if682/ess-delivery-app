import { Promotion } from './../interfaces/promotion.interface';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from './../../services/data.service';
import { Product } from '../interfaces/product.interface';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-overview-table',
  templateUrl: './overview-table.component.html',
  styleUrls: ['./overview-table.component.scss'],
})
export class OverviewTableComponent implements OnInit {
  data$: Observable<Promotion[]> | undefined;

  @ViewChild(MatTable) table: MatTable<Product> | undefined;

  ELEMENT_DATA: Product[] = [];

  displayedColumns: string[] = ['Nome', 'Início', 'Fim'];

  dataSource: MatTableDataSource<any> = new MatTableDataSource(
    this.ELEMENT_DATA
  );

  loading: boolean = true;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.data$ = this.dataService.promotions$;

    this.data$.subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.loading = false;
      this.table?.renderRows();
    });
  }
}
