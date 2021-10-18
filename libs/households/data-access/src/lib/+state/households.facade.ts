import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as HouseholdsActions from './households.actions';
import * as HouseholdsFeature from './households.reducer';
import * as HouseholdsSelectors from './households.selectors';

@Injectable()
export class HouseholdsFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(HouseholdsSelectors.getHouseholdsLoaded));
  allHouseholds$ = this.store.pipe(
    select(HouseholdsSelectors.getAllHouseholds)
  );
  selectedHouseholds$ = this.store.pipe(
    select(HouseholdsSelectors.getSelected)
  );

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(HouseholdsActions.init());
  }
}
