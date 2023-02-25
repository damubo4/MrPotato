import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/loginRegister/login/login.component";
import { DashboardComponent } from "./components/dashboard/dashboard/dashboard.component";
import { HomeComponent } from "./components/apps/home/home.component";
import { AuthGuard } from "@guards/auth.guard";
import { CheckLogOutGuard } from "@guards/check-log-out.guard";
import { UsersComponent } from "./components/apps/users/users.component";
import { AddEditUsersComponent } from "./components/apps/users/add-edit-users/add-edit-users.component";

const routes: Routes = [
  //LOGIN
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent, canActivate: [CheckLogOutGuard] },
  //DASHBOARD
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      //HOME
      { path: "", redirectTo: "login", pathMatch: "full" },
      { path: "home", canActivate: [AuthGuard], component: HomeComponent },
      // USERS
      { path: "users", canActivate: [AuthGuard], component: UsersComponent },
      { path: "users/addUser", canActivate: [AuthGuard], component: AddEditUsersComponent },
      { path: "users/editUser/:id", canActivate: [AuthGuard], component: AddEditUsersComponent },
    ],
  },
  { path: "**", redirectTo: "login", pathMatch: "full" },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
