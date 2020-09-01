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
import { EntityState, Update } from '@ngrx/entity';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as fUtils from '../shared/utils/form.utils';

@Component({
  selector: 'app-core',
  templateUrl: 'core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit, OnDestroy {

  title: string = "Loading, saving, and updating using NgRx Entity";
  allTweets: Tweet;
  compDest$: Subject<any> = new Subject<any>();

  loggedinUser$: Observable<FireUser> = this.store.select(fromAuthSelectors.getAuthUserSelector);

  tweetsLoading$: Observable<boolean> = this.store.select(fromTweetEntitySelectors.getLoadingSelector);
  allTweets$: Observable<Tweet[]> = this.store.select(fromTweetEntitySelectors.getAllTweetsSelector);

  tweetError$: Observable<boolean> = this.store.select(fromTweetEntitySelectors.getErrorSelector);
  tweetErrorMsg$: Observable<string> = this.store.select(fromTweetEntitySelectors.getErrorMsgSelector);

  aSingleTweet$ = this.store.select(fromTweetEntitySelectors.selectEntity("-M52fZohiACwgDDfwuqQ"))

  tweetFg: FormGroup;
  editTweetFg: FormGroup;
  composeTitle: string = "Tweet Something...";
  editing: boolean = false;
  tweetBeingEdited: Tweet;

  constructor(private rs: RestService, private store: Store, private as: AuthService,
    private ts: TweetsService, private fb: FormBuilder) {
      this.tweetFg = this.fb.group({
        userName: fUtils.createFormControl2("Kevin", false, [Validators.required]),
        tweet: fUtils.createFormControl2(null, false, [Validators.required])
      });
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
    );

    // this selector will only fire if the selected entity has changed
    this.store.select(fromTweetEntitySelectors.selectEntity("-M52fZohiACwgDDfwuqQ")).pipe(
      takeUntil(this.compDest$)
    ).subscribe(
      (state) => {
        console.log("Entity of -M52fZohiACwgDDfwuqQ ", state)
      }
    )

  }

  refreshTweets() {
    this.getAllTweets();
  }

  getAllTweets() {
    this.ts.getAllTweets();
  }

  postTweet() {
    const val = this.tweetFg.value as {userName: string, tweet: string};
    const fakeId = new Date().getTime() + "-id";
    const t = new Tweet(val.userName, val.tweet, new Date().getTime(), fakeId, null);
    this.ts.postTweet(t);
  }

  editTweet(t: Tweet) {
    this.tweetBeingEdited = t;
    this.editTweetFg = this.fb.group({
      userName: t.userName,
      tweet: t.content
    });
    this.editing = true;
  }

  submitEdit() {
    const val = this.editTweetFg.value as {userName: string, tweet: string};
    const newTweet = {
      ...this.tweetBeingEdited,
      content: val.tweet,
      userName: val.userName
    };
    this.ts.updateTweet(newTweet);
    this.editing = false;
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}
