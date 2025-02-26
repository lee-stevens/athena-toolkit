import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DockModule } from 'primeng/dock';
import { CommonModule } from '@angular/common';
import { ATHENA_ROUTE_ITEMS } from '@Models/routes';

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

  constructor() {
    this.dockRouteItems = ATHENA_ROUTE_ITEMS.filter((r) => r.renderConfig?.dock);
  }

  onItemClick(item: MenuItem) {}
}
