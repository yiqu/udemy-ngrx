import { createAction, props } from '@ngrx/store';
import { Tweet } from '../../shared/models/tweet.model';
import { Update } from '@ngrx/entity';


const GET_ALL_TWEETS_START: string = "[Tweets] Get All Tweets Start";
const GET_ALL_TWEETS_FAILED: string = "[Tweets] Get All Tweets Failed";
const GET_ALL_TWEETS_SUCCESS: string = "[Tweets] Get All Tweets Success";

const POST_TWEET_START: string = "[Tweets] POST TWEET START";
const POST_TWEET_FAILED: string = "[Tweets] POST TWEET FAILED";
const POST_TWEET_SUCCESS: string = "[Tweets] POST TWEET SUCCESS";

const EDIT_TWEET_START: string = "[Tweets] EDIT TWEET START";
const EDIT_TWEET_FAILED: string = "[Tweets] EDIT TWEET FAILED";
const EDIT_TWEET_SUCCESS: string = "[Tweets] EDIT TWEET SUCCESS";

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

export const postTweetStart = createAction(
  POST_TWEET_START,
  props<{tweetToPost: Tweet}>()
);

export const postTweetFailed = createAction(
  POST_TWEET_FAILED,
  props<{errorMsg: string}>()
);

export const postTweetSuccess = createAction(
  POST_TWEET_SUCCESS,
  props<{tweetPosted: Tweet}>()
);


export const editTweetStart = createAction(
  EDIT_TWEET_START,
  props<{update: Update<Tweet>}>()
);

export const editTweetFailed = createAction(
  EDIT_TWEET_FAILED,
  props<{errorMsg: string}>()
);

export const editTweetSuccess = createAction(
  EDIT_TWEET_SUCCESS,
  props<{tweetEdited: Tweet}>()
);
