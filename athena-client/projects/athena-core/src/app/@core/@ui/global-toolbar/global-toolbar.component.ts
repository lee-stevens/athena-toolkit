import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { ThemeManagerComponent } from '../theme-manager/theme-manager.component';
import { CommonModule } from '@angular/common';
import { IGlobalToolbarItem } from '@Models/ui';

@Component({
  selector: 'athena-core-global-toolbar',
  imports: [CommonModule, ToolbarModule, AvatarModule, ButtonModule, ThemeManagerComponent],
  templateUrl: './global-toolbar.component.html',
  styleUrl: './global-toolbar.component.scss',
})
export class GlobalToolbarComponent {
  private toolbarItems: IGlobalToolbarItem[] = [
    { type: 'button', label: 'Dashboard', position: 'left', iconClass: 'pi-home' },
    { type: 'button', label: 'Dev-Tools', position: 'left', iconClass: 'pi-dev' },
    { type: 'button', label: 'About', position: 'right', iconClass: 'pi-info' },
    { type: 'button', label: 'Github', position: 'right', iconClass: 'pi-github' },
  ];

  get leftToolbarItems(): IGlobalToolbarItem[] {
    return this.toolbarItems.filter((item) => item.position === 'left');
  }

  get rightToolbarItems(): IGlobalToolbarItem[] {
    return this.toolbarItems.filter((item) => item.position === 'right');
  }
}
