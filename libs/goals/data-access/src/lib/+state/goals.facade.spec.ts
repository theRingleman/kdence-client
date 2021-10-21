import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as GoalsActions from './goals.actions';
import { GoalsEffects } from './goals.effects';
import { GoalsFacade } from './goals.facade';
import {
  GOALS_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './goals.reducer';
import * as GoalsSelectors from './goals.selectors';
import { GoalsEntity } from '@kdence-client/goals/models';

interface TestSchema {
  goals: State;
}

describe('GoalsFacade', () => {
  let facade: GoalsFacade;
  let store: Store<TestSchema>;
  const createGoalsEntity = (id: number, name = ''): GoalsEntity => ({
    id,
    name: name || `name-${id}`,
    item: '',
    completionValue: 10000,
    earnedValue: 1000,
    fulfilled: false,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(GOALS_FEATURE_KEY, reducer),
          EffectsModule.forFeature([GoalsEffects]),
        ],
        providers: [GoalsFacade],
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
      facade = TestBed.inject(GoalsFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allGoals$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allGoals$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadGoalsSuccess` to manually update list
     */
    it('allGoals$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allGoals$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        GoalsActions.loadGoalsSuccess({
          goals: [createGoalsEntity(1), createGoalsEntity(2)],
        })
      );

      list = await readFirst(facade.allGoals$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
