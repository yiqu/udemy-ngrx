import { createAction, props } from '@ngrx/store';
import { Tweet } from '../../shared/models/tweet.model';

const GET_ALL_TWEETS_START: string = "[Tweets] Get All Tweets Start";
const GET_ALL_TWEETS_FAILED: string = "[Tweets] Get All Tweets Failed";
const GET_ALL_TWEETS_SUCCESS: string = "[Tweets] Get All Tweets Success";

export const getAllTweetsStart = createAction(
  GET_ALL_TWEETS_START,
);

export const getAllTweetsFailed = createAction(
  GET_ALL_TWEETS_FAILED,
  props<{errorMsg: string}>()
);

export const getAllTweetsSuccess = createAction(
  GET_ALL_TWEETS_SUCCESS,
  props<{allTweets: Tweet[]}>()
);
