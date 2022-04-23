import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PromotionComponent } from './promotion/promotion.component';
import { PromotionService } from './promotion/promotion.service';
import { TableComponent } from './views/table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { AdminService } from './admin/admin.service';
import { FormsComponent, FormsComponentDialog } from './views/forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PromotionComponent,
    TableComponent,
    AdminComponent,
    FormsComponent,
    FormsComponentDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    MatTableModule,
    MatDialogModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: NavbarComponent
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
      }
    ]),
    BrowserAnimationsModule
  ],
  entryComponents: [FormsComponentDialog],
  providers: [PromotionService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
