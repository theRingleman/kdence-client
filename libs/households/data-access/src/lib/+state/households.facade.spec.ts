import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as HouseholdsActions from './households.actions';
import { HouseholdsEffects } from './households.effects';
import { HouseholdsFacade } from './households.facade';
import { HouseholdsEntity } from './households.models';
import {
  HOUSEHOLDS_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './households.reducer';
import * as HouseholdsSelectors from './households.selectors';

interface TestSchema {
  households: State;
}

describe('HouseholdsFacade', () => {
  let facade: HouseholdsFacade;
  let store: Store<TestSchema>;
  const createHouseholdsEntity = (id: string, name = ''): HouseholdsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(HOUSEHOLDS_FEATURE_KEY, reducer),
          EffectsModule.forFeature([HouseholdsEffects]),
        ],
        providers: [HouseholdsFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(HouseholdsFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allHouseholds$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allHouseholds$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadHouseholdsSuccess` to manually update list
     */
    it('allHouseholds$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allHouseholds$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        HouseholdsActions.loadHouseholdsSuccess({
          households: [
            createHouseholdsEntity('AAA'),
            createHouseholdsEntity('BBB'),
          ],
        })
      );

      list = await readFirst(facade.allHouseholds$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
