import { Component, OnInit } from "@angular/core";
import { ClientService } from "src/app/client/client.service";

@Component({
  selector: "nav-bar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  isMenuOpen: boolean = false;
  name: string;

  constructor(private clientService: ClientService) {}

  public clickMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  ngOnInit(): void {
    this.clientService.getClient().then((result) => {
      this.name = result.name;
    });
  }
}
