import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ClientService } from "./client/client.service";
import { NegateAuthGuard } from "./guards/negate-auth.guard";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { NavbarComponent } from "./member/navbar/navbar.component";
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MemberModule } from "./member/member.module";
import { AuthGuard } from "./guards/auth.guard";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    UpdatePasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule,
    MemberModule,
    BrowserAnimationsModule
  ],
  providers: [ClientService, NegateAuthGuard, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
