import { AuthAction, AuthActionTypes } from './auth.actions';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthState {
  loggedIn: boolean;
  error?: any; // last none error (if any)
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
    case AuthActionTypes.Logout: {
      state = { ...state, loggedIn: false };
      break;
    }
  }
  return state;
}
