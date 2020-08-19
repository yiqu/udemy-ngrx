import { ActionReducerMap } from '@ngrx/store';
import { FireUser } from '../../shared/models/user.model';
import * as fromHealthReducer from '../health/health.reducer';
import { HealthState } from '../health/health.model';
/**
 * App Overall State
 */
export interface AppState {
  health: HealthState
}

export const appReducers: ActionReducerMap<AppState> = {
  health: fromHealthReducer.healthReducer
}
