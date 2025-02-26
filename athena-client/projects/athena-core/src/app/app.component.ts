import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DockModule } from 'primeng/dock';
import { TooltipModule } from 'primeng/tooltip';
import { GlobalToolbarComponent } from './@core/@ui/global-toolbar/global-toolbar.component';

@Component({
  selector: 'athena-core-root',
  imports: [RouterOutlet, DockModule, TooltipModule, CommonModule, GlobalToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'athena-core';
}
