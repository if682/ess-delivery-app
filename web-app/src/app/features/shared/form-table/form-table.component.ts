import { Promotion } from './../interfaces/promotion.interface';
import { Product } from './../interfaces/product.interface';
import { DataService } from './../../services/data.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

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
    let data: Promotion = {
      name: String(this.productName),
      end: this.to_date ? new Date(this.to_date).toISOString() : '',
      start: this.from_date ? new Date(this.from_date).toISOString() : '',
    };

    this.dataService.updatePromotions(data);

    this.dataService.payments$.subscribe((d) => {
      console.log(d);
    });

    this.dialogRef.close();
  }
}
