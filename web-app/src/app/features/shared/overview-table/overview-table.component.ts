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
  data$: Observable<Product[]>;

  @ViewChild(MatTable) table: MatTable<Product> | undefined;

  ELEMENT_DATA: Product[] = [];

  displayedColumns: string[] = ['product', 'status', 'end_date'];

  dataSource: MatTableDataSource<any> = new MatTableDataSource(
    this.ELEMENT_DATA
  );

  loading: boolean = true;

  constructor(private dataService: DataService) {
    this.data$ = dataService.data$;
  }

  ngOnInit(): void {
    this.data$.subscribe((data) => {
      console.log(data);
      this.dataSource = new MatTableDataSource(data);
      this.loading = false;
      this.table?.renderRows();
      console.log('Data has changed');
    });
  }
}
