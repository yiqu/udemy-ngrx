import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Tweet } from '../models/tweet.model';
import { Store } from '@ngrx/store';
import { first, tap } from 'rxjs/operators';
import * as fromTweetActions from '../../ngrx-stores/tweets/tweets.actions';

@Injectable({
  providedIn: 'root'
})
export class TweetsResolver implements Resolve<Tweet[]> {
  constructor(private store: Store) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    console.log("Running resolver");

    return this.store.pipe(
      tap(() => {
        this.store.dispatch(fromTweetActions.getAllTweetsStart())
      }),
      first(),
    )
  }
}
