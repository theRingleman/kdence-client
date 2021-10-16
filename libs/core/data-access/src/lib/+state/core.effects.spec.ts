import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as CoreActions from './core.actions';
import { CoreEffects } from './core.effects';

describe('CoreEffects', () => {
  let actions: Observable<Action>;
  let effects: CoreEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        CoreEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(CoreEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: CoreActions.init() });

      const expected = hot('-a-|', {
        a: CoreActions.loadCoreSuccess({ core: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
