import { createAction, props } from '@ngrx/store';
import { CreateGoalDto, GoalsEntity } from '@kdence-client/goals/models';

export const loadCompletedGoals = createAction(
  '[Goals/API] Load Completed Goals',
  props<{ householdId: number }>()
);

export const loadActiveGoals = createAction(
  '[Goals/API] Load Active Goals',
  props<{ householdId: number }>()
);

export const loadGoalsSuccess = createAction(
  '[Goals/API] Load Goals Success',
  props<{ goals: GoalsEntity[] }>()
);

export const loadGoalsFailure = createAction(
  '[Goals/API] Load Goals Failure',
  props<{ error: any }>()
);

export const createGoal = createAction(
  '[Goals/API] Create Goal',
  props<{ householdId: number; goalDto: CreateGoalDto }>()
);

export const loadGoal = createAction(
  '[Goals/API] Load Goal',
  props<{ householdId: number; goalId: number }>()
);

export const createGoalSuccess = createAction(
  '[Goals/API] Create Goal Success',
  props<{ goal: GoalsEntity }>()
);

export const createGoalFailure = createAction(
  '[Goals/API] Create Goal Failure',
  props<{ error: any }>()
);

export const loadActiveGoalsSuccess = createAction(
  '[Goals/API] Load Active Goals Success',
  props<{ goals: GoalsEntity[] }>()
);

export const loadActiveGoalsFailure = createAction(
  '[Goals/API] Load Active Goals Failure',
  props<{ error: any }>()
);

export const loadCompletedGoalsSuccess = createAction(
  '[Goals/API] Load Completed Goals Success',
  props<{ goals: GoalsEntity[] }>()
);

export const loadCompletedGoalsFailure = createAction(
  '[Goals/API] Load Completed Goals Failure',
  props<{ error: any }>()
);
