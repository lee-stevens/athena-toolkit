import { Component, effect, signal } from '@angular/core';
import { AthenaLoggerService } from '@Services/root/athena-logger.service';
import { StorageService } from '@Services/root/storage.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'athena-core-theme-manager',
  imports: [ButtonModule],
  templateUrl: './theme-manager.component.html',
  styleUrl: './theme-manager.component.scss',
})
export class ThemeManagerComponent {
  darkMode = signal<boolean>(false);

  constructor(private _storageService: StorageService) {
    this.darkMode.set(this._storageService.getLocalStorageItem<boolean>('athena-dark-mode', false));

    effect(() => {
      this.setAndSaveDarkMode();
    });
  }

  private setAndSaveDarkMode(): void {
    const element = document.querySelector('html');
    element?.classList?.toggle('athena-dark-mode', this.darkMode());
    this._storageService.setLocalStorageItem('athena-dark-mode', this.darkMode());
    AthenaLoggerService.log(`Theme Dark Mode set to ${this.darkMode()}`);
  }

  toggleDarkMode() {
    this.darkMode.set(!this.darkMode());
  }
}
