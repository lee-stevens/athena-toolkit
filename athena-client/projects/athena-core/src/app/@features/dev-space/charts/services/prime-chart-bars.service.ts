import { ChangeDetectorRef, inject, Injectable, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { IPrimeChartFactory, IPrimeChart } from "@Models/prime-chart-factory";

@Injectable()
export class PrimeChartBarService implements IPrimeChartFactory {
	data: any;
	options: any;
	platformId = inject(PLATFORM_ID);

	constructor(
		private _cd: ChangeDetectorRef
	) {}

	createExampleChart(): IPrimeChart {
		this.initChart();
		const chart: IPrimeChart = {
			type: 'bar',
			data: this.data,
			options: this.options
		};
		return chart;
	}

	initChart() {
		if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--p-text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
      const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

      this.data = {
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

      this.options = {
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
      this._cd.markForCheck()
    }
	}
}
