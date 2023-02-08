import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { LoginService } from "src/app/services/login/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  isLogged: boolean = false;
  idLogin: number;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private snackBar: MatSnackBar,
    private _loginService: LoginService
  ) {
    this.myForm = this.fb.group({
      log_name: ["", Validators.required],
      log_pass: ["", Validators.required],
    });
  }

  ngOnInit(): void {}

  loginCliente() {
    const LOGIN = {
      name: this.myForm.get("log_name").value,
      pass: this.myForm.get("log_pass").value,
    };

    this._loginService.login().subscribe({
      next: (data) => {
        data.forEach((element) => {          
          if (element.name == LOGIN.name && element.pass == LOGIN.pass) {
            localStorage.setItem("token", data.token);
            this.route.navigate(["/dashboard/home"]);
          } else 
          this.snackBar.open("El nombre de usuario o password son incorrectos", "", {
            duration: 3000,
          });
        });        
      },
      error: (error) => {
      },
    });
  }
}
