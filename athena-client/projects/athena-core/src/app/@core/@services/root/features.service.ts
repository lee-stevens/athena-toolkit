import { Injectable } from '@angular/core';
import { AthenaFeature, ENABLED_FEATURES } from '@Models/features';
import { AthenaLoggerService } from './athena-logger.service';

@Injectable({ providedIn: 'root' })
export class FeaturesService {
  private _enabledFeatures: AthenaFeature[] = [];

  constructor() {
    this._enabledFeatures = ENABLED_FEATURES;
  }

  getFeature(name: AthenaFeature): boolean {
    const isFeatureEnabled = !!this._enabledFeatures.find((f) => f === name);
    // AthenaLoggerService.log(`Feature ${name}: ${isFeatureEnabled ? 'Enabled' : 'Disabled'}`);
    return isFeatureEnabled;
  }
}
