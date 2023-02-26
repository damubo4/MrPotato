import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthGuard } from "@guards/auth.guard";
import { CheckLogOutGuard } from "@guards/check-log-out.guard";
import { InterceptorService } from "./services/interceptor/interceptor.service";
import { AngularMaterialModule } from "./components/shared/angular-material/angular-material.module";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { CustomSnackBarComponentLogin } from "./components/loginRegister/login/login.component";
import { CustomSnackBarComponentUserDelete } from "./components/apps/users/users.component";
import { CustomSnackBarComponentEdited } from "./components/apps/users/add-edit-users/add-edit-users.component";
import { CustomSnackBarComponentRegistered } from "./components/apps/users/add-edit-users/add-edit-users.component";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./components/dashboard/dashboard/dashboard.component";
import { HomeComponent } from "./components/apps/home/home.component";
import { SideBarComponent } from "./components/nav/side-bar/side-bar.component";
import { MensajeConfirmacionComponent } from "./components/apps/mensaje-confirmacion/mensaje-confirmacion.component";
import { LoginComponent } from "./components/loginRegister/login/login.component";
import { CookieService } from "ngx-cookie-service";
import { NavBarComponent } from "./components/nav/nav-bar/nav-bar.component";
import { UsersComponent } from './components/apps/users/users.component';
import { AddEditUsersComponent } from './components/apps/users/add-edit-users/add-edit-users.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SwitchLangComponent } from './components/switch-lang/switch-lang.component';

@NgModule({
  declarations: [
    AppComponent,    
    HomeComponent,
    MensajeConfirmacionComponent,    
    NavBarComponent,
    SideBarComponent,
    DashboardComponent,
    LoginComponent,    
    UsersComponent,
    AddEditUsersComponent,
    SwitchLangComponent,
    CustomSnackBarComponentLogin,
    CustomSnackBarComponentUserDelete,
    CustomSnackBarComponentEdited,
    CustomSnackBarComponentRegistered
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
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

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
