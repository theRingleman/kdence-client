import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as GoalsActions from './goals.actions';
import * as GoalsFeature from './goals.reducer';
import * as GoalsSelectors from './goals.selectors';
import { CreateGoalDto, GoalsEntity } from '@kdence-client/goals/models';
import { filter, switchMap } from 'rxjs/operators';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GoalsFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(GoalsSelectors.getGoalsLoaded));
  allGoals$ = this.store.pipe(select(GoalsSelectors.getAllGoals));
  selectedGoals$ = this.store.pipe(select(GoalsSelectors.getSelected));
  completedGoals$ = this.store.pipe(select(GoalsSelectors.getCompletedGoals));
  activeGoals$ = this.store.pipe(select(GoalsSelectors.getActiveGoals));
  isActiveGoalsLoaded$ = this.store.pipe(
    select(GoalsSelectors.isActiveGoalsLoaded)
  );

  constructor(private readonly store: Store) {}

  createGoal(householdId: number, goalDto: CreateGoalDto) {
    this.store.dispatch(GoalsActions.createGoal({ householdId, goalDto }));
  }

  loadActiveGoals(householdId: number) {
    this.store.dispatch(GoalsActions.loadActiveGoals({ householdId }));
  }

  loadCompletedGoals(householdId: number) {
    this.store.dispatch(GoalsActions.loadCompletedGoals({ householdId }));
  }

  getGoal(id: number): GoalsEntity {
    let goal: GoalsEntity | undefined;
    this.activeGoals$
      .pipe(
        switchMap((goals) => from(goals)),
        filter((goal) => goal.id === id)
      )
      .subscribe((g) => (goal = g));
    if (!goal) {
      this.completedGoals$
        .pipe(
          switchMap((goals) => from(goals)),
          filter((goal) => goal.id === id)
        )
        .subscribe((goalEntity) => (goal = goalEntity));
    }
    return goal!;
  }

  selectActiveGoal(id: number): Observable<GoalsEntity> {
    return this.activeGoals$.pipe(
      switchMap((goals) => from(goals)),
      filter((goal) => goal.id === id)
    );
  }
}
