import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class ServiceWorkerUpdaterService {
  constructor(
    private updates: SwUpdate,
    private snackbar: MatSnackBar
  ) {
    this.updates.checkForUpdate().then(() => {
      this.updates.activateUpdate().then(() => {
        window.location.reload();
      });
    });
  }
}
