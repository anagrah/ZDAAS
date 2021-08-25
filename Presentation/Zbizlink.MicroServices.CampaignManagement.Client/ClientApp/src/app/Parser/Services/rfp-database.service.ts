import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { HttpErrorResponse, HttpEventType, HttpEvent, HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators/catchError';
import { map } from 'rxjs/internal/operators/map';
import { AppConfigService } from 'src/app/shared/services/app-config.service';

@Injectable({
  providedIn: 'root'
})
export class RfpDatabaseService {

  private apiUrl = this.appConfigService.apiBaseUrl;
  

  constructor(private http: HttpClient,
     private appConfigService: AppConfigService) { }

    
CreateEmptyOpportunity(formData: any): Observable<any> {
  console.log(this.apiUrl);
  return this.http.post<any>(`${this.apiUrl + "Opportunity/CreateEmptyOpportunity"}`, formData, {
    observe: 'events'
  }).pipe(
    map(event => this.getEventMessage(event)),
    catchError(this.handleError)
  );
}

SaveFiles(formData: any): Observable<any> {
  console.log(this.apiUrl);
  return this.http.post<any>(`${this.apiUrl + "document/saveFile"}`, formData, {
    observe: 'events'
  }).pipe(
    map(event => this.getEventMessage(event)),
    catchError(this.handleError)
  );
}

CreateEmptyOpportunityWithAllFileSave(formData: any): Observable<any> {
  return this.http.post<any>(`${this.apiUrl + "Opportunity/CreateEmptyOpportunity"}`, formData, {
    observe: 'events'
  }).pipe(
    map(event => this.getEventMessage(event)),
    catchError(this.handleError)
  );
}

ViewDocument(formData: FormData): Observable<any> {
  console.log(this.apiUrl);
  return this.http.post<any>(`${this.apiUrl + "document/viewDocument"}`, formData, {
    observe: 'events'
  }).pipe(
    map(event => this.getEventMessage(event)),
    catchError(this.handleError)
  );
}

ViewSharePointDocument(formData: FormData): Observable<any> {
  console.log(this.apiUrl);
  return this.http.post<any>(`${this.apiUrl + "document/viewSharePointDocument"}`, formData, {
    observe: 'events'
  }).pipe(
    map(event => this.getEventMessage(event)),
    catchError(this.handleError)
  );
}

AutoParsing(formData: FormData){

  console.log(this.apiUrl);
  return this.http.post<any>(`${this.apiUrl + "document/autoParsing"}`, formData, {
    observe: 'events'
  }).pipe(
    map(event => this.getEventMessage(event)),
    catchError(this.handleError)
  );
}

DeleteRfpFile(formData: any): Observable<any> {
  console.log(this.apiUrl);
  return this.http.post<any>(`${this.apiUrl + "document/deleteFile"}`, formData, {
    observe: 'events'
  }).pipe(
    map(event => this.getEventMessage(event)),
    catchError(this.handleError)
  );
}




GetCategoryNameList(): Observable<any> {
  console.log(this.apiUrl);
  return this.http.get(`${this.apiUrl}document/getCategoryNameList`)
  .pipe(catchError(this.handleError));
}

getCompanyOppertunityList(publishFlag: boolean, companyId: string): Observable<any> {

  //var companyId=localStorage.getItem('compId');
  //var companyId = 1;
  //if (publishFlag == false) {
    return this.http.get(`${this.apiUrl}document/getCompanyOppertunityList?companyId=${companyId}`)
      .pipe(catchError(this.handleError));
  //}
  //else {GetDocumentList
  //  return this.http.get(`${this.apiUrl}document/GetPublishedDocumentList?companyId=${companyId}`)
  //    .pipe(catchError(this.handleError));

  //}
 }

 GetSavedEmptyOpportunity(opportunityId: number): Observable<any> {

  //var companyId=localStorage.getItem('compId');
  //var companyId = 1;
  //if (publishFlag == false) {
    return this.http.get(`${this.apiUrl}Opportunity/getSavedEmptyOpportunity?opportunityId=${opportunityId}`)
      .pipe(catchError(this.handleError));
  //}
  //else {GetDocumentList
  //  return this.http.get(`${this.apiUrl}document/GetPublishedDocumentList?companyId=${companyId}`)
  //    .pipe(catchError(this.handleError));

  //}
 }

 save(formData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl + "document/Save"}`, formData)
      .pipe(catchError(this.handleError));
  }

  getOpportunity(): Observable<any> {
    return this.http.get(`${this.apiUrl}Opportunity/getopportunity`)
      .pipe(catchError(this.handleError));
  }

  getSavedDocInfo(companyId: any, userId: any, documentId: any): Observable<any> {
    let Params = new HttpParams();
    Params.append('companyId', companyId);
    Params.append('userId', userId);
    Params.append('documentId', documentId);
    // the above paramameter are not in use for instance .
    return this.http.post(`${this.apiUrl}document/GetSavedDocInfo?companyId=${companyId}&userId=${userId}&documentId=${documentId}`, null)
    .pipe(catchError(this.handleError));
  }
  
  publish(OpportunityId: any, userId: any, companyId: any, clientId: any, SegmentId: any): Observable<any> {
    let OppId: Number = Number(OpportunityId);
    return this.http.post(`${this.apiUrl}Opportunity/publish?OpportunityId=${OppId}&userId=${userId}&companyId=${companyId}&clientId=${clientId}&SegmentId=${SegmentId}`, null)
    .pipe(catchError(this.handleError));
  }
  
 public SaveChangedCategoriesAndSummaryData(formData:any): Observable<any> {
  // let body = JSON.stringify(formData);
     return this.http.post<any>(`${this.apiUrl + "document/saveCategoriesAndSummaryData"}` , formData)
     .pipe(catchError(this.handleError));
   }

   public WholeDocumentParseDataSave(formData:any): Observable<any> {
   
    return this.http.post<any>(`${this.apiUrl + "document/WholeDocumentParseDataSave"}`, formData, {
      observe: 'events'
    }).pipe(
      map(event => this.getEventMessage(event)),
      catchError(this.handleError)
    );

     }

private getEventMessage(event: HttpEvent<any>) {
  
  switch (event.type) {
    case HttpEventType.UploadProgress:
      return this.progress(event);
    case HttpEventType.Response:
      return this.apiResponse(event);
    default:
      return event.type;
  }
    }

    private progress(event) {
      const percentDone = Math.round(100 * event.loaded / event.total);
      return { status: 'progress', message: percentDone };
    }
  
    private apiResponse(event) {
      return event.body;
    }

    private handleError(error: HttpErrorResponse) {

      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
      }
      // return an observable with a user-facing error message
       
      //return throwError(error); 
      return throwError('Something bad happened. Please try again later.');
    }
  }