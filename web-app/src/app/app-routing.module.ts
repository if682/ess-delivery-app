import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";
import { NegateAuthGuard } from "./guards/negate-auth.guard";
import { LoginComponent } from "./login/login.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { UpdatePasswordComponent } from "./update-password/update-password.component";
import { MemberModule } from "./member/member.module";
import { RegisterComponent } from "./register/register.component";
import { ConfirmNumberComponent } from "./confirm-number/confirm-number.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    canActivate: [NegateAuthGuard],
  },
  {
    path: "register",
    component: RegisterComponent,
    canActivate: [NegateAuthGuard],
  },
  {
    path: "forgot-password",
    component: ForgotPasswordComponent,
    canActivate: [NegateAuthGuard],
  },
  {
    path: "update-password",
    component: UpdatePasswordComponent,
    canActivate: [NegateAuthGuard],
  },
  {
    path: "confirm-number",
    component: ConfirmNumberComponent,
    canActivate: [NegateAuthGuard],
  },
  {
    path: "",
    loadChildren: () => MemberModule,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
