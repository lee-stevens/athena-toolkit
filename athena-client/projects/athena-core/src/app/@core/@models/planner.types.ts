export type Priority = 'low' | 'medium' | 'high' | 'highest';
export type Status = 'todo' | 'in-progress' | 'done';

export interface IPlannerItem {
  tags?: string[];
  notes?: string[];
}

export interface IPlannerProject extends IPlannerItem {
  title: string; //PK
  description: string;
  priority: Priority;
  status: Status;
}

export interface IPlannerTask extends IPlannerItem {
  id: number; //PK
  title: string;
  description: string;
  priority: Priority;
  status: Status;
}

export interface IPlannerDay extends IPlannerItem {
  date: string; //PK
  tasks: IPlannerTask[];
}

//Probably useless
export interface IPlannerWeek extends IPlannerItem {
  days: IPlannerDay[];
}
