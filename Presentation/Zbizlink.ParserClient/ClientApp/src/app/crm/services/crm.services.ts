import { Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SalesforceCredential } from '../models/model.credentials';
import { SelectedTablesService } from '../shared/selectedtables.service';
import { EndpointFactoryService } from '../shared/endpoint-factory.service';
import { AppConfigService } from 'src/app/shared/services/app-config.service';

@Injectable({
  providedIn: 'root'
})
export class CrmServices extends EndpointFactoryService {
 // apiUrl = environment.baseUrl;
  apiUrl = this.appConfigService.crmApiUrl;
  constructor(http: HttpClient, public tempService: SelectedTablesService,private appConfigService:AppConfigService) {
    super(http);
  }
  getAddCRMConnectionProperties(companyId: number,userId: number,  array: any[]): Observable<any> {

    return this.http.post<any>(`${this.apiUrl}/CRM/AddConnectionProperties?companyId=${companyId}&userId=${userId}`, JSON.stringify(array), this.getRequestHeaders()).pipe(catchError(this.handleError));
  }
  getCRMConnectionProperties(cId: number, uId: number, crmId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/CRM/ConnectionProperties?companyId=${cId}&userId=${uId}&crmId=${crmId}`, this.getRequestHeaders()).pipe(catchError(this.handleError));
  }
  getConnectSalesForceCRMAccessToken(cId: number, uId: number, crmId: number, model: SalesforceCredential): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/SalesForce/Connect?companyId=${cId}&userId=${uId}&crmId=${crmId}`, model, this.getRequestHeaders()).pipe(catchError(this.handleError));
  }
  getAddCRMTables(companyId: number, list: any[]): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/CRM/CompanyCRMTables?companyId=${companyId}`, JSON.stringify(list), this.getRequestHeaders()).pipe(catchError(this.handleError));
  }
  getCRMTables(oAuth: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/SalesForce/tables`, oAuth).pipe(catchError(this.handleError));
  }
  getCompanyCRMTables(companyId: number, crmId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/CRM/GetCompanyCRMTables?companyId=${companyId}&crmId=${crmId}`).pipe(catchError(this.handleError));
  }
  getCRMTableFields(tableId: number, extToen: any): Observable<any> {

    return this.http.post<any>(`${this.apiUrl}/SalesForce/TablesFields?tableId=${tableId}`, extToen, this.getRequestHeaders()).pipe(catchError(this.handleError));
  }
  getAddCRMTablesFields(list: any[], tableId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/CRM/CompanyCRMTablesFields?tableId=${tableId}`, JSON.stringify(list), this.getRequestHeaders()).pipe(catchError(this.handleError));
  }
  getCRMTablesData(extToken: any, serchFilter: string): Observable<any> {

    return this.http.post<any>(`${this.apiUrl}/SalesForce/TablesFieldsData?search=${serchFilter}`, extToken).pipe(catchError(this.handleError));
  }
  getSaveCRMData(extToken: any, array: any[]): Observable<any> {  
    return this.http.post<any>(`${this.apiUrl}/CRM/SaveData?companyId=${extToken.companyId}&userId=${extToken.userId}&AccessToken=${extToken.accessToken}&InstanceUrl=${extToken.instanceUrl}&ApiVersion=${extToken.apiVersion}&CrmOwnerId=${extToken.crmOwnerId}&CrmImportUserId=${extToken.crmImportUserId}&CrmId=${extToken.crmId}`, JSON.stringify(array), this.getRequestHeaders()).pipe(catchError(this.handleError));
  }
  getTablesFieldsForMapping(companyId: number,crmId:number): Observable<any> {   
    return this.http.get<any>(`${this.apiUrl}/CRM/GetTablesFieldsForMapping?companyId=${companyId}&crmId=${crmId}`).pipe(catchError(this.handleError));
  }
  getSaveMappedFields(array: any[]): Observable<any> {

    return this.http.post<any>(`${this.apiUrl}/CRM/SaveMappedFields`, JSON.stringify(array), this.getRequestHeaders()).pipe(catchError(this.handleError));
  }

  // Error handling
  handleError(error) {
    debugger;
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      console.log(error.error);
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
