import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as GoalsActions from './goals.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { GoalsService } from '../services/goals.service';
import { of } from 'rxjs';

@Injectable()
export class GoalsEffects {
  constructor(
    private readonly actions$: Actions,
    private goalsService: GoalsService
  ) {}

  loadActiveGoals$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GoalsActions.loadActiveGoals),
      switchMap(({ householdId }) =>
        this.goalsService.fetchActiveGoals(householdId).pipe(
          map((goals) => GoalsActions.loadActiveGoalsSuccess({ goals })),
          catchError((error) =>
            of(GoalsActions.loadActiveGoalsFailure({ error }))
          )
        )
      )
    )
  );

  loadCompletedGoals$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GoalsActions.loadCompletedGoals),
      switchMap(({ householdId }) =>
        this.goalsService.fetchCompletedGoals(householdId).pipe(
          map((goals) => GoalsActions.loadCompletedGoalsSuccess({ goals })),
          catchError((error) =>
            of(GoalsActions.loadCompletedGoalsFailure({ error }))
          )
        )
      )
    )
  );

  createGoal$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GoalsActions.createGoal),
      switchMap(({ householdId, goalDto }) =>
        this.goalsService.createGoal(householdId, goalDto).pipe(
          map((goal) => GoalsActions.createGoalSuccess({ goal })),
          catchError((error) => of(GoalsActions.createGoalFailure({ error })))
        )
      )
    )
  );
}
