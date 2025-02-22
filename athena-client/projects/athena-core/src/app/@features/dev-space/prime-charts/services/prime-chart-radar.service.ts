import { Injectable } from '@angular/core';
import { IPrimeChart, IPrimeChartFactory } from '@Models/prime-chart-factory';

@Injectable()
export class PrimeChartRadarService implements IPrimeChartFactory {
  createExampleChart(): IPrimeChart {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--p-text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');

    const data = {
      labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
      datasets: [
        {
          label: 'My First dataset',
          borderColor: documentStyle.getPropertyValue('--p-gray-400'),
          pointBackgroundColor: documentStyle.getPropertyValue('--p-gray-400'),
          pointBorderColor: documentStyle.getPropertyValue('--p-gray-400'),
          pointHoverBackgroundColor: textColor,
          pointHoverBorderColor: documentStyle.getPropertyValue('--p-gray-400'),
          data: [65, 59, 90, 81, 56, 55, 40],
        },
        {
          label: 'My Second dataset',
          borderColor: documentStyle.getPropertyValue('--p-cyan-400'),
          pointBackgroundColor: documentStyle.getPropertyValue('--p-cyan-400'),
          pointBorderColor: documentStyle.getPropertyValue('--p-cyan-400'),
          pointHoverBackgroundColor: textColor,
          pointHoverBorderColor: documentStyle.getPropertyValue('--p-cyan-400'),
          data: [28, 48, 40, 19, 96, 27, 100],
        },
      ],
    };

    const options = {
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        r: {
          grid: {
            color: textColorSecondary,
          },
        },
      },
    };

    const chart: IPrimeChart = {
      type: 'radar',
      data: data,
      options: options,
    };
    return chart;
  }
}
