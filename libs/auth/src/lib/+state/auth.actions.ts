import { Action } from '@ngrx/store';
import { LoginInput } from '@kdence-client/users/data-access';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] LoginSuccess',
  LoginFailure = '[Auth] LoginFailure',
  Logout = '[Auth] Logout',
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;

  constructor(public payload: LoginInput) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;
}

export class LoginFailure implements Action {
  readonly type = AuthActionTypes.LoginFailure;
  constructor(public payload: any) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
}

export type AuthAction = Login | LoginSuccess | LoginFailure | Logout;

export const fromAuthActions = {
  Login,
  LoginSuccess,
  LoginFailure,
  Logout,
};
