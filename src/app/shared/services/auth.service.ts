import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { environment } from '../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { FirebaseSignUpRestRequestBody, FireUser } from '../models/user.model';
import { RestService } from './rest.service';
import { catchError, tap } from 'rxjs/operators';
import * as fromAuthActions from '../../auth/redux/auth.actions';
import { Store } from '@ngrx/store';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = "https://udemy-angular-665a2.firebaseio.com/";
  private baseSignInWithPasswordUrl: string = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword";
  private baseSignUpUrl: string = "https://identitytoolkit.googleapis.com/v1/accounts:signUp";

  constructor(private rs: RestService, private store: Store) {
    this.initFirebase();
    firebase.auth().onAuthStateChanged(
      (user: firebase.User) => {
        console.log("Firebase State AUTH:", user ? user.toJSON() : user);
      },
      (err) => {
        console.error("Error occured in firebase auth state change trigger.")
      },
      () => {
        console.info("Firebase auth state change completed.")
      }
    );
  }

  signInUser<T>(email: string, pw: string): Observable<HttpResponse<T>> {
    if (email && pw) {
      const bod = new FirebaseSignUpRestRequestBody(email, pw);
      const apiKeyParam = {
        key: environment.firebaseConfig.apiKey
      }
      return this.rs.postData<T>(this.baseSignInWithPasswordUrl, bod, apiKeyParam).pipe(
        catchError(this.handleFirebaseSignInUpError),
        tap((u: HttpResponse<T>) => {
          this.handleAuthentication(u)
        })
      );;
    }
  }


  handleFirebaseSignInUpError(errResponse) {
    console.log(errResponse)
    let errMessage: string = "An server error has occured.";
    if (!errResponse.error || !errResponse.error.error) {
      return throwError(errMessage);
    }
    switch (errResponse.error.error.message) {
      case "EMAIL_EXISTS": {
        errMessage = "This email has already been registered.";
        break;
      }
      case "TOO_MANY_ATTEMPTS_TRY_LATER": {
        errMessage = "Too many failed login attempts, try again later.";
        break;
      }
      case "WEAK_PASSWORD": {
        errMessage = "Password should be at least 6 characters";
        break;
      }
      case "EMAIL_NOT_FOUND": {
        errMessage = "The account you are trying to sign in with does not exist.";
        break;
      }
      case "INVALID_PASSWORD": {
        errMessage = "Invalid password.";
        break;
      }
      case "USER_DISABLED": {
        errMessage = "This user has been disabled";
        break;
      }
      default: {
        errMessage = errResponse.error.error.message;
      }
    }
    return throwError(errMessage);
  }

  handleAuthentication<T>(u: HttpResponse<T>) {
    const info = u.body;
    const expiresInSeconds: number = (+info['expiresIn']);
    const expireDateInSeconds: number = (new Date().getTime()) + ((expiresInSeconds) * 1000);
    const expireDate: Date = new Date(expireDateInSeconds);

    const newUser = new FireUser(
      info['displayName'],
      info['email'],
      info['localId'],
      info['refreshToken'],
      info['registered'],
      info['idToken'],
      expireDate,
      expireDateInSeconds);

    this.store.dispatch(fromAuthActions.authLoginSuccess({user: newUser}));
  }

  saveInfoToLocalStorage(u: FireUser) {
    localStorage.setItem("fire-user", JSON.stringify(u));
  }

  /**
   * Initialize Firebase.
   * NOTE: Injecting AngularFire will auto initializeApp
   */
  initFirebase() {
    firebase.initializeApp(environment.firebaseConfig);
  }
}
