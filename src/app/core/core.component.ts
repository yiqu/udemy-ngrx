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

@Component({
  selector: 'app-core',
  templateUrl: 'core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit, OnDestroy {

  title: string = "All Tweets";
  allTweets: Tweet;
  loggedinUser$: Observable<FireUser>;
  compDest$: Subject<any> = new Subject<any>();

  constructor(private rs: RestService, private store: Store, private as: AuthService) {
  }

  ngOnInit() {
    this.getAllTweets();

    /**
     * Using feature selector to create a obs for async pipe usage
     */
    this.loggedinUser$ = this.store.select(fromAuthSelectors.getAuthUserSelector);

    /**
     * Using feature selector to grab the Auth User slice
     */
    this.store.select(fromAuthSelectors.getAuthUserEmailSelector).pipe(
     // takeUntil(this.compDest$)
    )
    .subscribe(
      (email: any) => {
      }
    );

    this.store.pipe(
      takeUntil(this.compDest$)
    ).subscribe(
      (state) => {
      }
    );
  }

  getAllTweets() {
    //this.rs.getData<Tweet[]>("tweets.json").subscribe((d)=>console.log(d))
  }

  onLogin() {
    this.as.signInUser("test@test.com", "123456").subscribe(
      (res) => {
      },
      (err) => {
      },
      () => {
      }
    )
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}