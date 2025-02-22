import { Component, inject, PLATFORM_ID } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { PrimeChartBarService } from './services/prime-chart-bar.service';
import { PrimeChartStackedBarService } from './services/prime-chart-stacked-bar.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { IPrimeChart } from '@Models/prime-chart-factory';
import { PrimeChartRadarService } from './services/prime-chart-radar.service';

@Component({
  selector: 'athena-core-prime-charts',
  imports: [ChartModule, CommonModule],
  providers: [PrimeChartBarService, PrimeChartStackedBarService, PrimeChartRadarService],
  templateUrl: './prime-charts.component.html',
  styleUrl: './prime-charts.component.scss',
})
export class PrimeChartsComponent {
  charts: IPrimeChart[] = [];
  platformId = inject(PLATFORM_ID);

  private _primeChartService: PrimeChartBarService[] = [new PrimeChartBarService(), new PrimeChartStackedBarService(), new PrimeChartRadarService()];

  constructor() {
    this.generatePrimeCharts();
  }

  private generatePrimeCharts(): void {
    if (isPlatformBrowser(this.platformId)) {
      this._primeChartService.forEach((service) => {
        this.charts.push(service.createExampleChart());
      });
    }
  }
}
