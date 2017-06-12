import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { Signup } from './signup';
import { AuthGuard } from './common/auth.guard';

export const routes: Routes = [
  { path: '',       component: LoginComponent },
  { path: 'login',  component: LoginComponent },
//   { path: 'signup', component: Signup },
  { path: 'dashboard',  component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'home',   component: HomeComponent, canActivate: [AuthGuard] },
  { path: '**',     component: LoginComponent },
];