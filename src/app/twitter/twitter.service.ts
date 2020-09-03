import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromTweetActions from '../ngrx-stores/tweets/tweets.actions';
import * as fromTweetSelectors from '../ngrx-stores/tweets/tweets-entity.selector';
import { Tweet } from '../shared/models/tweet.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  allTweets$: Observable<Tweet[]> = this.store.select(fromTweetSelectors.getAllTweetsSelector);
  loadingTweets$: Observable<boolean> = this.store.select(fromTweetSelectors.getLoadingSelector);
  lastUpdated$: Observable<number> = this.store.select(fromTweetSelectors.getLastUpdatedSelector);
  hasDataLoaded$: Observable<boolean> = this.store.select(fromTweetSelectors.getHasDataLoadedAlreadySelector);
  loadingMask$: Observable<boolean> = this.store.select(fromTweetSelectors.showLoadMaskSelector);
  addingNewTweet$: Observable<boolean> = this.store.select(fromTweetSelectors.getAddingNewTweetLoadingSelector);
  lastTimeNewTweetDialogClosed$: Observable<number> = this.store.select(fromTweetSelectors.getLastTimeTweetDialogClosedSelector);
  totalTweetCount$: Observable<number> = this.store.select(fromTweetSelectors.getAllTweetsTotalSelector);


  constructor(private store: Store) {
  }

  getAllTweets() {
    this.store.dispatch(fromTweetActions.getAllTweetsStart());
  }

  postNewTweet(t: Tweet) {
    this.store.dispatch(fromTweetActions.postTweetStart({tweetToPost: t}));
  }

}
