import { Component, OnInit, EventEmitter, Output, OnDestroy, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject, timer } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
import { headShakeAnimation, rotateAnimation, tadaAnimation } from 'angular-animations';
import { MenuItem } from '../shared/models/nav-item.model';
import { Store } from '@ngrx/store';
import * as fromAuthSelectors from '../auth/redux/auth.selectors';
import { FireUser } from '../shared/models/user.model';


const defaultProfileImg: string = "assets/banner/logo.png";

@Component({
  selector: 'app-top-nav',
  templateUrl: 'top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
  animations: [
    headShakeAnimation(),
    rotateAnimation(),
    tadaAnimation()
  ]
})
export class TopNavComponent implements OnInit, OnDestroy, AfterViewInit {

  headerTitle: string = "NgRx Udemy Course";
  compDest$: Subject<any> = new Subject<any>();
  logoShakeState: boolean = false;
  leftNavMenuState: boolean = false;
  swingState: boolean = false;
  userMenuIcon: string; //account_circle
  userMenuItems: MenuItem[] = [];
  crudLoaded: boolean = true;
  avartarImgSrc: string = defaultProfileImg;

  @Output()
  navToggle: EventEmitter<any> = new EventEmitter<any>();

  constructor(public router: Router, public route: ActivatedRoute, private store: Store) {

    this.store.select(fromAuthSelectors.getAuthUserSelector).pipe(
      takeUntil(this.compDest$)
     )
     .subscribe(
       (email: FireUser) => {
       }
     );
  }

  ngOnInit() {
    this.animateLogoOnStart();
    this.createMenuItems();
  }


  ngAfterViewInit() {
  }

  onLogoClick() {
    this.logoShakeState = !this.logoShakeState;
  }

  onMenuClick() {
    this.leftNavMenuState = !this.leftNavMenuState;
    this.navToggle.emit(true);
  }

  animateLogoOnStart() {
    const logoAnimateTimer = timer(600);
    logoAnimateTimer.pipe(
      take(1)
    ).subscribe((val) => {
      this.swingState = true;
    })
  }


  onMenuItemClick(item: MenuItem) {
    if (item.id === "account") {
      this.router.navigate(['/', 'my-account']);
    } else if (item.id === "signout") {
      //this.onSignoutClick();
    } else if (item.id === "signin") {
      this.onAuthClick();
    }
  }

  createMenuItems() {
    this.userMenuItems = [];

    this.userMenuItems.push(
       new MenuItem("record_voice_over", "Sign in", "signin"),
       new MenuItem("forward", "Sign Out", "signout")
    )
  }

  onAuthClick() {
    this.router.navigate(['/', 'auth']);
  }


  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}
