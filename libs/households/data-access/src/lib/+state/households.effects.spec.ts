import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as HouseholdsActions from './households.actions';
import { HouseholdsEffects } from './households.effects';

describe('HouseholdsEffects', () => {
  let actions: Observable<Action>;
  let effects: HouseholdsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        HouseholdsEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(HouseholdsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: HouseholdsActions.init() });

      const expected = hot('-a-|', {
        a: HouseholdsActions.loadHouseholdsSuccess({ households: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
