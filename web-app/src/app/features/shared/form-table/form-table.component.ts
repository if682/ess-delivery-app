import { Product } from './../interfaces/product.interface';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.scss'],
})
export class FormTableComponent implements OnInit {
  from_date?: string;
  to_date?: string;
  productName?: string;

  constructor(
    private dataService: DataService,
    public dialogRef: MatDialogRef<FormTableComponent>
  ) {}

  ngOnInit(): void {}

  public onClick(): void {
    let data: Product = {
      end_date: this.to_date ? new Date(this.to_date).toISOString() : '',
      product: this.productName ? this.productName : '',
      start_date: this.from_date ? new Date(this.from_date).toISOString() : '',
      status: 'Active',
      id: 33,
    };

    this.dataService.updateList(data);

    this.dataService.data$.subscribe((d) => {
      console.log(d);
    });

    this.dialogRef.close();
  }
}
