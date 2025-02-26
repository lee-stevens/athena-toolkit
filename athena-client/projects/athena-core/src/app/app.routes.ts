import { Routes } from '@angular/router';
import { FeatureGuard } from '@Core/@guards/feature.guard';
import { AboutComponent } from '@Features/about/about.component';
import { DashboardComponent } from '@Features/dashboard/dashboard.component';
import { DevSpaceComponent } from '@Features/dev-space/dev-space.component';

export const ROUTES: Routes = [
  {
    path: 'dev-space',
    component: DevSpaceComponent,
    canActivate: [FeatureGuard],
    data: { feature: 'DevSpace' },
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
