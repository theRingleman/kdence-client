import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as CoreActions from './core.actions';
import * as CoreFeature from './core.reducer';

@Injectable()
export class CoreEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoreActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return CoreActions.loadCoreSuccess({ core: [] });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return CoreActions.loadCoreFailure({ error });
        },
      })
    )
  );

  constructor(private readonly actions$: Actions) {}
}
