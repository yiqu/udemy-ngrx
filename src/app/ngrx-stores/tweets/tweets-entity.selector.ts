import { createSelector, createReducer, createFeatureSelector } from '@ngrx/store';
import { TweetState } from './tweets.model';
import * as fromTweetReducers from './tweets-entity.reducer';
import { TweetEntityState } from './tweets-entity.reducer';
import { Tweet } from 'src/app/shared/models/tweet.model';


export const getTweetFeatureStateSelector = createFeatureSelector<TweetEntityState>('tweets');

export const getAllTweetsSelector = createSelector(
  getTweetFeatureStateSelector,
  fromTweetReducers.adapter.getSelectors().selectAll
);

export const getAllTweetsIdsSelector = createSelector(
  getTweetFeatureStateSelector,
  fromTweetReducers.adapter.getSelectors().selectIds
);

export const getAllTweetsEntitiesSelector = createSelector(
  getTweetFeatureStateSelector,
  fromTweetReducers.adapter.getSelectors().selectEntities
);

export const getAllTweetsTotalSelector = createSelector(
  getTweetFeatureStateSelector,
  fromTweetReducers.adapter.getSelectors().selectTotal
);

// passing in a value with the props parameter
export const getTweetsBy = createSelector(
  getAllTweetsSelector,
  (state: Tweet[], props: {nameToFilter: string}) => {
    return state.filter((s) => {
      return s.userName === props.nameToFilter;
    })
  }
)

export const getLoadingSelector = createSelector(
  getTweetFeatureStateSelector,
  (state) => {
    return state.loading;
  }
)

export const getErrorSelector = createSelector(
  getTweetFeatureStateSelector,
  (state) => {
    return state.error;
  }
)

export const getErrorMsgSelector = createSelector(
  getTweetFeatureStateSelector,
  (state) => {
    return state.errorMsg;
  }
)
