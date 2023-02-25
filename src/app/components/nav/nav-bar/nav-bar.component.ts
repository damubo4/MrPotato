import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TokenService } from "@services/token/token.service";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"],
})
export class NavBarComponent implements OnInit {
  rolNombre: string;
  rolCedula: string;
  idRol: string;

  constructor(private _tokenService: TokenService, private route: Router) {}

  ngOnInit(): void {}

  logOut() {
    this._tokenService.removeToken(); //borramos lo que hay en LocalStorage
    this.route.navigate(["/login"]);
  }
}
