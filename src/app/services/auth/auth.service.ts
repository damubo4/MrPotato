import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "@environments/environment";
import { TokenService } from "@services/token/token.service";
import { tap } from "rxjs/operators";
import { User } from '../../models/auth.models'

@Injectable({
  providedIn: "root",
})
export class AuthService {
  api_url = environment.url;

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  login(login) {
    return this.http
      .post(this.api_url + "account/login", login)
      .pipe(tap((res: User) => this.tokenService.saveToken(res.Token)));
  }

  register(login) {
    return this.http.post(this.api_url, login);
  }
  
}
