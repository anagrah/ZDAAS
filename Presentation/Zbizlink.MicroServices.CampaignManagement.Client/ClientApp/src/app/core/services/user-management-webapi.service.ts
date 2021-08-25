import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { catchError, map } from 'rxjs/operators';
import { ProgressSpinnerService } from 'src/app/shared/services/progress-spinner.service';
import { AppConfigService } from '../../shared/services/app-config.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { User } from 'src/app/Core/models/User';
import { NavbarService } from 'src/app/core/services/navbar.service';
import {HttpResponseHandlerService} from '../../shared/services/http-response-handler.service'


@Injectable({
  providedIn: 'root'
})
export class UserManagementWebapiService {

  private userManagementApiUrl = this.appConfigService.userManagementApiUrl; //https://localhost:44343
  private webApiController = '/User/'; // /User/
  //private emailSenderAPIUrl = this.appConfigService.emailSenderApiUrl;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private appConfigService: AppConfigService, private http: HttpClient
    , private notification: NotificationService,
    public progressSpinnerService: ProgressSpinnerService,
    private httpResponseHandlerService: HttpResponseHandlerService
    ) {
  }
  ngOnInit(): void {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  public UserSignUp(formData: any): Observable<any> {
    console.log(this.userManagementApiUrl + this.webApiController + "RegisterUser");
    return this.http.post<any>(`${this.userManagementApiUrl + this.webApiController + "RegisterUser"}`, formData, { observe: 'events' }).pipe(map((event) => {
      return this.httpResponseHandlerService.getEventMessage(event)

    }), catchError(this.httpResponseHandlerService.handleError)
    );
  }
  // Login  
  public Login(formData: any): Observable<any> {
    console.log(this.userManagementApiUrl + this.webApiController + "Authenticate");
    //console.log("https://localhost:44343/User/Authenticate");
    return this.http.post<any>(`${this.userManagementApiUrl + this.webApiController + "Authenticate"}`, formData, { observe: 'events' })
      .pipe(
        map(event => this.httpResponseHandlerService.getEventMessage(event))
        , catchError(this.httpResponseHandlerService.handleError)
      );
  }

  GetUser(email:string): Observable<any> {
   
    return this.http.get(`${this.userManagementApiUrl + this.webApiController}GetUserByEmail?email=${email}`)
    .pipe(catchError(this.httpResponseHandlerService.handleError));
  }
  
  
  // Forgot password
  public forgotPassword(formData: any): Observable<any> {
    
    console.log(this.userManagementApiUrl + this.webApiController + "forgotPassword");
    return this.http.post<any>(`${this.userManagementApiUrl + this.webApiController + "forgotPassword"}`, formData, { observe: 'events' })
      .pipe(
        map(event => this.httpResponseHandlerService.getEventMessage(event)),
        catchError(this.httpResponseHandlerService.handleError)
      );
  }
  // ResetPassword
  public ResetPassword(formData: any): Observable<any> {
    console.log(this.userManagementApiUrl + this.webApiController + "ResetPassword");
    return this.http.post<any>(`${this.userManagementApiUrl + this.webApiController + "ResetPassword"}`, formData, { observe: 'events' })
      .pipe(
        map(event => this.httpResponseHandlerService.getEventMessage(event)),
        catchError(this.httpResponseHandlerService.handleError)
      );
  }
  
  // user confirmation //
  public ActivateUser(activationCode: string, email: string): Observable<any> {
    console.log(this.userManagementApiUrl + this.webApiController + "ActivateUser");
    let confirmationURLIs = this.userManagementApiUrl + this.webApiController + "ActivateUser?activationCode=" + activationCode + '&email=' + email;
    //let confirmationURLIs = this.userManagementApiUrl + this.webApiController + "ActivateUser";
    console.log(confirmationURLIs);
    const formData = new FormData();
    formData.append('activationCode', activationCode);
    formData.append('email', email);
    return this.http.post<any>(`${confirmationURLIs}`, formData, { observe: 'events' })
      .pipe(
        map(event => this.httpResponseHandlerService.getEventMessage(event)),
        catchError(this.httpResponseHandlerService.handleError)
      );
  }

  // get user information 
  public UpdateUser(formData: any): Observable<any> {
   // console.log(this.userManagementApiUrl + this.webApiController + "UpdateUser?email=" + email);
   // let emailConfirmationURL = this.userManagementApiUrl + this.webApiController + "UpdateUser" ;
   // console.log(emailConfirmationURL);
    // const formData = new FormData();
    // formData.append('email', email);
    
    return this.http.post<any>(`${this.userManagementApiUrl + this.webApiController + "UpdateUser"}`, formData, { observe: 'events' })//(`${emailConfirmationURL}`, formData, { observe: 'events' })
      .pipe(
        map(event => this.httpResponseHandlerService.getEventMessage(event)),
        catchError(this.httpResponseHandlerService.handleError)
      );
  }
}   
