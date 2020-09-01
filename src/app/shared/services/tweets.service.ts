import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromTweetActions from '../../ngrx-stores/tweets/tweets.actions';
import { Tweet } from '../models/tweet.model';
import { Update } from '@ngrx/entity';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  constructor(private store: Store) {
  }

  getAllTweets() {
    this.store.dispatch(fromTweetActions.getAllTweetsStart());
  }

  postTweet(t: Tweet) {
    this.store.dispatch(fromTweetActions.postTweetStart({tweetToPost: t}));
  }

  updateTweet(t: Tweet) {
    const updateInfo: Update<Tweet> = {
      id: t.id,
      changes: t
    };
    this.store.dispatch(fromTweetActions.editTweetStart({update: updateInfo}));
  }
}
