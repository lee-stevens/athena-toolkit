import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { ThemeManagerComponent } from '../theme-manager/theme-manager.component';

@Component({
  selector: 'athena-core-global-toolbar',
  imports: [ToolbarModule, AvatarModule, ButtonModule, ThemeManagerComponent],
  templateUrl: './global-toolbar.component.html',
  styleUrl: './global-toolbar.component.scss',
})
export class GlobalToolbarComponent {}
