import { createAction, props } from '@ngrx/store';
import { Tweet } from '../../shared/models/tweet.model';
import { Update } from '@ngrx/entity';


const GET_ALL_TWEETS_START: string = "[Tweets/API] Get All Tweets Start";
const GET_ALL_TWEETS_FAILED: string = "[Tweets/API] Get All Tweets Failed";
const GET_ALL_TWEETS_SUCCESS: string = "[Tweets/API] Get All Tweets Success";

const POST_TWEET_START: string = "[Tweets/API] POST NEW TWEET START";
const POST_TWEET_FAILED: string = "[Tweets/API] POST NEW TWEET FAILED";
const POST_TWEET_SUCCESS: string = "[Tweets/API] POST NEW TWEET SUCCESS";

const EDIT_TWEET_START: string = "[Tweets/API] EDIT TWEET START";
const EDIT_TWEET_FAILED: string = "[Tweets/API] EDIT TWEET FAILED";
const EDIT_TWEET_SUCCESS: string = "[Tweets/API] EDIT TWEET SUCCESS";

const RESRT_CLOSE_NEW_TWEET_DIALOG: string = "[Tweets/UI] Reset Close New Tweet Dialog";

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

export const resetCloseDialogTime = createAction(
  RESRT_CLOSE_NEW_TWEET_DIALOG
)

