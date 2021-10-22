import { createAction, props } from '@ngrx/store';
import { CreateTaskDto, TasksEntity } from '@kdence-client/tasks/models';

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
  props<{ goalId: number; householdId: number }>()
);

export const loadTasksForGoalSuccess = createAction(
  '[Tasks/API] Load Tasks Success',
  props<{ goalId: number; tasks: TasksEntity[] }>()
);

export const loadTasksForGoalFailure = createAction(
  '[Tasks/API] Load Tasks For Goal Failure',
  props<{ error: any }>()
);

export const createTask = createAction(
  '[Tasks/API] Create Task',
  props<{ householdId: number; goalId: number; dto: CreateTaskDto }>()
);

export const createTaskSuccess = createAction(
  '[Tasks/API] Create Task Success',
  props<{ goalId: number; task: TasksEntity }>()
);

export const createTaskFailure = createAction(
  '[Tasks/API] Create Task Failure',
  props<{ error: any }>()
);

export const updateTask = createAction(
  '[Tasks/API] Update Task',
  props<{ householdId: number; goalId: number; task: TasksEntity }>()
);

export const updateTaskSuccess = createAction(
  '[Tasks/API] Update Task Success',
  props<{ goalId: number; task: TasksEntity }>()
);

export const updateTaskFailure = createAction(
  '[Tasks/API] Update Task Failure',
  props<{ error: any }>()
);

export const approveTask = createAction(
  '[Tasks/API] Approve Task',
  props<{ householdId: number; goalId: number; taskId: number }>()
);

export const approveTaskSuccess = createAction(
  '[Tasks/API] Approve Task Success'
);

export const approveTaskFailure = createAction(
  '[Tasks/API] Approve Task Failure',
  props<{ error: any }>()
);
