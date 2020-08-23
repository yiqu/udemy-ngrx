import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { FireUser } from '../../shared/models/user.model';
import * as fromHealthReducer from '../health/health.reducer';
import { HealthState } from '../health/health.model';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { environment } from 'src/environments/environment';


/**
 * App Overall State
 */
export interface AppState {
  health: HealthState,
  myRouter: RouterReducerState
}

export const appReducers: ActionReducerMap<AppState> = {
  health: fromHealthReducer.healthReducer,
  myRouter: routerReducer
}


/**
 * meta reducer runs before any action
 */
export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [logger] : [];


export function logger(reducer:ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log("state before: ", state);
    console.log("action", action);

    return reducer(state, action);
  }
}
