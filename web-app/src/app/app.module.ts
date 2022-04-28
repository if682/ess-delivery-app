import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { NgxCurrencyModule } from "ngx-currency";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PromotionComponent } from './promotion/promotion.component';
import { PromotionService } from './promotion/promotion.service';
import { TableComponent } from './views/table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { AdminService } from './admin/admin.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PromotionComponent,
    TableComponent,
    AdminComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    MatTableModule,
    MatDialogModule,
    NgxCurrencyModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'promotion/restaurant',
        component: TableComponent
      },
      {
        path: 'promotion/admin',
        component: AdminComponent
      },
      {
        path: 'promotion/admin/add-coupon',
        component: PromotionComponent
      },
      {
        path: 'promotion/admin/edit-coupon',
        component: PromotionComponent
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]),
    BrowserAnimationsModule
  ],
  providers: [PromotionService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
