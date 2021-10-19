import { AuthAction, AuthActionTypes } from './auth.actions';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthState {
  error?: any; // last none error (if any)
  loggedIn: boolean;
}

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: AuthState;
}

export const initialState: AuthState = {
  loggedIn: false,
};

export function reducer(
  state: AuthState = initialState,
  action: AuthAction
): AuthState {
  switch (action.type) {
    case AuthActionTypes.LoginSuccess: {
      state = { ...state, loggedIn: true };
      break;
    }
    case AuthActionTypes.LoginFailure: {
      state = { ...state, loggedIn: false, error: action.payload };
      break;
    }
  }
  return state;
}
