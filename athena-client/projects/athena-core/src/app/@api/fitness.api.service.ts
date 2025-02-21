import { IExercise, IExerciseDBModel, IRoutine, IWorkout } from "@Models/trainer.types";
import { Injectable } from "@angular/core";
import { APIService } from "./api.service";
import { ApiControllerEndpointBase } from "@App/@core/@constants/api.endpoints";

@Injectable({ providedIn: 'root' })
export class FitnessApiService {
  private _exerciseUrl = `${ApiControllerEndpointBase.Fitness}/exercises`;
  private _workoutsUrl = `${ApiControllerEndpointBase.Fitness}/workouts`;
  private _routinesUrl = `${ApiControllerEndpointBase.Fitness}/routines`;

  constructor(
    private _apiService: APIService
  ) {
  }

  getAllExercises(): Promise<IExercise[]> {
    return this._apiService.get<IExerciseDBModel[]>(this._exerciseUrl).then(exercises => {
      const mappedExercises: IExercise[] = exercises.map(e => {
        const exercise: IExercise = {
          id: e.id,
          name: e.name,
          description: e.description,
          category: e.category,
          variant: e.variant,
          primaryMuscle: e.primary_muscle,
          secondaryMuscle: e.secondary_muscle,
          weighted: e.weighted
        };
        return exercise;
      });
      return Promise.resolve(mappedExercises);
    }).catch(err => {
      return Promise.reject('Failed to obtain exercises via API call')
    })
  }

  getAllWorkouts(): Promise<IWorkout[]> {
    return this._apiService.get(this._workoutsUrl);
  }

  getAllRoutines(): Promise<IRoutine[]> {
    return this._apiService.get(this._routinesUrl);
  }

  postExercise(exercise: IExercise): Promise<IExercise> {
    return this._apiService.post(this._exerciseUrl, exercise)
  }
}
