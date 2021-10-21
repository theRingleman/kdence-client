import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GOALS_FEATURE_KEY, State, goalsAdapter } from './goals.reducer';

// Lookup the 'Goals' feature state managed by NgRx
export const getGoalsState = createFeatureSelector<State>(GOALS_FEATURE_KEY);

const { selectAll, selectEntities } = goalsAdapter.getSelectors();

export const getGoalsLoaded = createSelector(
  getGoalsState,
  (state: State) => state.loaded
);

export const getGoalsError = createSelector(
  getGoalsState,
  (state: State) => state.error
);

export const getAllGoals = createSelector(getGoalsState, (state: State) =>
  selectAll(state)
);

export const getGoalsEntities = createSelector(getGoalsState, (state: State) =>
  selectEntities(state)
);

export const getSelectedId = createSelector(
  getGoalsState,
  (state: State) => state.selectedId
);

export const getCompletedGoals = createSelector(
  getGoalsState,
  (s) => s.completedGoals.goals
);

export const getActiveGoals = createSelector(
  getGoalsState,
  (s) => s.activeGoals.goals
);

export const isActiveGoalsLoaded = createSelector(
  getGoalsState,
  (s) => s.activeGoals.loaded
);

export const isCompletedGoalsLoaded = createSelector(
  getGoalsState,
  (s) => s.completedGoals.loaded
);

export const getSelected = createSelector(
  getGoalsEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
