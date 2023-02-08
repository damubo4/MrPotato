import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthGuard } from "./auth.guard";
import { CheckLogOutGuard } from "./check-log-out.guard";
import { InterceptorService } from "./services/interceptor/interceptor.service";
import { AngularMaterialModule } from "./components/shared/angular-material/angular-material.module";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { CuentasComponent } from "./components/apps/cuentas/cuentas.component";
import { HomeComponent } from "./components/apps/home/home.component";
import { MensajeConfirmacionComponent } from "./components/apps/mensaje-confirmacion/mensaje-confirmacion.component";
import { NavComponent } from "./components/nav/nav.component";
import { NavBarComponent } from "./components/nav/nav-bar/nav-bar.component";
import { SideBarComponent } from "./components/nav/side-bar/side-bar.component";
import { DashboardComponent } from "./components/dashboard/dashboard/dashboard.component";
import { LoginComponent } from "./components/loginRegister/login/login.component";
import { RegisterComponent } from "./components/loginRegister/register/register.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CookieService } from "ngx-cookie-service";
import { AddEditCuentaComponent } from "./components/apps/cuentas/add-edit-cuenta/add-edit-cuenta.component";

@NgModule({
  declarations: [
    AppComponent,
    CuentasComponent,
    HomeComponent,
    MensajeConfirmacionComponent,
    NavComponent,
    NavBarComponent,
    SideBarComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    AddEditCuentaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule,
  ],
  providers: [
    CookieService,
    AuthGuard,
    CheckLogOutGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
