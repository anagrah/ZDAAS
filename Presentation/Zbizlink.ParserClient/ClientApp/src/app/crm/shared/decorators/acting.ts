import { rootInjector } from '../root.injector';
import { HttpStatusService } from '../httpstatus.service';

// acting.decorator.ts
export function Acting() {
    return function (target: any, key: string): void {
      const service = rootInjector.get(HttpStatusService);
      target[key] = service.acting$;
    }
  };