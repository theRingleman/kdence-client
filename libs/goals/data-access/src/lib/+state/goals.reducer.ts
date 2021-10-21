import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as GoalsActions from './goals.actions';
import { GoalsEntity } from '@kdence-client/goals/models';

export const GOALS_FEATURE_KEY = 'goals';

export interface State extends EntityState<GoalsEntity> {
  selectedId?: string | number; // which Goals record has been selected
  loaded: boolean; // has the Goals list been loaded
  error?: string | null; // last known error (if any)
  completedGoals: { goals: GoalsEntity[]; loaded: boolean };
  activeGoals: { goals: GoalsEntity[]; loaded: boolean };
}

export interface GoalsPartialState {
  readonly [GOALS_FEATURE_KEY]: State;
}

export const goalsAdapter: EntityAdapter<GoalsEntity> =
  createEntityAdapter<GoalsEntity>();

export const initialState: State = goalsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
  completedGoals: { goals: [], loaded: false },
  activeGoals: { goals: [], loaded: false },
});

const goalsReducer = createReducer(
  initialState,
  on(GoalsActions.loadGoalsSuccess, (state, { goals }) =>
    goalsAdapter.setAll(goals, { ...state, loaded: true })
  ),
  on(GoalsActions.loadGoalsFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(GoalsActions.loadActiveGoalsSuccess, (state, { goals }) => ({
    ...state,
    activeGoals: {
      goals: [...goals, ...state.activeGoals.goals],
      loaded: true,
    },
  })),
  on(GoalsActions.loadCompletedGoalsSuccess, (state, { goals }) => ({
    ...state,
    completedGoals: {
      goals: [...goals, ...state.completedGoals.goals],
      loaded: true,
    },
  })),
  on(GoalsActions.loadActiveGoalsFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(GoalsActions.loadCompletedGoalsFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(GoalsActions.createGoalSuccess, (state, { goal }) => ({
    ...state,
    activeGoals: { goals: [goal, ...state.activeGoals.goals], loaded: true },
  })),
  on(GoalsActions.createGoalFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return goalsReducer(state, action);
}
