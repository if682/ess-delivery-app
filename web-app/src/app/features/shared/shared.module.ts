import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from 'src/app/material.module';
import { SideMenuComponent } from './side-menu/side-menu.component';

@NgModule({
  declarations: [NavbarComponent, SideMenuComponent],
  imports: [CommonModule, MaterialModule],
  exports: [NavbarComponent, SideMenuComponent]
})
export class SharedModule {}
