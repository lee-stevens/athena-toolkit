import { Injectable } from "@angular/core";
import { IPrimeChart, IPrimeChartFactory } from "@Models/prime-chart-factory";

@Injectable()
export class PrimeChartStackedBarService implements IPrimeChartFactory {

	createExampleChart(): IPrimeChart {
		let data: any;
		let options: any;

		const documentStyle = getComputedStyle(document.documentElement);
		const textColor = documentStyle.getPropertyValue('--p-text-color');
		const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
		const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

		data = {
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

		options = {
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

		const chart: IPrimeChart = {
			type: 'bar',
			data: data,
			options: options
		};
		return chart;
	}

}
