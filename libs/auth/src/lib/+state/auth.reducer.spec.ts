import { AuthLoaded } from './auth.actions';
import { AuthState, Entity, initialState, reducer } from './auth.reducer';

describe('Auth Reducer', () => {
  const getAuthId = (it: Entity) => it.id;
  const createAuth = (id: string, name = ''): Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Auth actions', () => {
    it('should return the list of known Auth', () => {
      const auth = [createAuth('PRODUCT-AAA'), createAuth('PRODUCT-zzz')];
      const action = new AuthLoaded(auth);
      const result: AuthState = reducer(initialState, action);
      const selId: string = getAuthId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
