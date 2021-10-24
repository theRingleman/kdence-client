import { createAction, props } from '@ngrx/store';
import { CreateTaskDto, Task, TasksEntity } from '@kdence-client/tasks/models';
import { UsersEntity } from '@kdence-client/users/data-access';

export const init = createAction('[Tasks Page] Init');

export const loadTasksSuccess = createAction(
  '[Tasks/API] Load Tasks Success',
  props<{ tasks: TasksEntity[] }>()
);

export const loadTasksFailure = createAction(
  '[Tasks/API] Load Tasks Failure',
  props<{ error: any }>()
);

export const setSelectedGoalId = createAction(
  '[Tasks/API] Set Selected Goal Id',
  props<{ goalId: number }>()
);

export const loadTasksForGoal = createAction(
  '[Tasks/API] Load Tasks For Goal',
  props<{ goalId: number }>()
);

export const loadTasksForGoalSuccess = createAction(
  '[Tasks/API] Load Tasks For Goal Success',
  props<{ goalId: number; tasks: TasksEntity[] }>()
);

export const loadTasksForGoalFailure = createAction(
  '[Tasks/API] Load Tasks For Goal Failure',
  props<{ error: any }>()
);

export const createTask = createAction(
  '[Tasks/API] Create Task',
  props<{ goalId: number; dto: CreateTaskDto }>()
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
  props<{ goalId: number; task: TasksEntity }>()
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
  props<{ goalId: number; task: TasksEntity }>()
);

export const approveTaskSuccess = createAction(
  '[Tasks/API] Approve Task Success'
);

export const approveTaskFailure = createAction(
  '[Tasks/API] Approve Task Failure',
  props<{ error: any }>()
);

export const fetchTask = createAction(
  '[Tasks/API] Fetch Task',
  props<{ goalId: number; taskId: number }>()
);

export const fetchTaskSuccess = createAction(
  '[Tasks/API] Fetch Task Success',
  props<{ task: TasksEntity }>()
);

export const fetchTaskFailure = createAction(
  '[Tasks/API] Fetch Task Failure',
  props<{ error: any }>()
);

export const deleteTask = createAction(
  '[Tasks/API] Delete Task',
  props<{ goalId: number; taskId: number }>()
);

export const deleteTaskSuccess = createAction(
  '[Tasks/API] Delete Task Success'
);

export const deleteTaskFailure = createAction(
  '[Tasks/API] Delete Task Failure',
  props<{ error: any }>()
);

export const fetchAllTasks = createAction(
  '[Tasks/API] Fetch All Tasks',
  props<{ user: UsersEntity }>()
);

export const fetchAllTasksSuccess = createAction(
  '[Tasks/API] Fetch All Tasks Success',
  props<{ tasks: TasksEntity[] }>()
);

export const fetchAllTasksFailure = createAction(
  '[Tasks/API] Fetch All Tasks Failure',
  props<{ error: any }>()
);
