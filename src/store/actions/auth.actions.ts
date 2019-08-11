import { Auth0Error, Auth0ParseHashError, Auth0UserProfile } from 'auth0-js';
import { History } from 'history';

export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGOUT = '[Auth] Logout',

  CHECK_SESSION = '[Auth] Check Session',
  CHECK_SESSION_SUCCESS = '[Auth] Check Session Success',
  CHECK_SESSION_FAIL = '[Auth] Check Session Fail',

  GET_USER = '[Auth] Get User',
  GET_USER_SUCCESS = '[Auth] Get User Success',
  GET_USER_FAIL = '[Auth] Get User Fail',

  HANDLE_CALLBACK = '[Auth] Handle Callback',
  HANDLE_CALLBACK_SUCCESS = '[Auth] Handle Callback Success',
  HANDLE_CALLBACK_FAIL = '[Auth] Handle Callback Fail',
}

export class LoginAction {
  readonly type = AuthActionTypes.LOGIN;
  constructor(public payload: string) {
    Object.assign(this, { payload });
  }
}

export class LogoutAction {
  readonly type = AuthActionTypes.LOGOUT;
  constructor(public payload: void = undefined) {
    Object.assign(this, { payload });
  }
}

export class CheckSessionAction {
  readonly type = AuthActionTypes.CHECK_SESSION;
  constructor(public payload: void = undefined) {
    Object.assign(this, { payload });
  }
}

export class CheckSessionSuccessAction {
  readonly type = AuthActionTypes.CHECK_SESSION_SUCCESS;
  constructor(public payload: void = undefined) {
    Object.assign(this, { payload });
  }
}

export class CheckSessionFailAction {
  readonly type = AuthActionTypes.CHECK_SESSION_FAIL;
  constructor(public payload: Auth0ParseHashError) {
    Object.assign(this, { payload });
  }
}

export class GetUserAction {
  readonly type = AuthActionTypes.GET_USER;
  constructor(public payload: void = undefined) {
    Object.assign(this, { payload });
  }
}

export class GetUserSuccessAction {
  readonly type = AuthActionTypes.GET_USER_SUCCESS;
  constructor(public payload: Auth0UserProfile) {
    Object.assign(this, { payload });
  }
}

export class GetUserFailAction {
  readonly type = AuthActionTypes.GET_USER_FAIL;
  constructor(public payload: Auth0Error) {
    Object.assign(this, { payload });
  }
}

export class HandleCallbackAction {
  readonly type = AuthActionTypes.HANDLE_CALLBACK;
  constructor(public payload: History) {
    Object.assign(this, { payload });
  }
}

export class HandleCallbackSuccessAction {
  readonly type = AuthActionTypes.HANDLE_CALLBACK_SUCCESS;
  constructor(public payload: void = undefined) {
    Object.assign(this, { payload });
  }
}

export class HandleCallbackFailAction {
  readonly type = AuthActionTypes.HANDLE_CALLBACK_FAIL;
  constructor(public payload: any) {
    Object.assign(this, { payload });
  }
}

export type AuthAction =
  | LoginAction
  | LogoutAction
  | GetUserAction
  | GetUserSuccessAction
  | GetUserFailAction
  | HandleCallbackAction
  | HandleCallbackSuccessAction
  | HandleCallbackFailAction;
