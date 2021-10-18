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
