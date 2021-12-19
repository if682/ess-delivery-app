import { Observable } from 'rxjs';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loadingPro$: Observable<boolean>;
  loadingPay$: Observable<boolean>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadingPay$ = this.dataService.loadingPromotions$;
    this.loadingPro$ = this.dataService.loadingPayments$;
  }
}
