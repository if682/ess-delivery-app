import { Payment } from './../../shared/interfaces/payment.interface';
import { Observable } from 'rxjs';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
})
export class PaymentsComponent implements OnInit {
  loading$?: Observable<boolean>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loading$ = this.dataService.loadingPayments$;
  }

  getPayments(): void {}
}
