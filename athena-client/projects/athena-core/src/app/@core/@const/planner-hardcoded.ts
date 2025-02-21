import { IPlannerDay, IPlannerTask } from "@Models/planner.types";

export const PLANNER_DAY_1_TASKS: IPlannerTask[] = [
  {
    id: 1,
    title: 'Develop a Planner Feature',
    description: 'This is a task',
    priority: 'low',
    status: 'todo',
    tags: ['tag1', 'tag2'],
    notes: ['note1', 'note2']
  },
  {
    id: 2,
    title: 'Task 2',
    description: 'This is a task',
    priority: 'medium',
    status: 'in-progress',
    tags: ['tag1', 'tag2'],
    notes: ['note1', 'note2']
  },
  {
    id: 3,
    title: 'Task 3',
    description: 'This is a task',
    priority: 'high',
    status: 'done',
    tags: ['tag1', 'tag2'],
    notes: ['note1', 'note2']
  }
]

export const PLANNER_DAY: IPlannerDay = {
  date: new Date().toISOString(),
  tasks: PLANNER_DAY_1_TASKS,
  tags: ['tag1', 'tag2'],
  notes: ['note1', 'note2']
}
