import { Component } from '@angular/core';
import { RouterService } from '@Services/root/router.service';
import { MenuItem } from 'primeng/api';
import { DOCK_ROUTE_ITEMS } from '../../../app.routes';
import { DockModule } from 'primeng/dock';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'athena-core-global-dock',
  imports: [CommonModule, DockModule],
  templateUrl: './global-dock.component.html',
  styleUrl: './global-dock.component.scss',
})
export class GlobalDockComponent {
  dockRouteItems: MenuItem[] | undefined = undefined;

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

  constructor(private _routerService: RouterService) {
    this.dockRouteItems = DOCK_ROUTE_ITEMS;
  }

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
