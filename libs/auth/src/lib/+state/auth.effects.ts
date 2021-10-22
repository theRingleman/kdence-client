import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';

import {
  AuthActionTypes,
  Login,
  LoginSuccess,
  LoginFailure,
} from './auth.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UsersFacade, UsersService } from '@kdence-client/users/data-access';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionTypes.Login),
      switchMap((action: Login) =>
        this.usersService
          .login(action.payload.email, action.payload.password)
          .pipe(
            map(() => {
              this.usersFacade.loadUser();
              return new LoginSuccess();
            }),
            catchError((error) => of(new LoginFailure(error)))
          )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private usersService: UsersService,
    private router: Router,
    private usersFacade: UsersFacade
  ) {}
}
