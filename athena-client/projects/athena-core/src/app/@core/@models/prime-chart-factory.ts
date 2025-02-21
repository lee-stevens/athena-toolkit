export interface IPrimeChartFactory {
	createExampleChart(): IPrimeChart;
}

export interface IPrimeChart {
	type: any;
	data: any;
	options: any;
}
