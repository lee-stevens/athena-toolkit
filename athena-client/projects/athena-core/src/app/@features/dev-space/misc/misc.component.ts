import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'athena-c-misc',
  imports: [ButtonModule, ChartModule, CheckboxModule],
  templateUrl: './misc.component.html',
  styleUrl: './misc.component.scss',
})
export class MiscComponent {
  title = 'athena-core-misc';

  toggleTheme(): void {
    //basicOptions
  }
}
