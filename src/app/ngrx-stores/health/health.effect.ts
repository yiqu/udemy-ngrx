import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class HealthEffects {


  constructor() {
  }

}
