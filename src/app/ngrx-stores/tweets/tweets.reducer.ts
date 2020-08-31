import { createReducer, on } from '@ngrx/store';
import * as TweetActions from './tweets.actions';
import { TweetState } from './tweets.model';


/**
 * Auth Initial State
 */
const inititalState: TweetState = {
  tweets: [],
  lastUpdated: undefined,
  error: false,
  errorMsg: undefined,
  loading: false
}


export const tweetReducer = createReducer(
  inititalState,

  on(TweetActions.getAllTweetsStart, (state) => {
    return {
      ...state,
      loading: true,
      error: false,
      errorMsg: undefined
    }
  }),

  on(TweetActions.getAllTweetsFailed, (state, {errorMsg}) => {
    return {
      ...state,
      error: true,
      errorMsg: errorMsg,
      tweets: [],
      loading: false
    }
  }),

  on(TweetActions.getAllTweetsSuccess, (state, {allTweets}) => {
    return {
      ...state,
      loading: false,
      tweets: allTweets,
      error: false,
      errorMsg: undefined
    }
  }),
)
