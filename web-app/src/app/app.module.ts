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
import { ProfileComponent } from './user/profile/profile.component';
import { BarComponent } from './views/bar/bar.component';
import { OrdersComponent } from './user/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PromotionComponent,
    TableComponent,
    AdminComponent,
    HomeComponent,
    ProfileComponent,
    BarComponent,
    OrdersComponent
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
        path: 'user/profile',
        component: ProfileComponent
      },
      {
        path: 'user/current-order',
        component: ProfileComponent
      },
      {
        path: 'user/orders',
        component: OrdersComponent
      },
      {
        path: 'user/payment',
        component: ProfileComponent
      }
    ]),
    BrowserAnimationsModule
  ],
  providers: [PromotionService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
