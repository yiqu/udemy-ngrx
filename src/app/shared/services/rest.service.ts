import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, Subject, from, of, throwError, BehaviorSubject } from 'rxjs';
import { map, catchError, delay, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { VerifiedUser, FireUser } from '../models/user.model';
import { environment } from '../../../environments/environment';
import { FirebaseSignUpRestRequestBody } from '../models/firebase.model';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  private baseUrl: string = "https://udemy-angular-665a2.firebaseio.com/";
  private baseSignInWithPasswordUrl: string = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword";
  private baseSignUpUrl: string = "https://identitytoolkit.googleapis.com/v1/accounts:signUp";

  public refreshClick$: Subject<any> = new Subject<any>();

  constructor(public http: HttpClient, public router: Router) {
  }

  createParams() {

  }

  handleError(err: HttpErrorResponse) {
    const errMsg: any = err.error.error;
    console.log("error: ", err.error)
    return throwError(errMsg);
  }

  postData<T>(url: string, data: any, params?: any): Observable<HttpResponse<T>> {
    const urlPost: string = url;
    let httpParams = new HttpParams();
    if (params) {
      for (const key in params) {
        httpParams = httpParams.set(key, params[key]);
      }
    }
    return this.http.post<T>(urlPost, data, {observe: 'response', params: httpParams}).pipe(
      delay(1500),
      catchError((err: HttpErrorResponse) => this.handleError(err))
    );
  }

  updateData<T>(url: string, data: any): Observable<HttpResponse<T>> {
    return this.http.put<T>(this.baseUrl + url, data, {observe: 'response'});
  }

  getData<T>(url: string, params?: any): Observable<T> {
    let httpParams = new HttpParams();
    if (params) {
      for (const key in params) {
        httpParams = httpParams.set(key, params[key]);
      }
    }
    return this.http.get<T>(this.baseUrl + url, {observe: 'response', params: httpParams}).pipe(
      delay(1500),
      map((res: HttpResponse<T>) => {
        return res.body;
      }),
      catchError((err: HttpErrorResponse) => {
        return this.handleError(err)
        })
      );
  }

  deleteData(tweetId: string) {
    const deleteUrl: string = "";
    return this.http.delete(this.baseUrl + deleteUrl, {observe: 'response'});
  }

  convertObjToList(obj: object) {
    let list = [];
    Object.keys(obj).forEach((k) => {
      list.push(obj[k]);
    });
    return list;
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

  handleErrorNgrx(errResponse: HttpErrorResponse): string {
    let errMessage: string = "An server error has occured.";
    if (!errResponse.error || !errResponse.error.error) {
      return (errMessage);
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
    return (errMessage);
  }

}
