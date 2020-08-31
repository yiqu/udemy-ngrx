import { Tweet } from "../../shared/models/tweet.model";

export interface TweetState {
  tweets: Tweet[],
  lastUpdated: number,
  error: boolean,
  errorMsg: string,
  loading: boolean
}
