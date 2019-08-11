import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import { authReducer, AuthState } from './auth.reducer';

export interface State {
  auth: AuthState;
}

export const reducers = combineReducers({
  auth: authReducer,
});

const authState = (state: State) => state.auth;
export const getAuth = createSelector(
  authState,
  state => state.data,
);
export const getIsLoggedIn = createSelector(
  authState,
  state => !!state.data,
);
