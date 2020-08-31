import { createSelector, createReducer, createFeatureSelector } from '@ngrx/store';
import { TweetState } from './tweets.model';

export const getTweetFeatureStateSelector = createFeatureSelector<TweetState>('tweets');

export const getAllTweetsSelector = createSelector(
  getTweetFeatureStateSelector,
  (state: TweetState) => {
    return state.tweets;
  }
);

export const getTweetLoadingSelector = createSelector(
  getTweetFeatureStateSelector,
  (state: TweetState) => {
    return state.loading;
  }
);

export const getTweetsError = createSelector(
  getTweetFeatureStateSelector,
  (state: TweetState) => {
    return state.error;
  }
);


export const getTweetsErrorMsg = createSelector(
  getTweetFeatureStateSelector,
  (state: TweetState) => {
    return state.errorMsg;
  }
);
