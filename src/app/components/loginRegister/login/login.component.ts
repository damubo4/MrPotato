import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { AuthService } from "@services/auth/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  myForm: FormGroup;
  isLogged: boolean = false;
  idLogin: number;
  type_input = "password";
  loginError = "'loginError' | translate";

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private snackBar: MatSnackBar,
    private _authService: AuthService
  ) {
    this.myForm = this.fb.group({
      log_name: ["", Validators.required],
      log_pass: ["", Validators.required],
    });
  }

  loginClient() {
    const LOGIN = {
      UserName: this.myForm.get("log_name").value,
      Password: this.myForm.get("log_pass").value,
    };

    this._authService.login(LOGIN).subscribe({
      next: () => {
        this.route.navigate(["/dashboard/home"]);
      },
      error: () => {
        this.snackBar.openFromComponent(
          CustomSnackBarComponentLogin,
          {
            duration: 3000,
          }
        );
      },
    });
  }

  changeEyePass() {
    if (this.type_input === "text") {
      this.type_input = "password";
      return;
    }
    if (this.type_input === "password") {
      this.type_input = "text";
    }
  }
}

@Component({
  selector: "custom-snackbar-login",
  template: "<span>{{ 'loginError' | translate }}</span>",
})
export class CustomSnackBarComponentLogin {}
