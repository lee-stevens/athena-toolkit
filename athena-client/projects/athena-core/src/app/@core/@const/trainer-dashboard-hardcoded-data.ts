import { IExercise, IWorkout, IRoutine } from '@Models/old/trainer.types';

export const HARDCODED_EXERCISES: IExercise[] = [
  { id: 1, name: 'Front-Lever', description: '', category: 'Calisthenics' },
  { id: 2, name: 'Back-Lever', description: '', category: 'Calisthenics' },
];

export const HARDCODED_WORKOUTS: IWorkout[] = [
  {
    id: 1,
    name: 'HARDCODED: Calisthenics Routine',
    description: 'A skill & rings based routine',
    category: 'Calisthenics',
    exercises: HARDCODED_EXERCISES.filter((e) => e.category === 'Calisthenics'),
  },
  {
    id: 2,
    name: 'HARDCODED: Strength Routine',
    description: 'A strength based routine',
    category: 'Strength',
    exercises: HARDCODED_EXERCISES.filter((e) => e.category === 'Strength'),
  },
];

export const HARDCODED_ROUTINES: IRoutine[] = [
  {
    id: 1,
    name: 'HARDCODED: Calisthenics Routine',
    description: 'A skill & rings based routine',
    category: 'Calisthenics',
    workouts: HARDCODED_WORKOUTS,
  },
];
