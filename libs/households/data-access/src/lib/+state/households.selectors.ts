import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  HOUSEHOLDS_FEATURE_KEY,
  State,
  householdsAdapter,
} from './households.reducer';

// Lookup the 'Households' feature state managed by NgRx
export const getHouseholdsState = createFeatureSelector<State>(
  HOUSEHOLDS_FEATURE_KEY
);

const { selectAll, selectEntities } = householdsAdapter.getSelectors();

export const getHouseholdsLoaded = createSelector(
  getHouseholdsState,
  (state: State) => state.loaded
);

export const getHouseholdsError = createSelector(
  getHouseholdsState,
  (state: State) => state.error
);

export const getAllHouseholds = createSelector(
  getHouseholdsState,
  (state: State) => selectAll(state)
);

export const getHouseholdsEntities = createSelector(
  getHouseholdsState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getHouseholdsState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getHouseholdsEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);

export const getCurrentHousehold = createSelector(
  getHouseholdsState,
  (s: State) => s.currentHousehold
);
