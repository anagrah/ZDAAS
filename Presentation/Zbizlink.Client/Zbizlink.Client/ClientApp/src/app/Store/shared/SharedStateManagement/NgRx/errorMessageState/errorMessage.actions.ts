import { createAction, props } from '@ngrx/store';
export const SET_ERROR_MESSAGE = '[Error Message State] Set Error Message';


export const setErrorMessage = createAction(
  SET_ERROR_MESSAGE,
  props<{ message: string | any }>()
);
