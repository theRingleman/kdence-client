import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';

import {
  AuthActionTypes,
  Login,
  LoginSuccess,
  LoginFailure,
} from './auth.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UsersService } from '@kdence-client/users/data-access';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionTypes.Login),
      switchMap((action: Login) =>
        this.usersService
          .login(action.payload.email, action.payload.password)
          .pipe(
            map(() => new LoginSuccess()),
            catchError((error) => of(new LoginFailure(error)))
          )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private usersService: UsersService
  ) {}
}
