import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Admin } from 'src/app/admin/admin';
import { Coupon } from 'src/app/admin/coupon';
import { Restaurant } from 'src/app/admin/restaurant';
import { EditService } from './edit.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css', '../promotion.component.css']
})
export class EditComponent implements OnInit {

  couponName: string;
  coupon: Coupon = new Coupon();
  newCoupon: Coupon = new Coupon();
  restaurant: Restaurant; 
  status: string;
  admin: Admin;
  type: string;

  constructor(private service: EditService, private route: Router, private acRoute: ActivatedRoute) {
  }
  
  ngOnInit(){
    this.acRoute.params.subscribe((params: Params) => this.couponName = params['id']);
    this.coupon = window.history.state.coupon;
    this.status = this.coupon.status;
    this.type = window.history.state.type;
    if(this.type == "admin"){
      this.admin = window.history.state.data;
    } else {
      this.restaurant = window.history.state.data;
    }
  }

  activate(): void {
    if(this.status == "Inativo"){
      this.status = "Ativo";
    }else{
      this.status = "Inativo";
    }
  }

  editCoupon(){
    this.newCoupon.status = this.status;
    this.service.editCoupon(this.newCoupon)
      .then(result => {
        if (result) {
          this.coupon = new Coupon();
        }
      })
      .catch(erro => alert("Dados inválidos"));
  }

  // ele manda o id pra mim pq eh oq tem na url ok
  // eu preciso do cupom inteiro => como descubro? -> passando por state ok
  // tendo o cupom inteiro:
  // exibe o cupom na tela, permitindo alterações
  // depois de alterado o put (qnd clica no botão) => isso já ta chamando
  // 

  


}
