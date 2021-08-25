import { ActivatedRouteSnapshot, Params, RouterStateSnapshot } from "@angular/router";
import { RouterStateSerializer } from "@ngrx/router-store";

// By default, the router-store shows a very large complex built-in data. But we are implementing this custom serializer so that
// only the following data is visible i.e. url, params and queryParams. (Note: you can view this data in state in redux).
export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
};


//The code below is coppied from official ngrx.io website (https://ngrx.io/guide/router-store/configuration) given in custom-route-serializer.ts

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: { queryParams },
    } = routerState;
    const { params } = route;

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return { url, params, queryParams };
  }

}
