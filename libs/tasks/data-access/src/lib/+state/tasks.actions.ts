import { createAction, props } from '@ngrx/store';
import { TasksEntity } from '@kdence-client/tasks/models';

export const init = createAction('[Tasks Page] Init');

export const loadTasksSuccess = createAction(
  '[Tasks/API] Load Tasks Success',
  props<{ tasks: TasksEntity[] }>()
);

export const loadTasksFailure = createAction(
  '[Tasks/API] Load Tasks Failure',
  props<{ error: any }>()
);

export const loadTasksForGoal = createAction(
  '[Tasks/API] Load Tasks Success',
  props<{ goalId: number }>()
);

export const loadTasksForGoalSuccess = createAction(
  '[Tasks/API] Load Tasks Success',
  props<{ tasks: TasksEntity[] }>()
);

export const loadTasksForGoalFailure = createAction(
  '[Tasks/API] Load Tasks For Goal Failure',
  props<{ error: any }>()
);
