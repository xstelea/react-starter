import { Auth0UserProfile } from 'auth0-js';
import { AuthAction, AuthActionTypes } from '../actions/auth.actions';

export interface AuthState {
  isLoading: boolean;
  data: Auth0UserProfile;
}

const initialState: AuthState = {
  isLoading: false,
  data: undefined,
};

export const authReducer = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case AuthActionTypes.LOGOUT:
      return initialState;

    case AuthActionTypes.GET_USER:
      return { ...state, data: undefined };

    case AuthActionTypes.GET_USER_SUCCESS:
      return { ...state, data: action.payload };

    default:
      return state;
  }
};
