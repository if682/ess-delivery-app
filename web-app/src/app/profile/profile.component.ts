import { Restaurante } from '../cadastro/restaurante';
import { CadastroService } from '../cadastro/cadastro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(private cadastroService: CadastroService) {}

  restaurante: Restaurante = new Restaurante();
  restaurantes: Restaurante[] = [];

  tab: number = 0;
  editMode: boolean = false;
  error = undefined;
  success = false;

  ngOnInit(): void {
    this.cadastroService.getRestaurantes()
         .then(restaurantes => this.restaurantes = restaurantes)
         .catch(erro => alert(erro));
  }

  switchTab(newTab): void {
    this.tab = newTab;
    this.restaurante = this.restaurantes[0];
  }

  setEditMode(newEditMode) {
    this.editMode = newEditMode;
  }

  update(r: Restaurante): void {
    this.cadastroService.updateRestaurant(r)
    .then(result => {
          if (result) {
             this.restaurantes.push(<Restaurante> result);
             this.restaurante = new Restaurante();

             this.success = true;
          }
       })
       .catch(erro => this.catch(erro));
       this.setEditMode(false);
 }

 onlyNumbersKeyPress(e:any): void {

    var c = e.key

    if(isNaN(c)){
       e.preventDefault();
       return
    }
 }

 limitedKeyPress(e:any, s:String, n:number): void{
    
    if(s && s.length >= n || n <= 0){
       e.preventDefault();
       return
    }
 }
 
 onlyNumbersLimitedKeyPress(e:any, s:String, n:number): void {
    
    this.limitedKeyPress(e,s,n);
    this.onlyNumbersKeyPress(e);
 }

 formatCNPJ(s:String): void {

    this.restaurante.cnpj = 
    s.replace(/\D+/g, '') // não deixa ser digitado nenhuma letra
    .replace(/(\d{2})(\d)/, '$1.$2') // captura 2 grupos de número o primeiro com 2 digitos e o segundo de com 3 digitos, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de número
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2') // captura 2 grupos de número o primeiro e o segundo com 3 digitos, separados por /
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1') // captura os dois últimos 2 números, com um - antes dos dois números
 }

 formatCEP(s:String): void {

    this.restaurante.cep = 
    s.replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1')
 }

 formatStartTime(s:String): void {

    this.restaurante.horario_inicio = 
    s.replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1:$2')
    .replace(/(:\d{2})\d+?$/, '$1')
 }
 formatEndTime(s:String): void {

    this.restaurante.horario_fim = 
    s.replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1:$2')
    .replace(/(:\d{2})\d+?$/, '$1')
 }

 formatTel(s:String): void {

    if(s.length == 15){
       this.restaurante.telefone_responsavel = 
       s.replace(/\D/g, '')
       .replace(/(\d{2})(\d)/, '($1) $2')
       .replace(/(\d{5})(\d)/, '$1-$2')
       .replace(/(:\d{4})\d+?$/, '$1')
    }
    else{
       this.restaurante.telefone_responsavel = 
       s.replace(/\D/g, '')
       .replace(/(\d{2})(\d)/, '($1) $2')
       .replace(/(\d{4})(\d)/, '$1-$2')
       .replace(/(:\d{4})\d+?$/, '$1')
    }
 }

 private catch(erro: any): void{
    var message = JSON.parse(erro._body).message;
    this.error = {status: erro.status, message: message};
 }

 resetError(): void{
    this.error = undefined;
 }





}




