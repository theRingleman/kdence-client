import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as HouseholdsActions from './households.actions';
import { HouseholdsService } from '../services/households.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UsersFacade } from '@kdence-client/users/data-access';
import { of } from 'rxjs';

@Injectable()
export class HouseholdsEffects {
  createHousehold$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HouseholdsActions.createHousehold),
      switchMap(({ dto }) =>
        this.householdsService.createHousehold({ name: dto.lastName }).pipe(
          map((household) => {
            this.usersFacade.createUser(household.id, dto);
            return HouseholdsActions.loadHouseholdSuccess({ household });
          })
        )
      )
    )
  );

  loadHousehold$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HouseholdsActions.loadHousehold),
      switchMap(({ id }) =>
        this.householdsService.getHousehold(id).pipe(
          map((household) =>
            HouseholdsActions.loadHouseholdSuccess({ household })
          ),
          catchError((error) =>
            of(HouseholdsActions.loadHouseholdFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private householdsService: HouseholdsService,
    private usersFacade: UsersFacade
  ) {}
}
