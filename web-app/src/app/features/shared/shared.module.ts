import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from 'src/app/material.module';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { OverviewTableComponent } from './overview-table/overview-table.component';
import { addButtonComponent } from './addButton/addButton.component';
import { FormTableComponent } from './form-table/form-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormPaymentsComponent } from './form-payments/form-payments.component';
import { PaymentTableComponent } from './payment-table/payment-table.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SideMenuComponent,
    OverviewTableComponent,
    addButtonComponent,
    FormTableComponent,
    FormPaymentsComponent,
    PaymentTableComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NavbarComponent,
    SideMenuComponent,
    OverviewTableComponent,
    addButtonComponent,
    FormTableComponent,
    PaymentTableComponent,
  ],
})
export class SharedModule {}
