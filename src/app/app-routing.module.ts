import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './modules/auth/components/register/register.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_helpers';
import { AdminComponent } from './modules/admin/components/admin/admin.component';
import { Role } from './_models/role';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
    // canActivate: [AuthGuard]
    // redirectTo: '/events',
    // pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  //   { path: '', component: AppComponent, children: [
  //     { path: '',
  //       component: HomeComponent
  //     },
  //     { path: 'login',
  //       component: LoginComponent,
  //       canActivate: [GuestGuard]
  //     },
  //     {
  //       path: 'protected',
  //       component: ProtectedComponent, canActivate: [LoggedInGuard]
  //     }
  // ]}
  // { path: 'hero/:id',      component: HeroDetailComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

export const appRoutingModule = RouterModule.forRoot(routes);
