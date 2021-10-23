import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { AuthPartialState } from './auth.reducer';
import { authQuery, getLoggedIn } from './auth.selectors';
import { Login, LoginFailure, LoginSuccess, Logout } from './auth.actions';
import {
  LoginInput,
  UsersFacade,
  UsersService,
} from '@kdence-client/users/data-access';
import { JwtService } from '@kdence-client/core/data-access';
import { filter, take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class AuthFacade {
  loggedIn$ = this.store.select(getLoggedIn);
  error$ = this.store
    .pipe(select(authQuery.getError), filter(Boolean))
    .subscribe((error) => {
      if (error instanceof HttpErrorResponse) {
        this.snackBar.open(
          'Invalid username or password, please try again.',
          'Dismiss'
        );
      } else {
        this.snackBar.open('Please login.', 'Dismiss', { duration: 5000 });
      }
      this.router.navigate(['auth/login']);
    });

  constructor(
    private readonly store: Store<AuthPartialState>,
    private jwtService: JwtService,
    private usersService: UsersService,
    private usersFacade: UsersFacade,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  login(dto: LoginInput) {
    this.store.dispatch(new Login(dto));
  }

  logout() {
    this.jwtService.destroyToken();
    this.store.dispatch(new Logout());
    this.router.navigate(['/auth/login']);
  }

  isLoggedIn() {
    this.jwtService.getToken() !== ''
      ? this.attemptLogin()
      : this.loginFailed(new Error('Please login again.'));
  }

  private attemptLogin(): void {
    this.usersService
      .getUser()
      .pipe(take(1))
      .subscribe(
        (user) => {
          this.store.dispatch(new LoginSuccess());
          this.usersFacade.setCurrentUser(user);
        },
        (error) => this.loginFailed(error)
      );
  }

  private loginFailed(error: any): void {
    this.store.dispatch(new LoginFailure(error));
  }
}
