import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {
  serverUrl: string = "http://localhost:3000/pedido";
  form: FormGroup;
  restaurantes: any;
  headers: any;

  constructor(private http:Http) { 
    this.form = new FormGroup({
      restaurante: new FormControl('', Validators.required)
    });

    this.restaurantes = [
      "a", "b", "c", "d", "e"
    ];

    this.headers = new Headers({'Content-Type': 'application/json'});
   }

  submit(htmlForm) {
    const pedido = { ...htmlForm.form.value, restaurante: this.form.value.restaurante[0] }
    console.log(pedido)
    this.http.post(this.serverUrl, JSON.stringify(pedido), {headers: this.headers}).toPromise().then(data => {
      console.log(data)
    });
  }

}