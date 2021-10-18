import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as UsersActions from './users.actions';
import * as UsersSelectors from './users.selectors';
import { JwtService } from '@kdence-client/core/data-access';

@Injectable()
export class UsersFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(UsersSelectors.getUsersLoaded));
  allUsers$ = this.store.pipe(select(UsersSelectors.getAllUsers));
  selectedUsers$ = this.store.pipe(select(UsersSelectors.getSelected));
  isLoggedIn$ = this.store.pipe(select(UsersSelectors.isUserLoggedIn));
  currentUser$ = this.store.pipe(select(UsersSelectors.getCurrentUser));

  constructor(private readonly store: Store, private jwtService: JwtService) {}

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }

  isLoggedIn() {
    if (this.jwtService.getToken() !== '') {
      this.store.dispatch(UsersActions.userLoggedIn());
      this.store.dispatch(UsersActions.loadUser());
    }
  }

  login(email: string, password: string) {
    this.store.dispatch(UsersActions.login({ email, password }));
  }

  loadUser() {
    this.store.dispatch(UsersActions.loadUser());
  }

  logUserOut() {
    this.store.dispatch(UsersActions.userLoggedOut());
  }
}
