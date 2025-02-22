import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterService } from '@Services/root/router.service';
import { MenuItem } from 'primeng/api';
import { DockModule } from 'primeng/dock';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'athena-core-root',
  imports: [RouterOutlet, DockModule, TooltipModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'athena-core';

  items: MenuItem[] = [
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
  ];
  position = 'bottom';
  positionOptions = [
    {
      label: 'Bottom',
      value: 'bottom',
    },
    {
      label: 'Top',
      value: 'top',
    },
    {
      label: 'Left',
      value: 'left',
    },
    {
      label: 'Right',
      value: 'right',
    },
  ];

  constructor(private _routerService: RouterService) {}

  onDockItemClicked(item: MenuItem) {
    const path = item['path'];
    if (path) {
      console.log(`Dock Item clicked, navigating to ${path}`);
      this._routerService.navigateTo(path);
    } else {
      console.error('No path defined for dock item:', item);
    }
  }
}
