import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { ROUTES } from './app.routes';
import { AthenaPrimeTheme } from './athena-prime-theme';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(ROUTES),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: AthenaPrimeTheme,
        options: {
          darkModeSelector: '.athena-dark-mode',
        },
      },
    }),
  ],
};
