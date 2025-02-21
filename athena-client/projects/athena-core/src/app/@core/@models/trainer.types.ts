import { IViewmodel } from "./generic-models";

export type ExerciseCategory = 'Weightlifting' | 'Strength' | 'Flexibility' | 'Calisthenics' | 'Skill' | 'Cardio' | 'Other';

export interface IExerciseDBModel {
  id: number;
  name: string;
  description: string;
  category: ExerciseCategory;
  variant?: string;
  primary_muscle?: string;
  secondary_muscle?: string;
  weighted?: boolean;
}

export interface IExercise {
  id: number;
  name: string;
  description: string;
  category: ExerciseCategory;
  variant?: string;
  primaryMuscle?: string;
  secondaryMuscle?: string;
  weighted?: boolean;
};

export interface IWorkout {
  id: number | null;
  name: string;
  description: string;
  category: ExerciseCategory | null;
  exercises: IExercise[];
};

export interface IDynamicWorkout extends IWorkout {
}

export interface IRoutine {
  id: number;
  name: string;
  description: string;
  category: ExerciseCategory;
  workouts: IWorkout[];
};


//Dynamic Workout
export type DynamicWorkoutTableColumn = 'name' | 'variant' | 'setCurrent' | 'repCurrent' | 'setTarget' | 'repTarget' | 'addRemove';
export type ExerciseEventType = 'Add' | 'Remove' | 'AddRep' | 'RemoveRep' | 'AddSet' | 'RemoveSet';
export type DynamicWorkoutEventType = 'Save' | 'Reset' | 'Create' | 'Load';
export type ViewmodelState = 'Constructing' | 'Loaded';

export interface IDynamicWorkoutExerciseEvent {
  type: ExerciseEventType;
  exercise: IExercise;
}

export interface IDynamicWorkoutViewmodel extends IViewmodel {
  tableColumns: DynamicWorkoutTableColumn[];
  exerciseLibrary?: IExercise[];
  dynamicWorkout?: IDynamicWorkout;
  isEditing?: boolean;
}
