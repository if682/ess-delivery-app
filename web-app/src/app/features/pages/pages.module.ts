import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, PagesRoutingModule, SharedModule, MaterialModule],
})
export class PagesModule {}
