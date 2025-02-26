import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({ providedIn: 'root' })
export class RouterService {
  private _routeHistory: string[] = [];
  private _routeHistoryLimit = 5;

  constructor(
    private _router: Router,
    private _storageService: StorageService
  ) {
    this.trackRouteHistory();
  }

  private trackRouteHistory(): void {
    this._router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      this.addToRouteHistory(event.urlAfterRedirects);
    });
  }

  private addToRouteHistory(route: string): void {
    this._routeHistory.push(route);
    if (this._routeHistory.length > this._routeHistoryLimit) {
      this._routeHistory.shift();
    }
    this._storageService.setSessionStorageItem('routeHistory', this._routeHistory);
  }

  internallyNavigate(route: string): void {
    this._router.navigate([route]);
  }

  externallyNavigate(route: string): void {
    window.open(route, '_blank');
  }
}
