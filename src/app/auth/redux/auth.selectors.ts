import { createSelector, createReducer, createFeatureSelector } from '@ngrx/store';
import { AuthState } from './auth.model';
import { AppState } from '../../ngrx-stores/global-store/app.reducer';

export const getAuthFeatureStateSelector = createFeatureSelector<AuthState>('auth');

export const getAuthUserSelector = createSelector(
  getAuthFeatureStateSelector,
  (state: AuthState) => {
    return state?.user;
  }
);


export const getAuthUserEmailSelector = createSelector(
  getAuthFeatureStateSelector,
  (state: AuthState) => {
    return state?.user?.email;
  }
);
