export type HorizontalPosition = 'left' | 'horizontalCenter' | 'right';
export type VerticalPosition = 'top' | 'verticalCenter' | 'bottom';
export type Position = HorizontalPosition | VerticalPosition;
export type ToolbarItemType = 'button' | 'avatar';

export type IGlobalToolbarItem = {
  type: ToolbarItemType;
  label: string;
  iconClass?: string;
  position: HorizontalPosition;
};
