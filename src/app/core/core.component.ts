import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: 'core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit, OnDestroy {

  arr1: number[] = Array.from(Array(50).keys())

  constructor() {

  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }
}
