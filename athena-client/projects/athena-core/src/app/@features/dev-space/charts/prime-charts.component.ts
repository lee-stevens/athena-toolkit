import { Component, inject, PLATFORM_ID } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { PrimeChartBarService } from './services/prime-chart-bar.service';
import { PrimeChartStackedBarService } from './services/prime-chart-stacked-bar.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { IPrimeChart } from '@Models/prime-chart-factory';

@Component({
  selector: 'athena-c-prime-charts',
  imports: [
    ChartModule,
		CommonModule
  ],
	providers: [
		PrimeChartBarService,
		PrimeChartStackedBarService
	],
  templateUrl: './prime-charts.component.html',
  styleUrl: './prime-charts.component.scss'
})
export class PrimeChartsComponent {
	charts: IPrimeChart[] = [];
	platformId = inject(PLATFORM_ID);

	constructor(
		private _primeChartBarService: PrimeChartBarService,
		private _primeChartStackedBarService: PrimeChartStackedBarService
	) {
		if (isPlatformBrowser(this.platformId)) {
			this.charts.push(this._primeChartBarService.createExampleChart());
			this.charts.push(this._primeChartStackedBarService.createExampleChart());
		}
	}
}
