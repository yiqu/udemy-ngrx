import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRouteSelectors from '../../ngrx-stores/router/router.selectors';
import { Params } from '@angular/router';
import * as fromTweetSelectors from '../../ngrx-stores/tweets/tweets-entity.selector';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Tweet } from 'src/app/shared/models/tweet.model';


@Component({
  selector: 'app-twitter-tweet-detail',
  templateUrl: 'detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class TweetDetailComponent implements OnInit, OnDestroy {

  compDest$: Subject<any> = new Subject<any>();
  tweet$: Observable<Tweet> = this.store.select(fromTweetSelectors.getTweetByRouteParam("tweetId"));
  tweet: Tweet;

  constructor(private store: Store) {

  }

  ngOnInit() {
    this.store.select(fromTweetSelectors.getTweetByRouteParam("tweetId")).pipe(
      takeUntil(this.compDest$)
    )
    .subscribe(
      (state: Tweet) => {
        this.tweet = state;
        console.log(this.tweet)
      }
    )
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}
