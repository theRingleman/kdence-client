import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as UsersActions from './users.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UsersService } from '../services/users.service';
import { of } from 'rxjs';

@Injectable()
export class UsersEffects {
  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.loadUser),
      switchMap(() =>
        this.usersService.getUser().pipe(
          map((user) =>
            UsersActions.loadCurrentUserSuccess({ currentUser: user })
          ),
          catchError((error) => of(UsersActions.loadUsersFailure({ error })))
        )
      )
    )
  );

  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.createUser),
      switchMap(({ householdId, dto }) =>
        this.usersService
          .createUser(householdId, dto)
          .pipe(map((user) => UsersActions.createUserSuccess({ user })))
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private usersService: UsersService
  ) {}
}
