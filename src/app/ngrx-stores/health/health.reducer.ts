import { createReducer, on } from '@ngrx/store';
import { HealthState } from "./health.model";
import * as HealthActions from './health.actions';

/**
 * Health Initial State
 */
const inititalState: HealthState = {
  systemHealth: null
}


export const healthReducer = createReducer(
  inititalState,

  on(HealthActions.getSystemHealth, (state) => {
    return {
      ...state,
    }
  }),
)
