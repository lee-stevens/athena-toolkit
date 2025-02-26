export type HorizontalPosition = 'left' | 'horizontalCenter' | 'right';
export type VerticalPosition = 'top' | 'verticalCenter' | 'bottom';
export type Position = HorizontalPosition | VerticalPosition;
export type GlobalToolbarItemType = 'button' | 'avatar';

export type IGlobalToolbarItem = {
  type: GlobalToolbarItemType;
  label: string;
  iconClass?: string;
  position: HorizontalPosition;
  navigateTo?: string;
};
