export type IPrimeChartType = 'bar' | 'radar' | 'line' | 'pie' | 'doughnut';

export interface IPrimeChartFactory {
  createExampleChart(): IPrimeChart;
}

export interface IPrimeChart {
  type: IPrimeChartType;
  data: any;
  options: any;
}
