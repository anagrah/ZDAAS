import { rootInjector } from '../root.injector';
import { HttpStatusService } from '../httpstatus.service';

// validation-errors.decorator.ts
export function ValidationErrors() {
    return function (target: any, key: string): void {
      const service = rootInjector.get(HttpStatusService);
      target[key] = service.validationErrors;
    }
  };