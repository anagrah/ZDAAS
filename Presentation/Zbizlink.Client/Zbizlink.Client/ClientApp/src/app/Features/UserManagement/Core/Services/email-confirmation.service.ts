import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry, shareReplay } from 'rxjs/operators';
import { ApiCallRetryFacadeService } from 'src/app/Shared/Abstraction/Facade/api-call-retry-facade.service';
import { AppConfigFacadeService } from 'src/app/Shared/Abstraction/Facade/app-config-facade.service';

@Injectable({
  providedIn: 'root'
})
export class EmailConfirmationService {
  private userAuthApiUrl = this.appConfigFacadeService.userAuthApiUrl; //https://localhost:44362/api/
  private webApiController = '/Account/'; // /User/

  constructor(private http: HttpClient,
    private apiCallRetryFacadeService: ApiCallRetryFacadeService,
    private appConfigFacadeService: AppConfigFacadeService,
    ){ }


    EmailConfirmation(model: any): Observable<any> {
    const headers = { 'content-type': 'application/json-patch+json'}
    const data = JSON.stringify(model);

    return this.http.post<any>(
      `${ this.userAuthApiUrl + this.webApiController + "EmailConfirmation" }`,
      data, {'headers':headers}
    ).pipe(
      retry(this.apiCallRetryFacadeService.retryCount),
      shareReplay()
    );
  }
}
