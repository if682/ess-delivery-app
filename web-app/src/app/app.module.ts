import { BrowserModule } from '@angular/platform-browser';
import { NgModule, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { NgxCurrencyModule } from "ngx-currency";
import { MatSelectModule } from '@angular/material/select';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PromotionComponent } from './promotion/promotion.component';
import { PromotionService } from './promotion/promotion.service';
import { TableComponent } from './views/table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { AdminService } from './admin/admin.service';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { BarComponent } from './views/bar/bar.component';
import { OrdersComponent } from './user/orders/orders.component';
import { LoginService } from './login/login.service';
import { LogoComponent } from './views/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PromotionComponent,
    TableComponent,
    AdminComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    BarComponent,
    OrdersComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    MatTableModule,
    MatDialogModule,
    NgxCurrencyModule,
    MatSelectModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'promotion/:type/:id',
        component: AdminComponent
      },
      {
        path: 'promotion/admin',
        component: AdminComponent
      },
      {
        path: 'promotion/:type/:action',
        component: PromotionComponent
      },
      {
        path: 'promotion/:type/:id/:action',
        component: PromotionComponent
      },
      {
        path: 'login/:type',
        component: LoginComponent
      },
      {
        path: 'user/:id/profile',
        component: ProfileComponent
      },
      {
        path: 'user/:id/current-order',
        component: ProfileComponent
      },
      {
        path: 'user/:id/orders',
        component: OrdersComponent
      },
      {
        path: 'user/:id/payment',
        component: ProfileComponent
      }
    ]),
    BrowserAnimationsModule
  ],
  providers: [PromotionService, AdminService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
