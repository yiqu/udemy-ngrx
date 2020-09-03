import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { FireUser } from '../../shared/models/user.model';
import * as fromHealthReducer from '../health/health.reducer';
import { HealthState } from '../health/health.model';
import * as fromNgRxRouter from '@ngrx/router-store';
import { environment } from 'src/environments/environment';
import { TweetState } from '../tweets/tweets.model';
import * as fromTweetEntityReducer from '../tweets/tweets-entity.reducer';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Tweet } from 'src/app/shared/models/tweet.model';

/**
 * App Overall State
 */
export interface AppState {
  health: HealthState,
  myRouter: fromNgRxRouter.RouterReducerState,
  tweets: EntityState<Tweet>
}

export const appReducers: ActionReducerMap<AppState> = {
  health: fromHealthReducer.healthReducer,
  myRouter: fromNgRxRouter.routerReducer,
  tweets: fromTweetEntityReducer.tweetsEntityReducer
}


/**
 * meta reducer runs before any action
 */
export const metaReducers: MetaReducer<AppState>[] = environment.production ? [logger] : [];


export function logger(reducer:ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log("state before: ", state);
    console.log("action", action);

    return reducer(state, action);
  }
}
