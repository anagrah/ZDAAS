import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ErrorMessageState } from './errorMessage.state';
export const ERROR_MESSAGE_STATE_NAME = 'errorMessage';


const getErrorMessageState = createFeatureSelector<ErrorMessageState>(ERROR_MESSAGE_STATE_NAME);

export const getErrorMessage = createSelector(getErrorMessageState, (state) => {
  return state.errorMessage;
})
