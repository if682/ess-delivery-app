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
export class NegateAuthGuard implements CanActivate {
  constructor(private clientService: ClientService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if (this.clientService.getIsLoggedIn()) {
      this.router.navigate(['']);
      return false;
    } else {
      return true;
    }
  }
}
