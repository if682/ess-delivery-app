import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";
import { NegateAuthGuard } from "./guards/negate-auth.guard";
import { LoginComponent } from "./login/login.component";
import { MemberModule } from "./member/member.module";
import { RegisterComponent } from "./register/register.component";

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
