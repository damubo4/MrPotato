import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  idLogin$ = new EventEmitter<any>();

  url = "http://localhost:3000/users";

  constructor(private http: HttpClient, private cookies: CookieService) {}
  //funcion de login de usuarios
  login(): Observable<any> {
    return this.http.get(this.url);
  }
  //funcion parea registrar usuarios
  register(LOGIN): Observable<any> {
    return this.http.post(this.url, LOGIN);
  }

  loggedIn() {
    return localStorage.getItem("token");
  }

  deleteToken() {
    localStorage.removeItem("token");
  }
}
