import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as UsersActions from './users.actions';
import * as UsersFeature from './users.reducer';
import * as UsersSelectors from './users.selectors';

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

  constructor(private readonly store: Store) {}

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }

  logUserIn() {
    this.store.dispatch(UsersActions.userLoggedIn());
  }

  logUserOut() {
    this.store.dispatch(UsersActions.userLoggedOut());
  }
}
