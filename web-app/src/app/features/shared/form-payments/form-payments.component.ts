import { Product } from './../interfaces/product.interface';
import { DataService } from './../../services/data.service';
import { Payment, types } from '../interfaces/payment.interface';
import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-payments',
  templateUrl: './form-payments.component.html',
  styleUrls: ['./form-payments.component.scss'],
})
export class FormPaymentsComponent implements OnInit {
  value?: string;

  types = ['Dinheiro', 'Cartão de Crédito', 'Cartão de Débito', 'Pix'];

  type: string = 'CASH';

  constructor(
    private dataService: DataService,
    public dialogRef: MatDialogRef<FormPaymentsComponent>
  ) {}

  ngOnInit(): void {}

  public onClick(): void {
    let data: Payment;

    if ((this.type !== undefined, this.value !== '')) {
      data = {
        value: String(this.value),
        type: this.type,
        status: 'Active',
      };

      this.dataService.updatePayments(data);
    }
  }
}
