import { Routes } from '@angular/router';
import { DevSpaceComponent } from './@features/dev-space/dev-space.component';
import { DashboardComponent } from './@features/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: 'dev-space',
    component: DevSpaceComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];
