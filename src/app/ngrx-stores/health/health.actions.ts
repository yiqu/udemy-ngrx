import { createAction, props } from '@ngrx/store';
import { Action } from '@ngrx/store';

const GET_SYSTEM_HEALTH: string = "[System/Health] Get System Health";


export const getSystemHealth = createAction(
  GET_SYSTEM_HEALTH,
);


