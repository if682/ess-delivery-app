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
  selector: "register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
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

  createClient(): void {
    

    var newClient = new Client(
      this.registrationForm.value.name,
      this.registrationForm.value.cpf,
      this.registrationForm.value.email,
      this.registrationForm.value.phone,
      this.registrationForm.value.password
  );
    console.log(newClient);
    this.clientService
      .create(newClient)
      .then((result) => {
        if (result) {
          this.clients.push(<Client>result);
          this.client = new Client();
        }
      })
      .catch((erro) => alert(erro));
  }

  ngOnInit(): void {}
}
