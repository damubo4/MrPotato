import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  rolNombre: string;
  rolCedula: string;
  idRol: string;  

  constructor(private _loginService: LoginService,
              private route: Router,
              ) { }

  ngOnInit(): void {       
    

  }  

  logOut() {
    this._loginService.deleteToken(); //borramos lo que hay en LocalStorage    
      this.route.navigate(['/login']);      
    
  } 

}
