import { AthenaFeature } from './features';
import { GlobalToolbarItemType, HorizontalPosition } from './ui';

export interface IAthenaRouteItem {
  id: AthenaRouteId;
  label?: string;
  iconClass?: string;
  internalPath?: string;
  externalPath?: string;
  renderConfig?: {
    toolbar?: IGlobalToolbarItemConfig;
    dock?: IGlobalDockItemConfig;
  };
}

export interface IGlobalToolbarItemConfig {
  position: HorizontalPosition;
  type: GlobalToolbarItemType;
}

export interface IGlobalDockItemConfig {
  position: HorizontalPosition;
}

export interface IAthenaRouteComponentPosition {
  toolbar?: HorizontalPosition;
  dock?: HorizontalPosition;
}

export type AthenaRouteId = 'Dashboard' | 'DevSpace' | 'About' | 'Github';

export const ATHENA_ROUTE_ITEMS: IAthenaRouteItem[] = [
  { id: 'Dashboard', label: `Dashboard`, internalPath: '/dashboard', iconClass: 'pi-home', renderConfig: { toolbar: { position: 'left', type: 'button' } } },
  { id: 'DevSpace', label: 'Dev-Space', internalPath: '/dev-space', iconClass: 'pi-code', renderConfig: { toolbar: { position: 'left', type: 'button' } } },
  { id: 'About', label: 'About', internalPath: '/about', iconClass: 'pi-info-circle', renderConfig: { toolbar: { position: 'right', type: 'button' } } },
  {
    id: 'Github',
    label: 'Github',
    externalPath: 'https://github.com/lee-stevens/athena-toolkit',
    iconClass: 'pi-github',
    renderConfig: { toolbar: { position: 'right', type: 'button' } },
  },
];

export const ATHENA_FEATURE_ROUTE_RECORD: Record<AthenaFeature, AthenaRouteId> = {
  Dashboard: 'Dashboard',
  DevSpace: 'DevSpace',
};
