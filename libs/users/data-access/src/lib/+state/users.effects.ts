import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as UsersActions from './users.actions';
import { map, switchMap } from 'rxjs/operators';
import { UsersService } from '../services/users.service';

@Injectable()
export class UsersEffects {
  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.loadUser),
      switchMap(() =>
        this.usersService
          .getUser()
          .pipe(
            map((user) =>
              UsersActions.loadCurrentUserSuccess({ currentUser: user })
            )
          )
      )
    )
  );

  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.createUser),
      switchMap(({ householdId, dto }) =>
        this.usersService.createUser(householdId, dto).pipe(
          map((user) =>
            UsersActions.loadHouseholdUsers({
              householdId: user!.household!.id,
            })
          )
        )
      )
    )
  );

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.loadHouseholdUsers),
      switchMap(({ householdId }) =>
        this.usersService
          .getHouseholdUsers(householdId)
          .pipe(map((users) => UsersActions.loadUsersSuccess({ users })))
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private usersService: UsersService
  ) {}
}
