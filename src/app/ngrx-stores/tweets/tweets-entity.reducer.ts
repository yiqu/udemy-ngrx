import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Tweet } from '../../shared/models/tweet.model';
import { createReducer, on } from '@ngrx/store';
import * as TweetActions from './tweets.actions';
import { TweetState } from './tweets.model';

/**
 * An entity is a dictonary
 * entity has 2 properties:
 *
 *  entities
 *  ids (correspdong to the entities's key)
 */
export interface TweetEntityState extends EntityState<Tweet> {
  lastUpdated: number,
  error: boolean,
  errorMsg: string,
  loading: boolean,
}

export const adapter = createEntityAdapter<Tweet>();

// define initial state. It now has ids and entities from the EntityState
export const initialTweetState = adapter.getInitialState<TweetEntityState>({
  ids: [],
  entities: null,

  loading: false,
  error: false,
  errorMsg: null,
  lastUpdated: 0,
});

export const tweetsEntityReducer = createReducer(
  initialTweetState,

  on(TweetActions.getAllTweetsStart, (state) => {
    return  {
      ...state,
      loading: true,
      error: false,
      errorMsg: null,
    }
  }),

  on(TweetActions.getAllTweetsSuccess, (state, {allTweets}) => {
    const dateTime = new Date().getTime();

    return adapter.setAll(allTweets, {
      ...state,
      loading: false,
      error: false,
      lastUpdated: dateTime
    })
  })
)
