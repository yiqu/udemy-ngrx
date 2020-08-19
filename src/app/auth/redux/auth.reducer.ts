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
  // Login start
  on(AuthActions.authLoginStart, (state, {}) => {
    return {
      ...state,
    }
  }),
)
