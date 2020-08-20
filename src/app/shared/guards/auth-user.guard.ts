import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute, ActivatedRouteSnapshot,
  RouterStateSnapshot, UrlTree, CanActivateChild } from '@angular/router';
import { Observable, combineLatest, Subject, of, from } from 'rxjs';
import { map, take, tap, skip } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromAuthSelectors from '../../auth/redux/auth.selectors';
import { FireUser } from '../models/user.model';


/**
 *
 * Check if user is NOT logged in. Protect routes from un-logged in user.
 */
@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
  constructor(public router: Router, public route: ActivatedRoute,
    public store: Store) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean> | boolean | UrlTree {

      return this.store.select(fromAuthSelectors.getAuthUserSelector).pipe(
        take(1),
        map((state: FireUser) => {
          if (state) {
            return true;
          }
          return this.router.createUrlTree(['/', 'auth', 'signin']);
        })
      )
  }

}

@Injectable({
  providedIn: 'root'
})
export class NoVerifiedUserChildrenGuard implements CanActivateChild {
  constructor(public router: Router, public route: ActivatedRoute,
    public store: Store) {
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean> | boolean | UrlTree {

    return
  }

}
