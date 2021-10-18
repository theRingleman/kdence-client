import { Action } from '@ngrx/store';

import * as HouseholdsActions from './households.actions';
import { HouseholdsEntity } from './households.models';
import { State, initialState, reducer } from './households.reducer';

describe('Households Reducer', () => {
  const createHouseholdsEntity = (id: string, name = ''): HouseholdsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Households actions', () => {
    it('loadHouseholdsSuccess should return the list of known Households', () => {
      const households = [
        createHouseholdsEntity('PRODUCT-AAA'),
        createHouseholdsEntity('PRODUCT-zzz'),
      ];
      const action = HouseholdsActions.loadHouseholdsSuccess({ households });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
