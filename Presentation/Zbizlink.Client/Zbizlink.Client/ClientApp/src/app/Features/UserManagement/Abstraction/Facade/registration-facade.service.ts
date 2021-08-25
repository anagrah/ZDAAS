import { User } from './../../Core/models/user.model';
import { RegistrationService } from './../../Core/Services/registration.service';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationFacadeService {

    //SignUp
    private _registrationService: RegistrationService;
    public get registrationService(): RegistrationService {
      if(!this._registrationService){
        this._registrationService = this.injector.get(RegistrationService);
      }
      return this._registrationService;
    };

  constructor(private injector: Injector) { }

  signUp(user:any): Observable<any> {
    return this.registrationService.signUp(user);
  }
}
