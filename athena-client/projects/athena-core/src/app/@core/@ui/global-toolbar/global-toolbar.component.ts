import { Component, OnChanges } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { ThemeManagerComponent } from '../theme-manager/theme-manager.component';
import { CommonModule } from '@angular/common';
import { ATHENA_ROUTE_ITEMS, IAthenaRouteItem } from '@Models/routes';
import { RouterService } from '@Services/root/router.service';

@Component({
  selector: 'athena-core-global-toolbar',
  imports: [CommonModule, ToolbarModule, AvatarModule, ButtonModule, ThemeManagerComponent],
  templateUrl: './global-toolbar.component.html',
  styleUrl: './global-toolbar.component.scss',
})
export class GlobalToolbarComponent implements OnChanges {
  private _toolbarItems: IAthenaRouteItem[];
  leftToolbarItems: IAthenaRouteItem[] = [];
  rightToolbarItems: IAthenaRouteItem[] = [];

  constructor(private _routerService: RouterService) {
    this._toolbarItems = ATHENA_ROUTE_ITEMS.filter((r) => r.renderConfig?.toolbar);
    this.setToolbarItems();
  }

  ngOnChanges(): void {
    this.setToolbarItems();
  }

  setToolbarItems(): void {
    this.leftToolbarItems = this._toolbarItems.filter((item) => item.renderConfig?.toolbar?.position === 'left');
    this.rightToolbarItems = this._toolbarItems.filter((item) => item.renderConfig?.toolbar?.position === 'right');
  }

  onClick(item: IAthenaRouteItem): void {
    if (item.internalPath) {
      this._routerService.internallyNavigate(item.internalPath);
    } else if (item.externalPath) {
      this._routerService.externallyNavigate(item.externalPath);
    }
  }
}
