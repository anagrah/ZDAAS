import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { EmailConfirmationService } from '../../Core/Services/email-confirmation.service';

@Injectable({
  providedIn: 'root'
})
export class EmailConfirmationFacadeService {

  private _emailConfirmationService: EmailConfirmationService;
  public get emailConfirmationService(): EmailConfirmationService {
    if(!this._emailConfirmationService){
      this._emailConfirmationService = this.injector.get(EmailConfirmationService);
    }
    return this._emailConfirmationService;
  };

constructor(private injector: Injector) { }


EmailConfirmation(model: any): Observable<any> {
  return this.emailConfirmationService.EmailConfirmation(model);
}

}
