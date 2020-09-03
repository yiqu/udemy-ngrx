import { createSelector, createReducer, createFeatureSelector } from '@ngrx/store';
import { TweetState } from './tweets.model';
import * as fromTweetReducers from './tweets-entity.reducer';
import { TweetEntityState } from './tweets-entity.reducer';
import { Tweet } from 'src/app/shared/models/tweet.model';
import * as fromRouterSelectors from '../router/router.selectors';


export const getTweetFeatureStateSelector = createFeatureSelector<TweetEntityState>('tweets');

/**
 * The adapter built-in selectors, selectAll, selectIds, selectEntities, selectTotal
 */
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

export const selectEntity = (id: string) => createSelector(
  getAllTweetsEntitiesSelector,
  (entities) => {
    return entities[id];
  }
);

export const selectEntitiesByID = (ids: string[]) => createSelector(
  getAllTweetsEntitiesSelector,
  (entities) => {
    return ids.map(id => entities[id]);
  }
);

export const getTweetByRouteParam = (id: string) => createSelector(
  getAllTweetsEntitiesSelector,
  fromRouterSelectors.selectRouteParam(id),
  (entities, tweetId: string): Tweet => {
    return entities[tweetId];
  }
)


/**
 * Normal selectors
 */
export const getLoadingSelector = createSelector(
  getTweetFeatureStateSelector,
  (state): boolean => {
    return state.loading;
  }
)

export const getHasDataLoadedAlreadySelector = createSelector(
  getTweetFeatureStateSelector,
  (state): boolean => {
    return state.hasDataLoadedAlready;
  }
)

export const getErrorSelector = createSelector(
  getTweetFeatureStateSelector,
  (state): boolean => {
    return state.error;
  }
)

export const getErrorMsgSelector = createSelector(
  getTweetFeatureStateSelector,
  (state): string => {
    return state.errorMsg;
  }
)

export const getLastUpdatedSelector = createSelector(
  getTweetFeatureStateSelector,
  (state): number => {
    return state.lastUpdated;
  }
)

export const getAddingNewTweetLoadingSelector = createSelector(
  getTweetFeatureStateSelector,
  (state): boolean => {
    return state.addingNewTweet;
  }
)

export const getLastTimeTweetDialogClosedSelector = createSelector(
  getTweetFeatureStateSelector,
  (state): number => {
    return state.closeTweetDialogTime;
  }
)

export const showLoadMaskSelector = createSelector(
  getHasDataLoadedAlreadySelector,
  getLoadingSelector,
  (hasDataLoaded: boolean, loadingStatus: boolean) => {
    if (hasDataLoaded) {
      return false;
    }
    return loadingStatus;
  }
)
