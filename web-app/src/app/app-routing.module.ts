import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { StartComponent } from './features/pages/start/start.component';
import { SideMenuComponent } from './features/shared/side-menu/side-menu.component';

const routes: Routes = [
  {
    path: '',
    component: StartComponent,
  },
  {
    path: "home",
    component: SideMenuComponent,
    loadChildren: () =>
    import('../app/features/pages/pages.module').then((m) => m.PagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
