import { Component, OnInit } from '@angular/core';
import { query } from '@angular/animations';
import { NgModule } from '@angular/core';
import { Params, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from './login.service';
import { LocalStorageService } from 'src/app/local-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private route: Router, private acRoute: ActivatedRoute, private service: LoginService) {}
  type: string;

  localStorage = new LocalStorageService();

  ngOnInit(): void {
    this.type = this.localStorage.get('type');
    // this.acRoute.params.subscribe((params: Params) => this.type = params['type']);
  }
  
  checkType(id: string): void {
    if(this.type=="admin"){
      this.service.getAdmin("admin/" + id)
      .then(admin => {
        this.localStorage.set('admin', admin);
        this.localStorage.set('coupons', this.service.getAdminCoupons('promotion/admin'));
        this.route.navigate(["promotion/" + this.type]);        
      })
    }
    else if(this.type=="user"){
      this.service.getUser("users/" + id)
        .then(user => {
          this.localStorage.set('user', user);
          this.route.navigate(["user/" + id + "/profile"]);
        })
    }
    else{
      this.service.getRestaurant("restaurant/" + id)
        .then(rest => {
          this.localStorage.set('rest', rest);
          this.localStorage.set('coupons', rest.coupons);
          this.route.navigate(["promotion/", this.type, id ]);
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


