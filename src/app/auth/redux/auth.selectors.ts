import { createSelector, createReducer, createFeatureSelector } from '@ngrx/store';
import { AuthState } from './auth.model';
import { AppState } from '../../ngrx-stores/global-store/app.reducer';
import { FireUser } from 'src/app/shared/models/user.model';

export const getAuthFeatureStateSelector = createFeatureSelector<AuthState>('auth');

 //* Get the Auth User slice
export const getAuthUserSelector = createSelector(
  getAuthFeatureStateSelector,
  (state: AuthState) => {
    return state?.user;
  }
);

 //* Get the Auth User's email property
export const getAuthUserEmailSelector = createSelector(
  getAuthFeatureStateSelector,
  (state: AuthState) => {
    return state?.user?.email;
  }
);

// get the email's uppercase
export const getAuthUserEmailUppercaseSelector = createSelector(
  getAuthUserEmailSelector,
  (state: string) => {
    return state?.toUpperCase();
  }
);

// Also gets the Auth slice, without feature selector
export const authSelector = createSelector(
  (state) => state['auth'], // <-- this is what the feature selector did above. Thus this can be extracted
  (auth: AuthState) => {
    return auth.user;
  }
)

// Get only the email
export const authEmailSelector = createSelector(
  authSelector, // <-- using a selector mapping function that is previous written
  (user: FireUser) => {
    return user?.email;
  }
)

// Get the email adress's uppercase
export const authEmailUppercaseSelector = createSelector(
  authEmailSelector,
  (email) => {
    if (email) {
      return email.toUpperCase();
    }
    return "NONE";
  }
)
