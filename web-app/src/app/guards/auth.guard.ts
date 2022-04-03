import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { ClientService } from "../client/client.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private clientService: ClientService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    console.log(this.clientService.loggedIn());
    if (this.clientService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
