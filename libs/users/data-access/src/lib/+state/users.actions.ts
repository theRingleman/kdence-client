import { createAction, props } from '@ngrx/store';
import { CreateUserDto, UsersEntity } from './users.models';

export const init = createAction(
  '[Users Page] Init',
  props<{ householdId: number }>()
);

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

export const createUser = createAction(
  '[Users/API] Create User',
  props<{ householdId: number; dto: CreateUserDto }>()
);

export const createUserSuccess = createAction(
  '[Users/API] Create User Success',
  props<{ user: UsersEntity }>()
);

export const clearCurrentUser = createAction('[Users/API] Clear Current User');
