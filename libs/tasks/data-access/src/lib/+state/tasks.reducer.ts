import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as TasksActions from './tasks.actions';
import { TasksEntity } from '@kdence-client/tasks/models';

export const TASKS_FEATURE_KEY = 'tasks';
export interface GoalTasks {
  [id: number]: TasksEntity[];
}
export interface State extends EntityState<TasksEntity> {
  selectedId?: string | number; // which Tasks record has been selected
  loaded: boolean; // has the Tasks list been loaded
  error?: string | null; // last known error (if any)
  goalTasks: GoalTasks;
  selectedGoalId?: number;
  fetchedTask: TasksEntity | null;
  householdsTasks: TasksEntity[];
}

export interface TasksPartialState {
  readonly [TASKS_FEATURE_KEY]: State;
}

export const tasksAdapter: EntityAdapter<TasksEntity> =
  createEntityAdapter<TasksEntity>();

export const initialState: State = tasksAdapter.getInitialState({
  // set initial required properties
  loaded: false,
  goalTasks: {},
  fetchedTask: null,
  householdsTasks: [],
});

const tasksReducer = createReducer(
  initialState,
  on(TasksActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(TasksActions.loadTasksSuccess, (state, { tasks }) =>
    tasksAdapter.setAll(tasks, { ...state, loaded: true })
  ),
  on(TasksActions.loadTasksFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(TasksActions.loadTasksForGoalSuccess, (state, { goalId, tasks }) => ({
    ...state,
    goalTasks: { ...state.goalTasks, [goalId]: tasks },
  })),
  on(TasksActions.setSelectedGoalId, (state, { goalId }) => ({
    ...state,
    selectedGoalId: goalId,
  })),
  on(TasksActions.fetchTaskSuccess, (state, { task }) => ({
    ...state,
    fetchedTask: { ...task },
  })),
  on(TasksActions.fetchAllTasksSuccess, (state, { tasks }) => ({
    ...state,
    householdsTasks: [...tasks],
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return tasksReducer(state, action);
}
