import { ChangeDetectorRef, Component, inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ChartModule } from 'primeng/chart';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CheckboxModule,
    ButtonModule,
    ChartModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'athena-core';

  basicData: any;
  basicOptions: any;
  platformId = inject(PLATFORM_ID);

  constructor(
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.initChart();
  }

  toggleTheme(): void {

  }

  initChart() {
      if (isPlatformBrowser(this.platformId)) {
          const documentStyle = getComputedStyle(document.documentElement);
          const textColor = documentStyle.getPropertyValue('--p-text-color');
          const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
          const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

          this.basicData = {
              labels: ['Q1', 'Q2', 'Q3', 'Q4'],
              datasets: [
                  {
                      label: 'Sales',
                      data: [540, 325, 702, 620],
                      backgroundColor: [
                          'rgba(249, 115, 22, 0.2)',
                          'rgba(6, 182, 212, 0.2)',
                          'rgb(107, 114, 128, 0.2)',
                          'rgba(139, 92, 246, 0.2)',
                      ],
                      borderColor: ['rgb(249, 115, 22)', 'rgb(6, 182, 212)', 'rgb(107, 114, 128)', 'rgb(139, 92, 246)'],
                      borderWidth: 1,
                  },
              ],
          };

          this.basicOptions = {
              plugins: {
                  legend: {
                      labels: {
                          color: textColor,
                      },
                  },
              },
              scales: {
                  x: {
                      ticks: {
                          color: textColorSecondary,
                      },
                      grid: {
                          color: surfaceBorder,
                      },
                  },
                  y: {
                      beginAtZero: true,
                      ticks: {
                          color: textColorSecondary,
                      },
                      grid: {
                          color: surfaceBorder,
                      },
                  },
              },
          };
          this.cd.markForCheck()
      }
  }
}
