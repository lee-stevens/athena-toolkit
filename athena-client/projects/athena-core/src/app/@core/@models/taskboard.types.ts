export interface ITaskboard {
  columns: ITaskboardColumn[];
}

export interface ITaskboardColumn {
  state: TaskboardState;
  items: ITaskboardItem[];
}

export interface ITaskboardItem {
  id: string;
  title: string;
  description: string;
  priority: TaskboardPriority;
  state: TaskboardState;
  tags: string[];
  createdDate: string;
  internalState: TaskboardInternalState;
}

export type TaskboardState = 'Backlog' | 'Todo' | 'InProgress' | 'Done';
export type TaskboardPriority = 'Low' | 'Medium' | 'High';
export type TaskboardInternalState = 'Draft' | 'Active';
