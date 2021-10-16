import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as CoreActions from './core.actions';
import * as CoreFeature from './core.reducer';
import * as CoreSelectors from './core.selectors';

@Injectable()
export class CoreFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(CoreSelectors.getCoreLoaded));
  allCore$ = this.store.pipe(select(CoreSelectors.getAllCore));
  selectedCore$ = this.store.pipe(select(CoreSelectors.getSelected));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(CoreActions.init());
  }
}
