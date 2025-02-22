import { Routes } from '@angular/router';
import { DashboardComponent } from '@Features/dashboard/dashboard.component';
import { DevSpaceComponent } from '@Features/dev-space/dev-space.component';

export const routes: Routes = [
  {
    path: 'dev-space',
    component: DevSpaceComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
];
