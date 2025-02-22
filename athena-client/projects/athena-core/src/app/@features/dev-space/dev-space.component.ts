import { Component } from '@angular/core';
import { TailwindComponent } from './tailwind/tailwind.component';
import { PrimengComponent } from './primeng/primeng.component';
import { MiscComponent } from './misc/misc.component';
import { PrimeChartsComponent } from './prime-charts/prime-charts.component';
import { TabsModule } from 'primeng/tabs';
import { DevDashboardComponent } from './dev-dashboard/dev-dashboard.component';

@Component({
  selector: 'athena-core-dev-space',
  imports: [TailwindComponent, PrimengComponent, MiscComponent, PrimeChartsComponent, TabsModule, DevDashboardComponent],
  templateUrl: './dev-space.component.html',
  styleUrl: './dev-space.component.scss',
})
export class DevSpaceComponent {}
