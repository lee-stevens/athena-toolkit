import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'athena-core-theme-manager',
  imports: [ButtonModule],
  templateUrl: './theme-manager.component.html',
  styleUrl: './theme-manager.component.scss',
})
export class ThemeManagerComponent {
  toggleDarkMode() {
    const element = document.querySelector('html');
    if (element) {
      element.classList.toggle('athena-colour-scheme');
    }
  }
}
