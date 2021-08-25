import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators/catchError';
import { map } from 'rxjs/internal/operators/map';
import { AppConfigService } from 'src/app/shared/services/app-config.service';
import { HttpResponseHandlerService } from '../../shared/services/http-response-handler.service'


@Injectable({
  providedIn: 'root'
})
export class RFPManipulationWebApiService {

  private apiUrl = this.appConfigService.apiBaseUrl;
  

  constructor(private http: HttpClient,
     private appConfigService: AppConfigService, private httpResponseHandlerService: HttpResponseHandlerService) { }

    
CreateEmptyOpportunity(formData: any): Observable<any> {
  console.log(this.apiUrl);
  return this.http.post<any>(`${this.apiUrl + "Opportunity/CreateEmptyOpportunity"}`, formData, {
    observe: 'events'
  }).pipe(
    map(event => this.httpResponseHandlerService.getEventMessage(event)),
    catchError(this.httpResponseHandlerService.handleError)
  );
}

SaveFiles(formData: any): Observable<any> {
  console.log(this.apiUrl);
  return this.http.post<any>(`${this.apiUrl + "document/saveFile"}`, formData, {
    observe: 'events'
  }).pipe(
    map(event => this.httpResponseHandlerService.getEventMessage(event)),
    catchError(this.httpResponseHandlerService.handleError)
  );
}

CreateEmptyOpportunityWithAllFileSave(formData: any): Observable<any> {
  return this.http.post<any>(`${this.apiUrl + "Opportunity/CreateEmptyOpportunity"}`, formData, {
    observe: 'events'
  }).pipe(
    map(event => this.httpResponseHandlerService.getEventMessage(event)),
    catchError(this.httpResponseHandlerService.handleError)
  );
}

ViewDocument(formData: FormData): Observable<any> {
  console.log(this.apiUrl);
  return this.http.post<any>(`${this.apiUrl + "document/viewDocument"}`, formData, {
    observe: 'events'
  }).pipe(
    map(event => this.httpResponseHandlerService.getEventMessage(event)),
    catchError(this.httpResponseHandlerService.handleError)
  );
}

ViewSharePointDocument(formData: FormData): Observable<any> {
  console.log(this.apiUrl);
  return this.http.post<any>(`${this.apiUrl + "document/viewSharePointDocument"}`, formData, {
    observe: 'events'
  }).pipe(
    map(event => this.httpResponseHandlerService.getEventMessage(event)),
    catchError(this.httpResponseHandlerService.handleError)
  );
}

AutoParsing(formData: FormData){

  console.log(this.apiUrl);
  return this.http.post<any>(`${this.apiUrl + "document/autoParsing"}`, formData, {
    observe: 'events'
  }).pipe(
    map(event => this.httpResponseHandlerService.getEventMessage(event)),
    catchError(this.httpResponseHandlerService.handleError)
  );
}

DeleteRfpFile(formData: any): Observable<any> {
  console.log(this.apiUrl);
  return this.http.post<any>(`${this.apiUrl + "document/deleteFile"}`, formData, {
    observe: 'events'
  }).pipe(
    map(event => this.httpResponseHandlerService.getEventMessage(event)),
    catchError(this.httpResponseHandlerService.handleError)
  );
}


GetCategoryNameList(): Observable<any> {
  console.log(this.apiUrl);
  return this.http.get(`${this.apiUrl}document/getCategoryNameList`)
  .pipe(catchError(this.httpResponseHandlerService.handleError));
}

getCompanyOppertunityList(publishFlag: boolean, companyId: string): Observable<any> {

    return this.http.get(`${this.apiUrl}document/getCompanyOppertunityList?companyId=${companyId}`)
      .pipe(catchError(this.httpResponseHandlerService.handleError));
  
 }

 GetSavedEmptyOpportunity(opportunityId: number): Observable<any> {

  
    return this.http.get(`${this.apiUrl}Opportunity/getSavedEmptyOpportunity?opportunityId=${opportunityId}`)
      .pipe(catchError(this.httpResponseHandlerService.handleError));
  
 }

 save(formData: any): Observable<any> {
   debugger;
    return this.http.post<any>(`${this.apiUrl + "document/Save"}`, formData)
      .pipe(catchError(this.httpResponseHandlerService.handleError));
  }

  getOpportunity(): Observable<any> {
    return this.http.get(`${this.apiUrl}Opportunity/getopportunity`)
      .pipe(catchError(this.httpResponseHandlerService.handleError));
  }

  getSavedDocInfo(companyId: any, userId: any, documentId: any): Observable<any> {
    let Params = new HttpParams();
    Params.append('companyId', companyId);
    Params.append('userId', userId);
    Params.append('documentId', documentId);
    // the above paramameter are not in use for instance .
    return this.http.post(`${this.apiUrl}document/GetSavedDocInfo?companyId=${companyId}&userId=${userId}&documentId=${documentId}`, null)
    .pipe(catchError(this.httpResponseHandlerService.handleError));
  }
  
  publish(OpportunityId: any, userId: any, companyId: any, clientId: any, SegmentId: any): Observable<any> {
    let OppId: Number = Number(OpportunityId);
    return this.http.post(`${this.apiUrl}Opportunity/publish?OpportunityId=${OppId}&userId=${userId}&companyId=${companyId}&clientId=${clientId}&SegmentId=${SegmentId}`, null)
    .pipe(catchError(this.httpResponseHandlerService.handleError));
  }
  
 public SaveChangedCategoriesAndSummaryData(formData:any): Observable<any> {
  // let body = JSON.stringify(formData);
     return this.http.post<any>(`${this.apiUrl + "document/saveCategoriesAndSummaryData"}` , formData)
     .pipe(catchError(this.httpResponseHandlerService.handleError));
   }

   public WholeDocumentParseDataSave(formData:any): Observable<any> {
   
    return this.http.post<any>(`${this.apiUrl + "document/WholeDocumentParseDataSave"}`, formData, {
      observe: 'events'
    }).pipe(
      map(event => this.httpResponseHandlerService.getEventMessage(event)),
      catchError(this.httpResponseHandlerService.handleError)
    );

     }

    }