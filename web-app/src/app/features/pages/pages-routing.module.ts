import { PaymentsComponent } from './payments/payments.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { StartComponent } from './start/start.component';
import { SideMenuComponent } from '../shared/side-menu/side-menu.component';
import { PromotionsComponent } from './promotions/promotions.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'payments',
    component: PaymentsComponent,
  },
  {
    path: 'promotions',
    component: PromotionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
