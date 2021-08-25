import { Injectable } from '@angular/core';
import { AppConfigService } from '../../shared/services/app-config.service';
import { HttpClient } from '@angular/common/http';
import { HttpResponseHandlerService } from '../../shared/services/http-response-handler.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class IndustryService {

  private RFPWebApiUrl = this.appConfigService.apiBaseUrl; 
  private LookupDataAPIController = 'LookupData/';
  constructor(
    private appConfigService: AppConfigService, private http: HttpClient,
    private httpResponseHandlerService: HttpResponseHandlerService
  ) { }

   // Get Industry
   public GetIndustry(){
    console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "getIndustry");
    return this.http.get(this.RFPWebApiUrl + this.LookupDataAPIController + "getIndustry") .pipe(catchError(this.httpResponseHandlerService.handleError));  
  }

   //Industry Insert
   public SaveIndustry(groupForm: any): Observable<any> {
    console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "industryInsert");
    return this.http.post<any>(`${this.RFPWebApiUrl + this.LookupDataAPIController + "industryInsert"}`, groupForm, { observe: 'events' }).pipe(map((event) => {
      return this.httpResponseHandlerService.getEventMessage(event)

    }), catchError(this.httpResponseHandlerService.handleError)
    );
  }
   // Update Industry
 public UpdateIndustry(groupForm: any): Observable<any> {
  console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "industryEdit");
  return this.http.post<any>(`${this.RFPWebApiUrl + this.LookupDataAPIController + "industryEdit"}`, groupForm, { observe: 'events' }).pipe(map((event) => {
    return this.httpResponseHandlerService.getEventMessage(event)

  }), catchError(this.httpResponseHandlerService.handleError)
  );
}
   // Delete Industry
   public DeleteIndustry(groupForm: any): Observable<any> {
    console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "industryDelete");
    return this.http.post<any>(`${this.RFPWebApiUrl + this.LookupDataAPIController + "industryDelete"}`, groupForm, { observe: 'events' }).pipe(map((event) => {
      return this.httpResponseHandlerService.getEventMessage(event)

    }), catchError(this.httpResponseHandlerService.handleError)
    );
  }
}
