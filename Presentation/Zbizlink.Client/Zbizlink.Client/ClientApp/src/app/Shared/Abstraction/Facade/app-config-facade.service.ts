import { Injectable, Injector } from '@angular/core';
import { AppConfigService } from '../../Core/services/app-config.service';

@Injectable({
  providedIn: 'root'
})
export class AppConfigFacadeService {

      //Instance Creation and injection
      private _appConfigService: AppConfigService;
      public get appConfigService(): AppConfigService {
        if(!this._appConfigService){
          this._appConfigService = this.injector.get(AppConfigService);
        }
        return this._appConfigService;
      };

      constructor(private injector: Injector) { }


  loadAppConfig() {
    return this.appConfigService.loadAppConfig();
  }

  get userAuthApiUrl() {
    return this.appConfigService.userAuthApiUrl;
  }
}
