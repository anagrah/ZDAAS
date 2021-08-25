import { HttpStatusService } from '../httpstatus.service';
import { rootInjector } from '../root.injector';

// loading.decorator.ts
export function Loading() {
  debugger;
  return function (target: any, key: string): void {
    debugger;
    if (rootInjector != undefined || rootInjector != null) {
      const service = rootInjector.get(HttpStatusService);
      target[key] = service.loading$;
    }

  }
};