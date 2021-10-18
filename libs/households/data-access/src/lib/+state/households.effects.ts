import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as HouseholdsActions from './households.actions';
import * as HouseholdsFeature from './households.reducer';

@Injectable()
export class HouseholdsEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HouseholdsActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return HouseholdsActions.loadHouseholdsSuccess({ households: [] });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return HouseholdsActions.loadHouseholdsFailure({ error });
        },
      })
    )
  );

  constructor(private readonly actions$: Actions) {}
}
