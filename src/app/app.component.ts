import { Component, ViewChild, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { MediaMatcher } from '@angular/cdk/layout';
import { IsMobileService } from './shared/services/is-mobile.service';
import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import { environment } from 'src/environments/environment';
import { AuthService } from './shared/services/auth.service';
import { Store } from '@ngrx/store';
import * as fromAuthSelectors from './auth/redux/auth.selectors';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  footerTitle: string = "@KQ 2020";
  myUrl: string = "https://yiqu.github.io/";
  compDest$: Subject<any> = new Subject<any>();

  @ViewChild("snav")
  sideNav: MatSidenav;

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;


  constructor(public media: MediaMatcher, public changeDetectorRef: ChangeDetectorRef,
    private ims: IsMobileService, public  as: AuthService, private store: Store) {
      this.setMobileDetection();
  }

    /**
   * Detect if deive is mobile size, then re-run detection change
   */
  setMobileDetection() {
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.ims.mediaQList = this.mobileQuery;
  }


  onTopNavMenuClick() {
    if (this.sideNav) {
      this.sideNav.toggle();
    }
  }

  onNavClose() {
    if (this.sideNav) {
      this.sideNav.close();
    }
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }


}
