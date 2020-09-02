import * as fromRouter from '@ngrx/router-store';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromAppState from '../global-store/app.reducer';

export const routerStateSelector =
  createFeatureSelector<fromAppState.AppState, fromRouter.RouterReducerState<any>>('myRouter');


export const {
  selectCurrentRoute,   // select the current route
  selectFragment,       // select the current route fragment
  selectQueryParams,    // select the current route query params
  selectQueryParam,     // factory function to select a query param
  selectRouteParams,    // select the current route params
  selectRouteParam,     // factory function to select a route param
  selectRouteData,      // select the current route data
  selectUrl,            // select the current url
} = fromRouter.getSelectors(routerStateSelector);
