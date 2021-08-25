import { ErrorMessageState } from './../shared/SharedStateManagement/NgRx/errorMessageState/errorMessage.state';
import { ERROR_MESSAGE_STATE_NAME } from './../shared/SharedStateManagement/NgRx/errorMessageState/errorMessage.Selectors';
import { RegistrationState } from './../../Features/UserManagement/Core/StateManagement/NgRx/registrationState/registration.state';
import { REGISTRATION_STATE_NAME } from './../../Features/UserManagement/Core/StateManagement/NgRx/registrationState/registration.selectors';
import { RegistrationReducer } from 'src/app/Features/UserManagement/Core/StateManagement/NgRx/registrationState/registration.reducer';
import { ErrorMessageReducer } from '../shared/SharedStateManagement/NgRx/errorMessageState/errorMessage.reducer';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';




export interface AppState {
  [ERROR_MESSAGE_STATE_NAME]: ErrorMessageState,
  [REGISTRATION_STATE_NAME]: RegistrationState,
  router: RouterReducerState;  //RouterReducerState is built-in NgRx state for router-store. We are adding it here so that it can be accessable in the redux state as well.
}

export const appReducer = {
  [ERROR_MESSAGE_STATE_NAME]: ErrorMessageReducer,
  [REGISTRATION_STATE_NAME]: RegistrationReducer,
  router: routerReducer,   //routerReducer is built-in NgRx state for router-store. We are adding it here so that it can be accessable in the redux state as well.
};

