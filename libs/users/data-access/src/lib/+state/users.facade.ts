import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as UsersActions from './users.actions';
import * as UsersSelectors from './users.selectors';
import { JwtService } from '@kdence-client/core/data-access';
import { CreateUserDTO, UsersEntity } from './users.models';

@Injectable()
export class UsersFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(UsersSelectors.getUsersLoaded));
  allUsers$ = this.store.pipe(select(UsersSelectors.getAllUsers));
  selectedUsers$ = this.store.pipe(select(UsersSelectors.getSelected));
  currentUser$ = this.store.pipe(select(UsersSelectors.getCurrentUser));

  constructor(private readonly store: Store, private jwtService: JwtService) {}

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }

  init(householdId: number) {
    this.store.dispatch(UsersActions.init({ householdId }));
  }

  loadUser() {
    this.store.dispatch(UsersActions.loadUser());
  }

  createUser(householdId: number, dto: CreateUserDTO) {
    this.store.dispatch(UsersActions.createUser({ householdId, dto }));
  }

  setCurrentUser(currentUser: UsersEntity) {
    this.store.dispatch(UsersActions.loadCurrentUserSuccess({ currentUser }));
  }
}
