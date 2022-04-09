import { Component } from "@angular/core";
import { ClientService } from "./client/client.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "web-app";
  mostrarMenu: boolean = false;

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.clientService.isLoggedIn$.subscribe((isLoggedIn: boolean) => {
      this.mostrarMenu = isLoggedIn;
    });
  }
}
