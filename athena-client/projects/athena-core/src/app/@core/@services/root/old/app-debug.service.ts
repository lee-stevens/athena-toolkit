import { Injectable, signal } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { StorageService } from "../storage.service";

// TODO: Investiage if Signals are worth replacing Observables

@Injectable({ providedIn: 'root' })
export class AppDebugService {
  private _debugEnabled$$ = new BehaviorSubject<boolean>(this.getCachedDebugState());
  private _isDebugModeSignal = signal<boolean>(this.getCachedDebugState());

  constructor(
    private _appStorageService: StorageService
  ) {}

  getCachedDebugState(): boolean {
    return this._appStorageService.getSessionStorageItem<boolean>('debugEnabled') ?? false;
  }

  setCachedDebugState(newState: boolean): void {
    this._appStorageService.setSessionStorageItem('debugEnabled', newState);
  }

  debugEnabledAsObservable(): Observable<boolean> {
    return this._debugEnabled$$.asObservable();
  }

  // debugModeAsSignal(): Signal<boolean> {
  //   return this._isDebugModeSignal;
  // }

  toggleDebug(): void {
    const newState = !this._debugEnabled$$.value;
    this.setCachedDebugState(newState);
    this._debugEnabled$$.next(newState);
  }
}

