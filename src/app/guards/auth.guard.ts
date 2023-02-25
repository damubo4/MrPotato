import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { TokenService } from "@services/token/token.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private _tokenService: TokenService, private router: Router) {}

  canActivate(): boolean {
    if (this._tokenService.isValidToken()) {
      return true;
    }
    this.router.navigate(["/login"]);
    return false;
  }
}
