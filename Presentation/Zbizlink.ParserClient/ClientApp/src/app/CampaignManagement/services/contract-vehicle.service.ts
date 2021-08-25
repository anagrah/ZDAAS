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
export class ContractVehicleService {

  private RFPWebApiUrl = this.appConfigService.apiBaseUrl; 
  private LookupDataAPIController = 'LookupData/';
  constructor(
    private appConfigService: AppConfigService, private http: HttpClient,
    private httpResponseHandlerService: HttpResponseHandlerService
  ) { }

   // Get Contract Vehicle
   public GetContractVehicle(){
    console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "getContractVehicle");
    return this.http.get(this.RFPWebApiUrl + this.LookupDataAPIController + "getContractVehicle") .pipe(catchError(this.httpResponseHandlerService.handleError));  
  }

   //Contract Vehicle Insert
   public SaveContractVehicle(groupForm: any): Observable<any> {
    console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "contractVehicleInsert");
    return this.http.post<any>(`${this.RFPWebApiUrl + this.LookupDataAPIController + "contractVehicleInsert"}`, groupForm, { observe: 'events' }).pipe(map((event) => {
      return this.httpResponseHandlerService.getEventMessage(event)

    }), catchError(this.httpResponseHandlerService.handleError)
    );
  }
   // Update Contract Vehicle
 public UpdateContractVehicle(groupForm: any): Observable<any> {
  console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "contractVehicleEdit");
  return this.http.post<any>(`${this.RFPWebApiUrl + this.LookupDataAPIController + "contractVehicleEdit"}`, groupForm, { observe: 'events' }).pipe(map((event) => {
    return this.httpResponseHandlerService.getEventMessage(event)

  }), catchError(this.httpResponseHandlerService.handleError)
  );
}
   // Delete Contract Vehicle
   public DeleteContractVehicle(groupForm: any): Observable<any> {
    console.log('RFP Web API url = '+ this.RFPWebApiUrl + this.LookupDataAPIController + "contractVehicleDelete");
    return this.http.post<any>(`${this.RFPWebApiUrl + this.LookupDataAPIController + "contractVehicleDelete"}`, groupForm, { observe: 'events' }).pipe(map((event) => {
      return this.httpResponseHandlerService.getEventMessage(event)

    }), catchError(this.httpResponseHandlerService.handleError)
    );
  }
}
