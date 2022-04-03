import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { ClientService } from './client/client.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    UpdatePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'register',
        component: RegisterComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path: 'update-password',
        component: UpdatePasswordComponent
      }
    ])
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
