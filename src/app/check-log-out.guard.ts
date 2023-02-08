import { Injectable } from '@angular/core';
import { CanActivate, Router,  } from '@angular/router';
import { LoginService } from './services/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class CheckLogOutGuard implements CanActivate {

  constructor(private _loginService: LoginService,
    private router: Router) {}

canActivate(): boolean{
if (!this._loginService.loggedIn()) {
return true;
}
this.router.navigate(['/dashboard']);
return false;
}
    
  
}
