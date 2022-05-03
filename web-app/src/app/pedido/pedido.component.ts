import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { CadastroService } from '../cadastro/cadastro.service';
import { Restaurante } from '../cadastro/restaurante';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {
  serverUrl: string = "http://localhost:3000/pedido";
  form: FormGroup;
  restaurantes: Restaurante[];
  headers: any;
  response: string;

  constructor(private http: Http, private cadastroService: CadastroService) { 
    cadastroService.getRestaurantes().then(restaurante => this.restaurantes = restaurante);
    
    this.form = new FormGroup({
      restaurante: new FormControl('', Validators.required)
    });
  
    this.headers = new Headers({ 'Content-Type': 'application/json' });

    this.response = " ";
   }

  submit(htmlForm) {
    const pedido = {
      ...htmlForm.form.value,
      restaurante: this.form.value.restaurante.nome_restaurante,
      restEmail: this.form.value.restaurante.email,
      id: Math.floor(Math.random() * 1000) + 1
    };

    this.http.post(this.serverUrl, JSON.stringify(pedido), {headers: this.headers}).toPromise().then(data => {
      this.response = data.text()
    });
  }

}