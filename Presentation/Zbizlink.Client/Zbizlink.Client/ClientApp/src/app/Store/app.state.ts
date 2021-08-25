import { routerReducer, RouterReducerState } from '@ngrx/router-store';



export interface AppState {
  router: RouterReducerState;  //RouterReducerState is built-in NgRx state for router-store. We are adding it here so that it can be accessable in the redux state as well.
}

export const appReducer = {
  router: routerReducer,   //routerReducer is built-in NgRx state for router-store. We are adding it here so that it can be accessable in the redux state as well.
};
