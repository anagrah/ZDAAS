import { ErrorMessageService } from './../../Core/Services/error-message.service';
import { RegistrationService } from './../../Core/Services/registration.service';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiResponse } from 'src/app/Shared/Core/models/webApiResponse.model';

@Injectable({
  providedIn: 'root'
})
export class ErrorMessageFacadeService {

    //SignUp
    private _errorMessageService: ErrorMessageService;
    public get errorMessageService(): ErrorMessageService {
      if(!this._errorMessageService){
        this._errorMessageService = this.injector.get(ErrorMessageService);
      }
      return this._errorMessageService;
    };

  constructor(private injector: Injector) { }

  getErrorMessage(user: any, action: any) {
    return this.errorMessageService.getErrorMessage(user, action);
    }

  formResponse(res: WebApiResponse) {
    return this.errorMessageService.formResponse(res);
    }

}
