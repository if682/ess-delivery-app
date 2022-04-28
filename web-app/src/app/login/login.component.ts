import { Component, OnInit } from '@angular/core';
import { query } from '@angular/animations';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

//-> pegar o tipo e mandar as informações do objeto desse tipo


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private route: Router, private acRoute: ActivatedRoute) {}

  // temos que fazer um if para cada tipo admin(id)
  // restaurante é o nome 
  // usuario é id
  id: string;
  type: string;
  
  if(this.type == "admin"){
    navToadmin():void 

  }
  navToEmail(): void {
    console.log(this.name);
    let ret = this.route.navigate([l'/emai'], {queryParams:{data:this.name, car: JSON.stringify(this.car)}})
  }

  ngOnInit(): void {
     
  }

}



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


