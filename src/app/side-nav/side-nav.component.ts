import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { NavHeaderList, NavHeader, NavHeaderLink } from '../shared/models/nav-item.model';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-side-nav',
  templateUrl: 'side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit, OnDestroy {

  headerList: NavHeaderList[] = [];
  navTitle: string = "Home";
  compDest$: Subject<any> = new Subject<any>();

  @Output()
  navClose: EventEmitter<any> = new EventEmitter<any>();

  constructor(public router: Router) {
    this.createAllOptions();
  }

  createAllOptions() {
    this.headerList.push(
      new NavHeaderList(new NavHeader("NgRx Topics"), [
        new NavHeaderLink("Home", "assessment", ["/", "home"]),
        new NavHeaderLink("My Account", "account_circle", ["/", "account"]),
        new NavHeaderLink("Home", "assessment", ["/", "home2"]),
        new NavHeaderLink("Home", "assessment", ["/", "home3"]),
        new NavHeaderLink("Home", "assessment", ["/", "home4"]),
        new NavHeaderLink("Home", "assessment", ["/", "home5"]),
        new NavHeaderLink("Home", "assessment", ["/", "home6"]),
        new NavHeaderLink("Home", "assessment", ["/", "home7"]),
        new NavHeaderLink("Home", "assessment", ["/", "home8"]),
      ]),
      new NavHeaderList(new NavHeader("Help & Settings"), [
        new NavHeaderLink("My Account", "account_circle", ["/", "my-account"]),
        new NavHeaderLink("Customer Service", "device_unknown", ["/", "help", "customer-service"]),
      ])
    );
  }

  ngOnInit() {

  }

  onNavClose() {
    this.navClose.emit(true);
  }

  onNavItemClick() {
    this.navClose.emit(true);
  }

  onTitleClick() {
    this.router.navigate(['/']);
    this.navClose.emit(true);
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}

