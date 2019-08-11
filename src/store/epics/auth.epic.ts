import { ActionsObservable } from 'redux-observable';
import { from } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  checkSession,
  getUser,
  handleCallback,
  login,
  logout,
} from '../../services';
import {
  AuthAction,
  AuthActionTypes,
  CheckSessionAction,
  CheckSessionFailAction,
  CheckSessionSuccessAction,
  GetUserAction,
  GetUserFailAction,
  GetUserSuccessAction,
  HandleCallbackAction,
  HandleCallbackFailAction,
  HandleCallbackSuccessAction,
  LoginAction,
} from '../actions';

export const userInfoEpic = (action$: ActionsObservable<GetUserAction>) =>
  action$.ofType(AuthActionTypes.GET_USER).pipe(
    switchMap(() =>
      from(getUser()).pipe(
        map(userInfo => new GetUserSuccessAction(userInfo)),
        catchError(err => [new GetUserFailAction(err)]),
      ),
    ),
  );

export const checkSessionEpic = (
  action$: ActionsObservable<CheckSessionAction>,
) =>
  action$.ofType(AuthActionTypes.CHECK_SESSION).pipe(
    switchMap(() => {
      return from(checkSession()).pipe(
        switchMap(isAuth =>
          isAuth
            ? [new CheckSessionSuccessAction(), new GetUserAction()]
            : [new CheckSessionSuccessAction()],
        ),
      );
    }),
    catchError(err => [new CheckSessionFailAction(err)]),
  );

export const handleCallbackEpic = (
  action$: ActionsObservable<HandleCallbackAction>,
) =>
  action$.ofType(AuthActionTypes.HANDLE_CALLBACK).pipe(
    switchMap(({ payload: history }) => {
      return from(handleCallback()).pipe(
        switchMap(({ appState: { path } }) => {
          history.push(path);
          return [new HandleCallbackSuccessAction()];
        }),
        catchError(err => {
          history.push('/');
          return [new HandleCallbackFailAction(err)];
        }),
      );
    }),
  );

export const loginEpic = (action$: ActionsObservable<LoginAction>) =>
  action$
    .ofType(AuthActionTypes.LOGIN)
    .pipe(switchMap(({ payload: path }) => from(login(path))));

export const logoutEpic = (action$: ActionsObservable<AuthAction>) =>
  action$
    .ofType(AuthActionTypes.LOGOUT)
    .pipe(switchMap(() => from(logout()).pipe(switchMap(() => []))));
