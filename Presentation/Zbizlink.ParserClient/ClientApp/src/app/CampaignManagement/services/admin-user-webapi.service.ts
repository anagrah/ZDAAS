import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { map } from 'rxjs/internal/operators/map';
import { ProgressSpinnerService } from 'src/app/shared/services/progress-spinner.service';
import { AppConfigService } from '../../shared/services/app-config.service';
import { HttpResponseHandlerService } from '../../shared/services/http-response-handler.service';
import { NotificationService } from '../../shared/services/notification.service'; 

@Injectable({
  providedIn: 'root'
})
export class AdminUserWebapiService {

  private AdminManagementApiUrl = this.appConfigService.AdminManagementApiUrl; // Admin api
  private AdminApiController = '/AdminUser/';
  uploadError: string;
  constructor(private appConfigService: AppConfigService, private http: HttpClient
    , private notification: NotificationService, public progressSpinnerService: ProgressSpinnerService,
    private httpResponseHandlerService: HttpResponseHandlerService) { }

     //Admin Authentication
     public AdminSignUp(formData: any): Observable<any> {
      console.log(this.AdminManagementApiUrl + this.AdminApiController + "RegisterUser");
      return this.http.post<any>(`${this.AdminManagementApiUrl + this.AdminApiController + "RegisterUser"}`, formData, { observe: 'events' }).pipe(map((event) => {
        return this.httpResponseHandlerService.getEventMessage(event)
  
      }), catchError(this.httpResponseHandlerService.handleError)
      );
    }
    // Update admin user
     //Admin Authentication
     public AdminUpdateUser(formData: any): Observable<any> {
      console.log(this.AdminManagementApiUrl + this.AdminApiController + "updateUser");
      return this.http.post<any>(`${this.AdminManagementApiUrl + this.AdminApiController + "updateUser"}`, formData, { observe: 'events' }).pipe(map((event) => {
        return this.httpResponseHandlerService.getEventMessage(event)
  
      }), catchError(this.httpResponseHandlerService.handleError)
      );
    }
  // Login   
  public AdminLogin(formData: any): Observable<any> {
    console.log(this.AdminManagementApiUrl + this.AdminApiController + "Authenticate");
    //console.log("https://localhost:44343/User/Authenticate");
    return this.http.post<any>(`${this.AdminManagementApiUrl + this.AdminApiController + "Authenticate"}`, formData, { observe: 'events' })
      .pipe(
        map(event => this.httpResponseHandlerService.getEventMessage(event))
        , catchError(this.httpResponseHandlerService.handleError)
      );
  }
  // Get user roles
  public getRoles(){
    return this.http.get(this.AdminManagementApiUrl + this.AdminApiController + "getRoles").pipe(catchError(this.httpResponseHandlerService.handleError));  
  } 
   // Get all users
   public GetAllUsers(){
    return this.http.get(this.AdminManagementApiUrl + this.AdminApiController + "getAdminUsersList").pipe(catchError(this.httpResponseHandlerService.handleError));  
  } 
  public UploadError(parm: any): void {
    this.uploadError = parm;
    this.progressSpinnerService.isLoading = false;
    this.notification.error(this.uploadError);
  }

}
