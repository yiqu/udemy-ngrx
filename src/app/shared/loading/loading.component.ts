import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd,
  NavigationCancel, NavigationError } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-shared-loading',
  templateUrl: 'loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  wholePage: boolean;

  loading: boolean = true;
  logoShakeState: boolean = false;
  parentClass: string;
  compDest$: Subject<any> = new Subject<any>();

  constructor(public router: Router) {

  }

  ngOnChanges(c) {
    if (this.wholePage) {
      this.parentClass = "whole-page loading-container"
    } else {
      this.parentClass = "container loading-container mt-5";
    }
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}
