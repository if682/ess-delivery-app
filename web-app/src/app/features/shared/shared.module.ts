import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from 'src/app/material.module';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { OverviewTableComponent } from './overview-table/overview-table.component';

@NgModule({
  declarations: [NavbarComponent, SideMenuComponent, OverviewTableComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [NavbarComponent, SideMenuComponent, OverviewTableComponent],
})
export class SharedModule {}
