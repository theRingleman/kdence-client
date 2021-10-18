import { createAction, props } from '@ngrx/store';
import { HouseholdsEntity } from './households.models';

export const init = createAction('[Households Page] Init');

export const loadHouseholdsSuccess = createAction(
  '[Households/API] Load Households Success',
  props<{ households: HouseholdsEntity[] }>()
);

export const loadHouseholdsFailure = createAction(
  '[Households/API] Load Households Failure',
  props<{ error: any }>()
);

export const loadHousehold = createAction(
  '[Households/API] Load Household',
  props<{ id: number }>()
);

export const loadHouseholdSuccess = createAction(
  '[Households/API] Load Household Success',
  props<{ household: HouseholdsEntity }>()
);

export const loadHouseholdFailure = createAction(
  '[Households/API] Load Household Failure',
  props<{ error: any }>()
);
