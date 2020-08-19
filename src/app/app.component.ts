import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { MediaMatcher } from '@angular/cdk/layout';
import { IsMobileService } from './shared/services/is-mobile.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  footerTitle: string = "@KQ 2020";
  myUrl: string = "https://yiqu.github.io/";
  compDest$: Subject<any> = new Subject<any>();

  @ViewChild("snav")
  sideNav: MatSidenav;

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;


  constructor(public media: MediaMatcher, public changeDetectorRef: ChangeDetectorRef,
    private ims: IsMobileService) {
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
}
