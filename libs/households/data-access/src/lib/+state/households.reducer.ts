import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as HouseholdsActions from './households.actions';
import { HouseholdsEntity } from './households.models';

export const HOUSEHOLDS_FEATURE_KEY = 'households';

export interface State extends EntityState<HouseholdsEntity> {
  selectedId?: string | number; // which Households record has been selected
  loaded: boolean; // has the Households list been loaded
  error?: string | null; // last known error (if any)
}

export interface HouseholdsPartialState {
  readonly [HOUSEHOLDS_FEATURE_KEY]: State;
}

export const householdsAdapter: EntityAdapter<HouseholdsEntity> =
  createEntityAdapter<HouseholdsEntity>();

export const initialState: State = householdsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const householdsReducer = createReducer(
  initialState,
  on(HouseholdsActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(HouseholdsActions.loadHouseholdsSuccess, (state, { households }) =>
    householdsAdapter.setAll(households, { ...state, loaded: true })
  ),
  on(HouseholdsActions.loadHouseholdsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return householdsReducer(state, action);
}
