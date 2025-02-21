import { ChangeDetectorRef, inject, Injectable, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { IPrimeChart, IPrimeChartFactory } from "@Models/prime-chart-factory";

@Injectable()
export class PrimeChartStackedBarService implements IPrimeChartFactory {
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
						labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
						datasets: [
								{
										type: 'bar',
										label: 'Dataset 1',
										backgroundColor: documentStyle.getPropertyValue('--p-cyan-500'),
										data: [50, 25, 12, 48, 90, 76, 42]
								},
								{
										type: 'bar',
										label: 'Dataset 2',
										backgroundColor: documentStyle.getPropertyValue('--p-gray-500'),
										data: [21, 84, 24, 75, 37, 65, 34]
								},
								{
										type: 'bar',
										label: 'Dataset 3',
										backgroundColor: documentStyle.getPropertyValue('--p-orange-500'),
										data: [41, 52, 24, 74, 23, 21, 32]
								}
						]
				};

				this.options = {
						maintainAspectRatio: false,
						aspectRatio: 0.8,
						plugins: {
								tooltip: {
										mode: 'index',
										intersect: false
								},
								legend: {
										labels: {
												color: textColor
										}
								}
						},
						scales: {
								x: {
										stacked: true,
										ticks: {
												color: textColorSecondary
										},
										grid: {
												color: surfaceBorder,
												drawBorder: false
										}
								},
								y: {
										stacked: true,
										ticks: {
												color: textColorSecondary
										},
										grid: {
												color: surfaceBorder,
												drawBorder: false
										}
								}
						}
				};
				this._cd.markForCheck()
		}
	}
}
