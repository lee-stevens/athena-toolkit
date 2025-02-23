import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterService } from '@Services/root/router.service';
import { MenuItem } from 'primeng/api';
import { DockModule } from 'primeng/dock';
import { TooltipModule } from 'primeng/tooltip';
import { DOCK_ROUTE_ITEMS } from './app.routes';
import { GlobalToolbarComponent } from "./@core/@ui/global-toolbar/global-toolbar.component";

@Component({
  selector: 'athena-core-root',
  imports: [RouterOutlet, DockModule, TooltipModule, CommonModule, GlobalToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'athena-core';

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
