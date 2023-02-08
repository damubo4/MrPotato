import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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

  registroCliente() {
    const LOGIN = {
      name: this.myForm.get("log_name").value,
      pass: this.myForm.get("log_pass").value,
    };

    this._loginService.register(LOGIN).subscribe({
      next: (data) => {
        this.route.navigate(["/login"]);
        this.snackBar.open("Se ha registrado con exito", "", {
          duration: 3000,       
        });        
      },
      error: (error) => {
      },
    });
  }

}
