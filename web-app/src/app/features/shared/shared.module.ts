import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from 'src/app/material.module';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { OverviewTableComponent } from './overview-table/overview-table.component';
import { addButtonComponent } from './addButton/addButton.component';
import { FormtableComponent } from './formtable/formtable.component';

@NgModule({
  declarations: [NavbarComponent, SideMenuComponent, OverviewTableComponent, addButtonComponent, FormtableComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [NavbarComponent, SideMenuComponent, OverviewTableComponent, addButtonComponent, FormtableComponent],
})
export class SharedModule {}
