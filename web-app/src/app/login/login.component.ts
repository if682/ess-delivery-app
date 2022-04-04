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
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  errouSenha: boolean = false;
  loginForm: FormGroup;

  constructor(private clientService: ClientService) {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  login(): void {
    this.clientService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .then((result) => {
        if (!result) {
          this.errouSenha = true;
        }
      })
      .catch(() => (this.errouSenha = true));
  }

  ngOnInit(): void {}
}
