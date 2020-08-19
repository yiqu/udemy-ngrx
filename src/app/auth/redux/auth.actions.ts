import { createAction, props } from '@ngrx/store';

const LOGIN_START: string = "[Auth/Login] Auth Login Start";
const LOGIN_SUCCESS: string = "[Auth/Login] Auth Login Success";
const LOGIN_FAILURE: string = "[Auth/Login] Auth Login Failure";


export const authLoginStart = createAction(
  LOGIN_START,
);

export const authLoginSuccess = createAction(
  LOGIN_SUCCESS,
);

export const authLoginFailure = createAction(
  LOGIN_FAILURE,
);
