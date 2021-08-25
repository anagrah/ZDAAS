import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {environment} from 'src/environments/environment';
import { AppConfigService } from 'src/app/shared/services/app-config.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentSummaryService {
  //baseUrl = environment.baseUrl;
  baseUrl = this.appConfigService.apiBaseUrl;
  public headers:HttpHeaders;
  
  
  constructor(private httpClient: HttpClient, private appConfigService: AppConfigService) {
    this.headers = new HttpHeaders;  
    this.headers.append('Content-Type', 'application/json') 
  }



 addSummary(formData:any): Observable<any> {
 // let body = JSON.stringify(formData);
    return this.httpClient.post<any>(`${this.baseUrl + "document/Save"}` , formData).pipe(catchError(this.handleError));
  }

  //.......................handleError......................................
  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error :', errorResponse.error.message);
    } else {
      console.error('Server Side Error :', errorResponse);
    }
    return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');
  }
  //.......................handleError END .................................
}
