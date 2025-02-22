import { Injectable } from '@angular/core';
import { ENVIRONMENT } from '@Env';
import { EnvVariable } from '@Models/environment';

@Injectable({ providedIn: 'root' })
export class EnvironmentService {
  mapEnvironmentVariables(): EnvVariable[] {
    return [
      {
        key: 'Production',
        value: ENVIRONMENT.production,
        type: typeof ENVIRONMENT.production,
      },
      {
        key: 'Host Device Name',
        value: ENVIRONMENT.HOST_DEVICE_NAME,
        type: typeof ENVIRONMENT.HOST_DEVICE_NAME,
      },
      {
        key: 'API URL',
        value: ENVIRONMENT.API_URL,
        type: typeof ENVIRONMENT.API_URL,
      },
    ];
  }
}
