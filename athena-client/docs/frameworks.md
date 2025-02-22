# Athena Toolkit Frameworks

## Angular

Generated with Angular 19 using a projects workspace. `athena-core` & `athena-shared`.

## Tailwind 4

`.postcssrc.json` is required besides angular.json

Each project that wants to use Tailwind must import tailwind css in styles.scss

```SCSS
@use "tailwindcss";
```

## PrimeNG

```TS
// AngularAnimations & PrimeNG required
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG(
      {
        theme: {
          preset: Aura
        }
      }
    )
  ]
};
```

### PrimeIcons

```SCSS
/* project/name/src/styles.scss */
@use "primeicons/primeicons.css";
```

### ChartJS (Via PrimeNG)

PrimeNG offers wrappers for ChartJS to make them Angular-friendly

## Other
