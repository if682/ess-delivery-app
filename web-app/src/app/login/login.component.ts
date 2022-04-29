import { Component, OnInit } from '@angular/core';
import { query } from '@angular/animations';
import { NgModule } from '@angular/core';
import { Params, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from './login.service';
//-> pegar o tipo e mandar as informações do objeto desse tipo


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private route: Router, private acRoute: ActivatedRoute, private service: LoginService) {}
  type:string;
  url:string;
  ngOnInit(): void {
    this.acRoute.params.subscribe((params: Params) => this.type = params['type']);
  }
  
  checkType(id:string): void {
    if(this.type=="admin"){
      var admin = this.service.getAdmin("admin/"+id);
      this.route.navigate(["promotion/admin/"+id, admin]);
    }
    else if(this.type=="user"){
      var user = this.service.getUser("user/"+id);
      this.route.navigate(["user/"+id+"/profile", user]);
    }
    else{
      var rest = this.service.getRestaurant("restaurant/"+id);
      this.route.navigate(["promotion/restaurant/"+id, rest]);
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


