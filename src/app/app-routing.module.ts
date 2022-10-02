import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_helpers';
import { AdminComponent } from './modules/admin/components/admin/admin.component';
import { Role } from './_models/role';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
    // component: HomeComponent
    // canActivate: [AuthGuard]
    // redirectTo: '/events',
    // pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] },
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
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
  { path: '**', redirectTo: '' },
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

export const appRoutingModule = RouterModule.forRoot(routes);
