import { AppConfigFacadeService } from './../../../../Shared/Abstraction/Facade/app-config-facade.service';
import { ApiCallRetryFacadeService } from './../../../../Shared/Abstraction/Facade/api-call-retry-facade.service';
import { User } from './../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry, shareReplay } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private userAuthApiUrl = this.appConfigFacadeService.userAuthApiUrl; //https://localhost:44362/api/
  private webApiController = '/Account/'; // /User/

  constructor(private http: HttpClient,
      private apiCallRetryFacadeService: ApiCallRetryFacadeService,
      private appConfigFacadeService: AppConfigFacadeService,
      ){ }


    signUp(user:User | any): Observable<any> {
      const headers = { 'content-type': 'application/json-patch+json'}
      return this.http.post<any>(
        `${ this.userAuthApiUrl + this.webApiController + "SignUp" }`,
        user, {'headers':headers}
      ).pipe(
        retry(this.apiCallRetryFacadeService.retryCount),
        shareReplay()
      );
    }


}
