import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as UsersActions from './users.actions';
import { UsersEntity } from './users.models';

export const USERS_FEATURE_KEY = 'users';

export interface State extends EntityState<UsersEntity> {
  selectedId?: string | number; // which Users record has been selected
  loaded: boolean; // has the User been loaded
  error?: string | null; // last known error (if any)
  currentUser: UsersEntity | null;
}

export interface UsersPartialState {
  readonly [USERS_FEATURE_KEY]: State;
}

export const usersAdapter: EntityAdapter<UsersEntity> =
  createEntityAdapter<UsersEntity>();

export const initialState: State = usersAdapter.getInitialState({
  // set initial required properties
  loaded: false,
  currentUser: null,
});

const usersReducer = createReducer(
  initialState,
  on(UsersActions.loadHouseholdUsers, (state) => ({
    ...state,
    loaded: true,
    error: null,
  })),
  on(UsersActions.loadUsersSuccess, (state, { users }) =>
    usersAdapter.setAll(users, { ...state, loaded: true })
  ),
  on(UsersActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(UsersActions.loadCurrentUserSuccess, (s, { currentUser }) => ({
    ...s,
    currentUser,
  })),
  on(UsersActions.clearCurrentUser, (s) => ({ ...s, currentUser: null }))
);

export function reducer(state: State | undefined, action: Action) {
  return usersReducer(state, action);
}
