import { userRegistrationSuccess } from './registration.actions';
import { createReducer, on } from '@ngrx/store';
import { initialState } from './registration.state';


const _registrationReducer = createReducer(
  initialState,

  on(userRegistrationSuccess, (state, action) => {
    return{
      ...state,
      user: action.user
    };
  }),
  );

export function RegistrationReducer(action: any, state: any) {
  return _registrationReducer(action, state);
};
