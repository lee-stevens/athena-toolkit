import { Routes } from '@angular/router';
import { AboutComponent } from '@Features/about/about.component';
import { DashboardComponent } from '@Features/dashboard/dashboard.component';
import { DevSpaceComponent } from '@Features/dev-space/dev-space.component';
import { MenuItem } from 'primeng/api';

export const ROUTES: Routes = [
  {
    path: 'dev-space',
    component: DevSpaceComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
];

export const DOCK_ROUTE_ITEMS: MenuItem[] = [
  {
    label: 'Dashboard',
    icon: 'pi-home',
    path: '/dashboard',
  },
  {
    label: 'Dev Space',
    icon: 'pi-code',
    path: '/dev-space',
  },
  {
    label: 'About',
    icon: 'pi-info-circle',
    path: '/about',
  },
];
