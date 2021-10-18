import { HouseholdsEntity } from './households.models';
import {
  householdsAdapter,
  HouseholdsPartialState,
  initialState,
} from './households.reducer';
import * as HouseholdsSelectors from './households.selectors';

describe('Households Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getHouseholdsId = (it: HouseholdsEntity) => it.id;
  const createHouseholdsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as HouseholdsEntity);

  let state: HouseholdsPartialState;

  beforeEach(() => {
    state = {
      households: householdsAdapter.setAll(
        [
          createHouseholdsEntity('PRODUCT-AAA'),
          createHouseholdsEntity('PRODUCT-BBB'),
          createHouseholdsEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Households Selectors', () => {
    it('getAllHouseholds() should return the list of Households', () => {
      const results = HouseholdsSelectors.getAllHouseholds(state);
      const selId = getHouseholdsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = HouseholdsSelectors.getSelected(state) as HouseholdsEntity;
      const selId = getHouseholdsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getHouseholdsLoaded() should return the current "loaded" status', () => {
      const result = HouseholdsSelectors.getHouseholdsLoaded(state);

      expect(result).toBe(true);
    });

    it('getHouseholdsError() should return the current "error" state', () => {
      const result = HouseholdsSelectors.getHouseholdsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
