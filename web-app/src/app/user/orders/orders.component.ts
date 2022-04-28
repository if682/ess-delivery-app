import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http'; 
import { MatTable } from '@angular/material/table';               
import { Order } from './order';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  displayedColumns: string[] = ['ID', 'Restaurante', 'Valor', 'Cupom', 'Comprovante via E-mail' ,'Comprovante via Download'];
  orders: Promise<Order[]>;

  private taURL = 'http://localhost:3000';
  private currentURL: string;

  constructor(private http: Http) {
    this.currentURL = window.location.pathname;
  }

  ngOnInit(): void {
    this.orders = this.http.get(this.taURL + this.currentURL)
                    .toPromise()
                    .then(res => res.json() as Order[])
                    .catch(this.catch);
  }

  @ViewChild(MatTable) table: MatTable<Order>;

  private catch(erro: any): Promise<any>{
    console.error('Oops, something went wrong',erro);
    return Promise.reject(erro.message || erro);
  }

}
