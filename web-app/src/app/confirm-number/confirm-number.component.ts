import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Client } from "src/app/client/client";
import { ClientService } from "src/app/client/client.service";

@Component({
  selector: "confirm-number",
  templateUrl: "./confirm-number.component.html",
  styleUrls: ["./confirm-number.component.css"],
})
export class ConfirmNumberComponent implements OnInit {
  registrationForm:FormGroup;

  constructor(private clientService: ClientService) {
    this.registrationForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      cpf: new FormControl(),
      password: new FormControl(),
      phone: new FormControl(),
      confirm_password: new FormControl(),
    });
  }

  client: Client = new Client();
  clients: Client[] = [];

  ConfirmNumber(): void {
    

    var newClient = {
      name: this.registrationForm.value.name,
      cpf: this.registrationForm.value.cpf,
      email: this.registrationForm.value.email,
      phone: this.registrationForm.value.phone,
      password: this.registrationForm.value.password
    };
    
    this.clientService
      .create(newClient)
      .then((result) => {
        if (result) {
          console.log(result);
          this.clients.push(<Client>result);
          this.client = new Client();
        }
      })
      .catch((erro) => alert(erro));
  }

  ngOnInit(): void {}
}
