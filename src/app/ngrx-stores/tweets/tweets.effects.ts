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

  private baseUrl: string = "https://udemy-angular-665a2.firebaseio.com/tweets/";

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
      ofType(fromTweetActions.getAllTweetsFailed, fromTweetActions.postTweetFailed),
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


  postNewTweetStart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromTweetActions.postTweetStart),
      switchMap((data) => {
        let t: Tweet = {...data.tweetToPost};
        const generatedId: string = (new Date().getTime() + (Math.random()+"").slice(-7)).slice(-10);
        t.id = generatedId;
        const url: string = this.baseUrl + ".json";
        return this.rs.postData(url, t).pipe(
          map((res) => {
            return fromTweetActions.postTweetSuccess({tweetPosted: t});
          }),
          catchError((errResponse: string) => {
            return of(fromTweetActions.postTweetFailed({errorMsg: errResponse}));
          }),
        );
      })
    );
  });

  postNewTweetSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromTweetActions.postTweetSuccess),
      switchMap((res) => {
        return [
          fromTweetActions.resetCloseDialogTime(),
          fromTweetActions.getAllTweetsStart()
        ];
      }));
  });

}


