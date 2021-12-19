import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss'],
})
export class PromotionsComponent implements OnInit {
  loading$?: Observable<boolean>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loading$ = this.dataService.loadingPromotions$;
  }
}
