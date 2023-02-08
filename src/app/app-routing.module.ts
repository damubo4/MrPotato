import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/loginRegister/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { HomeComponent } from './components/apps/home/home.component';
import { CuentasComponent } from './components/apps/cuentas/cuentas.component';
import { AddEditCuentaComponent } from './components/apps/cuentas/add-edit-cuenta/add-edit-cuenta.component';
import { AuthGuard } from './auth.guard';
import { CheckLogOutGuard } from './check-log-out.guard';
import { RegisterComponent } from './components/loginRegister/register/register.component';

const routes: Routes = [
  //LOGIN
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent, canActivate:[CheckLogOutGuard]},
  { path: 'register', component: RegisterComponent, canActivate:[CheckLogOutGuard]},
  //DASHBOARD  
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard], children: [
    //HOME
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},    
    // CUENTAS
    { path: 'cuentas', component: CuentasComponent},
    { path: 'cuentas/addCuenta', component: AddEditCuentaComponent},
    { path: 'cuentas/editCuenta/:id', component: AddEditCuentaComponent},
 
  ]},
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
