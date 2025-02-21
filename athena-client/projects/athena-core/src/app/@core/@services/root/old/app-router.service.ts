import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { StorageService } from "../storage.service";
import { APP_ROUTES } from "@Const/globals";

@Injectable({ providedIn: "root" })
export class AppRouterService {
  readonly appRoutes = APP_ROUTES;

  constructor(
    private _router: Router,
    private _appStorageService: StorageService
  ) {
  }

  public navigateToDefaultRoute(): void {
    const defaultAppRoute = this.appRoutes.find(route => route.default);
    if (defaultAppRoute) {
      this.navigateTo(defaultAppRoute.path);
    }
  }

  public navigateTo(routePath: string): void {
    const urlTreeToPath = this._router.createUrlTree([routePath]).toString();
    this.pushUrlToQueue(urlTreeToPath);
    this._router.navigate(['/', routePath]);
  }

  private pushUrlToQueue(url: string): void {
    const urlQueue = this._appStorageService.getSessionStorageItem<string[]>('URL_QUEUE');
    if (urlQueue) {
      const urlQueueArray: string[] = urlQueue;
      urlQueueArray.push(url);
      this._appStorageService.setSessionStorageItem('URL_QUEUE', JSON.stringify(urlQueueArray));
    } else {
      this._appStorageService.setSessionStorageItem('URL_QUEUE', JSON.stringify([url]));
    }
  }

  public navigateBack(): void {
    const previousUrl = this.popCurrentUrlFromQueue();
    if (previousUrl) {
      this._router.navigate([previousUrl]);
    }
  }

  public navigateForward(): void {
    //
  }

  private popCurrentUrlFromQueue(): string | undefined {
    let newUrl;
    const urlQueue = this._appStorageService.getSessionStorageItem<[]>('URL_QUEUE')
    if (urlQueue) {
      urlQueue.pop();
      newUrl = urlQueue[urlQueue.length - 1];
      this._appStorageService.setSessionStorageItem('URL_QUEUE', JSON.stringify(urlQueue));
    }

    return newUrl;
  }
}
