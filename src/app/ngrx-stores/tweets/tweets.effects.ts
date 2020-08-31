import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import * as fromTweetActions from './tweets.actions';
import { RestService } from '../../shared/services/rest.service';
import { Tweet } from '../../shared/models/tweet.model';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class TweetEffects {


  constructor(public actions$: Actions, private rs: RestService, private _snackBar: MatSnackBar) {
  }

  convertObjToList(obj: object) {
    let list = [];
    if (obj) {
      Object.keys(obj).forEach((k) => {
        list.push(obj[k]);
      });
    }
    return list;
  }

  addIdToData(res: object) {
    let keys = Object.keys(res);
    let result = {};
    keys.forEach((k) => {
      result[k] = {
        ...res[k],
        id: k
      }
    });
    return result;
  }

  getAllTweets$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromTweetActions.getAllTweetsStart),
      switchMap((data) => {
        return this.rs.getData<object>("tweets.json").pipe(
          map((res)  => {
            return this.addIdToData(res);
          }),
          map((res) => {
            return fromTweetActions.getAllTweetsSuccess({allTweets: this.convertObjToList(res)});
          }),
          catchError((errResponse: string) => {
            return of(fromTweetActions.getAllTweetsFailed({errorMsg: errResponse}));
          }),
        );
      })
    );
  });

  getAllTweetsFailed$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromTweetActions.getAllTweetsFailed),
      tap((err) => {
        const msg = err.errorMsg;
        this._snackBar.open(msg, "close", {
          duration: 2000,
        });
      })
    );
  }, {dispatch: false});


  getAllTweetsSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromTweetActions.getAllTweetsSuccess),
      tap((tweets) => {
        const lengthOfAll = tweets.allTweets.length
        this._snackBar.open("Got " + lengthOfAll + " tweets", "close", {
          duration: 2000,
        });
      })
    );
  }, {dispatch: false});

}


