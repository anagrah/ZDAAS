import { Injectable, Injector } from '@angular/core';
import { ApiCallRetryService } from '../../Core/services/ApiCallRetry.service';

@Injectable({
  providedIn: 'root'
})
export class ApiCallRetryFacadeService {

        //Instance Creation and injection
        private _apiCallRetryService: ApiCallRetryService;
        public get apiCallRetryService(): ApiCallRetryService {
          if(!this._apiCallRetryService){
            this._apiCallRetryService = this.injector.get(ApiCallRetryService);
          }
          return this._apiCallRetryService;
        };

      constructor(private injector: Injector) { }

      get retryCount(){
        return this.apiCallRetryService.retryCount;
      }
}
