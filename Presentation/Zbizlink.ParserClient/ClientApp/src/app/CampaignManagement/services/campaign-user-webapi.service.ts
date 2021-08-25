import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppConfigService } from 'src/app/shared/services/app-config.service';
import { HttpResponseHandlerService } from 'src/app/shared/services/http-response-handler.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class CampaignUserWebapiService {

  private CampaignManagementApiUrl = this.appConfigService.CampaignManagementApiUrl;//.AdminManagementApiUrl; // Admin api //apiBaseUrl
  private CampaignApiController = '/api/CampaignManagement/';
  

  constructor(private appConfigService: AppConfigService, private http: HttpClient
    , private notification: NotificationService, 
    private httpResponseHandlerService: HttpResponseHandlerService) { }
      // Get all Campaigns data
      public GetAllCampaignList(){
        debugger
        console.log(this.CampaignManagementApiUrl + this.CampaignApiController + "GetCompaignList");
        return this.http.get(this.CampaignManagementApiUrl + this.CampaignApiController + "GetCompaignList").pipe(catchError(this.httpResponseHandlerService.handleError)); 
      }
  // Get all users "HttpErrorResponse"
  public getCampaignOpportunityList(){
    console.log(this.CampaignManagementApiUrl + this.CampaignApiController + "getCampaignOpportunityList");
    return this.http.get(this.CampaignManagementApiUrl + this.CampaignApiController + "getCampaignOpportunityList").pipe(catchError(this.httpResponseHandlerService.handleError));  
  } 
// Send campaign management opportunity emails
public CampaignEmail(user: any): Observable<any> {
  debugger
  console.log('Email service URL = ' + this.CampaignManagementApiUrl + this.CampaignApiController + "LeadsSendToLemlist"); 
  return this.http.post<any>(`${this.CampaignManagementApiUrl + this.CampaignApiController + "LeadsSendToLemlist"}`, user, { observe: 'events' }).pipe(map((event) => {
    return this.httpResponseHandlerService.getEventMessage(event)
  }), catchError(this.httpResponseHandlerService.handleError)
  );
}

}
