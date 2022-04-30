import { Component, OnInit } from '@angular/core';
import { query } from '@angular/animations';
import { NgModule } from '@angular/core';
import { Params, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private route: Router, private acRoute: ActivatedRoute, private service: LoginService) {}
  type: string;

  ngOnInit(): void {
    this.acRoute.params.subscribe((params: Params) => this.type = params['type']);
  }
  
  checkType(id:string): void {
    if(this.type=="admin"){
      this.service.getAdmin("admin/" + id)
      .then(data => {
        window.history.replaceState({}, '', "promotion/" + this.type)
        this.route.navigate(["promotion/" + this.type], { state: { data: data } })        
      })
    }
    else if(this.type=="user"){
      this.service.getUser("users/" + id)
        .then(user => {
          window.history.replaceState({}, '', "user/" + id + "/profile")
          this.route.navigate(["user/" + id + "/profile"], { state: { data: user } })
        })
    }
    else{
      this.service.getRestaurant("restaurant/" + id)
        .then(rest => {
          window.history.replaceState({}, '', "promotion/" + this.type + id)
          this.route.navigate(["promotion/", this.type, id ], { state: { data: rest } })
        })
    }
  }
}

  // temos que fazer um if para cada tipo admin(id)
  // restaurante é o nome 
  // usuario é id



// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { promise } from 'protractor';
// import { EmailService } from './email.service';
// import { Car } from '../cars/car';

// @Component({
//   selector: 'app-email',
//   templateUrl: './email.component.html',
//   styleUrls: ['./email.component.css']
// })

// export class EmailComponent implements OnInit {

//   constructor(private emailService: EmailService, private route: ActivatedRoute) { }
  
//   userid: string;
//   car: Car;

//   async sendEmail() {
//     const info = await this.emailService.sendEmail(this.userid, this.car);
//     console.log(info);
//   }

//   ngOnInit(): void { 
//     this.route.queryParams.subscribe((params: any) => {
//       console.log(params);
//       this.userid = params.data;
//       this.car = JSON.parse(params.car);
//       this.sendEmail();
//     })
//   }

// }


