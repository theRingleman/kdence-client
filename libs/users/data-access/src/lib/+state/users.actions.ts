import { createAction, props } from '@ngrx/store';
import { UsersEntity } from './users.models';

export const init = createAction('[Users Page] Init');

export const loadUser = createAction('[Users/API] Load Users');

export const loadCurrentUserSuccess = createAction(
  '[Users/API] Load User Success',
  props<{ currentUser: UsersEntity }>()
);

export const loadUsersSuccess = createAction(
  '[Users/API] Load Users Success',
  props<{ users: UsersEntity[] }>()
);

export const loadUsersFailure = createAction(
  '[Users/API] Load Users Failure',
  props<{ error: any }>()
);

export const userLoggedIn = createAction('[Users/API] User Logged In');
export const login = createAction(
  '[Users/API] Login',
  props<{ email: string; password: string }>()
);
export const userLoggedOut = createAction('[Users/API] User Logged Out');
