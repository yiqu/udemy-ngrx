import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import * as fromAuthActions from './auth.actions';
import { FireUser } from 'src/app/shared/models/user.model';


@Injectable()
export class AuthEffects {


  constructor(public actions$: Actions) {
  }

  saveUserToLocalStorage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAuthActions.authLoginSuccess),
      tap((data) => {
        const u: FireUser = data.user;
        console.log("saving", u);
        localStorage.setItem("verified-user", JSON.stringify(u));
      })
    );
  }, {dispatch: false});

}




export const authEffects = [
  AuthEffects
]
