import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as UsersActions from './users.actions';
import * as UsersSelectors from './users.selectors';
import { JwtService } from '@kdence-client/core/data-access';
import { CreateUserDto, UsersEntity } from './users.models';
import { filter, take } from 'rxjs/operators';
import { getUsersLoaded } from './users.selectors';

@Injectable()
export class UsersFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(UsersSelectors.getUsersLoaded));
  allUsers$ = this.store.pipe(
    select(UsersSelectors.getAllUsers),
    filter((user) => user !== null)
  );
  selectedUsers$ = this.store.pipe(select(UsersSelectors.getSelected));
  currentUser$ = this.store.pipe(select(UsersSelectors.getCurrentUser));

  constructor(private readonly store: Store, private jwtService: JwtService) {}

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }

  getHouseholdUsers(householdId: number) {
    this.store
      .select(getUsersLoaded)
      .pipe(take(1))
      .subscribe((loaded) => {
        if (!loaded) {
          this.store.dispatch(UsersActions.loadHouseholdUsers({ householdId }));
        }
      });
  }

  loadUser() {
    this.store.dispatch(UsersActions.loadUser());
  }

  createUser(householdId: number, dto: CreateUserDto) {
    this.store.dispatch(UsersActions.createUser({ householdId, dto }));
  }

  setCurrentUser(currentUser: UsersEntity) {
    this.store.dispatch(UsersActions.loadCurrentUserSuccess({ currentUser }));
  }

  clearCurrentUser() {
    this.store.dispatch(UsersActions.clearCurrentUser());
  }
}
