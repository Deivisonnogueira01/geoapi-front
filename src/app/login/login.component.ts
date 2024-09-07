import { AuthService } from "src/app/services/auth.service";
import { ToastrService } from "ngx-toastr";

import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthRequest} from "../model/authRequest";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {

  auth: AuthRequest = {
    username: "",
    password: "",
  };

  username = new FormControl(null, Validators.minLength(3));
  password = new FormControl(null, Validators.minLength(3));

  constructor(
    private toast: ToastrService,
    private service: AuthService,
    private router: Router) { }

  ngOnInit(): void { }

  logar() {
    this.service.authenticate(this.auth).subscribe(resposta => {
      const authToken = resposta.headers.get('Authorization');
      if (authToken) {
        this.service.successfulLogin(authToken.substring(7));
        this.router.navigate(['']);
      }
    }, () => {
      this.toast.error('Usuário e/ou senha inválidos');
    });
  }


  validaCampos(): boolean {
    return this.username.valid && this.password.valid

  }

}
