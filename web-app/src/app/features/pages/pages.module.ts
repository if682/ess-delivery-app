import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from 'src/app/material.module';
import { StartComponent } from './start/start.component';
import { PaymentsComponent } from './payments/payments.component';

@NgModule({
  declarations: [HomeComponent, StartComponent, PaymentsComponent],
  imports: [CommonModule, PagesRoutingModule, SharedModule, MaterialModule],
})
export class PagesModule {}
