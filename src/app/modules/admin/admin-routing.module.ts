import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
  },
];

export const adminRoutingModule = RouterModule.forChild(routes);
