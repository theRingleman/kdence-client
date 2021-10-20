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
import { first, take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthFacade {
  loggedIn$ = this.store.select(getLoggedIn);

  constructor(
    private readonly store: Store<AuthPartialState>,
    private jwtService: JwtService,
    private usersService: UsersService,
    private usersFacade: UsersFacade,
    private router: Router
  ) {}

  login(dto: LoginInput) {
    this.store.dispatch(new Login(dto));
  }

  logout() {
    this.jwtService.destroyToken();
    this.store.dispatch(new Logout());
  }

  isLoggedIn() {
    this.jwtService.getToken() !== ''
      ? this.attemptLogin()
      : this.loginFailed({});
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
    this.router.navigate(['login']);
    this.store.dispatch(new LoginFailure(error));
  }
}
