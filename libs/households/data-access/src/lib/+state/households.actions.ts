import { createAction, props } from '@ngrx/store';
import { CreateHouseholdDto, HouseholdsEntity } from './households.models';
import { SignupInput } from '@kdence-client/core/data-access';

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

export const createHousehold = createAction(
  '[Households/API] Create Household',
  props<{ dto: SignupInput }>()
);

export const createHouseholdSuccess = createAction(
  '[Households/API] Create Household Success',
  props<{ household: HouseholdsEntity }>()
);

export const createHouseholdFailure = createAction(
  '[Households/API] Create Household Failure',
  props<{ error: any }>()
);
