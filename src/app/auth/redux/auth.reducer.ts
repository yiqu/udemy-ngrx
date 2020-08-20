import { AuthState } from "./auth.model";
import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';


/**
 * Auth Initial State
 */
const inititalState: AuthState = {
  user: null
}


export const authReducer = createReducer(
  inititalState,

  on(AuthActions.authLoginStart, (state, {}) => {
    return {
      ...state,
    }
  }),

  on(AuthActions.authLoginSuccess, (state, {user}) => {
    return {
      ...state,
      user: user
    }
  }),
)
