import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromTweetActions from '../../ngrx-stores/tweets/tweets.actions';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  constructor(private store: Store) {
  }

  getAllTweets() {
    this.store.dispatch(fromTweetActions.getAllTweetsStart());
  }
}
