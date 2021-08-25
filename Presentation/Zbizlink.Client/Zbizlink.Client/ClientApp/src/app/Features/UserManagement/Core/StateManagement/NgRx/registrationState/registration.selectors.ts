import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RegistrationState } from './registration.state';

export const REGISTRATION_STATE_NAME = 'Registration';

const getRegistrationState = createFeatureSelector<RegistrationState>(REGISTRATION_STATE_NAME);

export const isAuthenticated = createSelector(getRegistrationState, (state) => {
  return state.user ? true: false; //if state.user is present then return true otherwise return false.
});


export const getToken = createSelector(getRegistrationState, (state) => {
  return state.user ? state.user.token : null;   //if state.user is present then send userToken(i.e. state.user.userToken) else send 'null'.
});


