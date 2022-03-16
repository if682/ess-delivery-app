import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarsComponent } from './cars/cars.component';
import { CarService } from './cars/cars.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: NavbarComponent
      },
      {
        path: 'cliente',
        component: CarsComponent
      },
      {
        path: 'restaurante',
        component: CarsComponent
      },
      {
        path: 'adm',
        component: CarsComponent
      }
    ])
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
