import { APP_ROUTES } from "@Const/globals";
import { IAppRoute } from "@Models/components.types";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class GlobalHelperService {

  public getSortedAppRoutes(): IAppRoute[] {
    const appRoutes = APP_ROUTES;
    const sortedAppRoutes = appRoutes.sort((a, b) => {
      if (a.placement.position === b.placement.position) {
        return a.placement.sortOrder - b.placement.sortOrder;
      }
      return a.placement.position === 'top' ? -1 : 1;
    })
    return sortedAppRoutes;
  }
}
