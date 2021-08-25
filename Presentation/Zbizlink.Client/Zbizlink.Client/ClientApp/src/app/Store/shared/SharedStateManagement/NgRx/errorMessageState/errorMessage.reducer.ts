import { createReducer, on } from '@ngrx/store';
import { setErrorMessage } from './errorMessage.actions';
import { initialState } from './errorMessage.state';


const _errorMessageReducer = createReducer(
  initialState,
  on(setErrorMessage, (state, action) => {
    return{
      ...state,
      errorMessage: action.message,
    };
  })
);

export function ErrorMessageReducer(state:any, action:any) {
  return _errorMessageReducer(state, action);
}
