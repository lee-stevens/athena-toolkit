import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync } from '@angular/router';
import { FeaturesService } from '@Services/root/features.service';

@Injectable({ providedIn: 'root' })
export class FeatureGuard implements CanActivate {
  constructor(private _featuresService: FeaturesService) {}

  canActivate(route: ActivatedRouteSnapshot): MaybeAsync<GuardResult> {
    const featureId = route.data['feature'];
    return this._featuresService.getFeature(featureId);
  }
}
