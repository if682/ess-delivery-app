import { AuthenticationService } from '../service/authentication/authentication.service';
import { Restaurante } from '../cadastro/restaurante';
import { CadastroService } from '../cadastro/cadastro.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService, private cadastroService: CadastroService, private router: Router) {}
  
  selectedCnpj = '';
  restaurante: Restaurante = new Restaurante();

  tab: number = 0;
  editMode: boolean = false;
  metodos_pagamento= ['Pix', 'Credito', 'Debito', 'Dinheiro','Ticket'
  ];
  error = undefined;
  success = false;



  ngOnInit(): void {
    this.restaurante = this.authenticationService.restaurante;
    this.restaurante.metodo_pagamento = this.metodos_pagamento;
  }


  updateRestaurante(r: Restaurante): void {
     this.modal = false;
      this.cadastroService.update(r)
     .then(result => {
           if (result) {
              this.success = true;
           }
        })
        .catch(erro => this.catch(erro));
        this.success = true;
  }

  onCheckBoxChange(e:any, s:String, n:number): void {
     
   this.limitedKeyPress(e,s,n);
   this.onlyNumbersKeyPress(e);
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
  

  switchTab(newTab): void {
    this.tab = newTab;
  }

  setEditMode(newEditMode) {
    this.editMode = newEditMode;
  }

  deleteRestaurant() {
    if (confirm("Tem certeza que deseja apagar a conta?")) {
      this.cadastroService.delete(this.restaurante.email)
         .then(() => {
           this.router.navigateByUrl('/login');
           alert("Restaurante apagado com sucesso");
         })
         .catch(erro => alert(erro));
    }    
  }

  backToLogin() {
    this.router.navigateByUrl('/login')
  }

  goToStatusChange() {
    this.router.navigateByUrl('/status')
  }
}

