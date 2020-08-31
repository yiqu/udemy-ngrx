import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Tweet } from '../shared/models/tweet.model';
import { RestService } from '../shared/services/rest.service';
import { Store } from '@ngrx/store';
import { AppState } from '../ngrx-stores/global-store/app.reducer';
import * as fromAuthSelectors from '../auth/redux/auth.selectors';
import { FireUser } from '../shared/models/user.model';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TweetsService } from '../shared/services/tweets.service';
import * as fromTweetSelectors from '../ngrx-stores/tweets/tweets.selector';
import * as fromTweetEntitySelectors from '../ngrx-stores/tweets/tweets-entity.selector';
import { EntityState } from '@ngrx/entity';


@Component({
  selector: 'app-core',
  templateUrl: 'core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit, OnDestroy {

  title: string = "All Tweets";
  allTweets: Tweet;
  compDest$: Subject<any> = new Subject<any>();

  loggedinUser$: Observable<FireUser> = this.store.select(fromAuthSelectors.getAuthUserSelector);

  tweetsLoading$: Observable<boolean> = this.store.select(fromTweetEntitySelectors.getLoadingSelector);
  allTweets$: Observable<Tweet[]> = this.store.select(fromTweetEntitySelectors.getAllTweetsSelector);

  tweetError$: Observable<boolean> = this.store.select(fromTweetEntitySelectors.getErrorSelector);
  tweetErrorMsg$: Observable<string> = this.store.select(fromTweetEntitySelectors.getErrorMsgSelector);

  constructor(private rs: RestService, private store: Store, private as: AuthService,
    private ts: TweetsService) {

  }

  ngOnInit() {
    this.getAllTweets();

    this.store.select(fromTweetEntitySelectors.getAllTweetsSelector).pipe(
      takeUntil(this.compDest$)
    )
    .subscribe(
      (state) => {
        console.log("All: ",state)
      }
    )

    this.store.select(fromTweetEntitySelectors.getAllTweetsEntitiesSelector).pipe(
      takeUntil(this.compDest$)
    ).subscribe(
      (state) => {
        console.log("Entities:",state)
      }
    )

    this.store.select(fromTweetEntitySelectors.getAllTweetsIdsSelector).pipe(
      takeUntil(this.compDest$)
    ).subscribe(
      (state) => {
        console.log("Ids ",state)
      }
    )

    this.store.select(fromTweetEntitySelectors.getAllTweetsTotalSelector).pipe(
      takeUntil(this.compDest$)
    ).subscribe(
      (state) => {
        console.log("Total", state)
      }
    )

    this.store.select(fromTweetEntitySelectors.getTweetsBy, {nameToFilter: 'gg'}).pipe(
      takeUntil(this.compDest$)
    ).subscribe(
      (state) => {
        console.log("Filter tweet by name:", state)
      }
    )

  }

  refreshTweets() {
    this.getAllTweets();
  }

  getAllTweets() {
    this.ts.getAllTweets();
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}
