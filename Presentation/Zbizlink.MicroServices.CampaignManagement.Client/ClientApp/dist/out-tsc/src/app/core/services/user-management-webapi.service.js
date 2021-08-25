import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { catchError, map } from 'rxjs/operators';
let UserManagementWebapiService = class UserManagementWebapiService {
    constructor(appConfigService, http, notification, progressSpinnerService, httpResponseHandlerService) {
        this.appConfigService = appConfigService;
        this.http = http;
        this.notification = notification;
        this.progressSpinnerService = progressSpinnerService;
        this.httpResponseHandlerService = httpResponseHandlerService;
        this.userManagementApiUrl = this.appConfigService.userManagementApiUrl; //https://localhost:44343
        this.webApiController = '/User/'; // /User/
    }
    ngOnInit() {
        this.currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    UserSignUp(formData) {
        console.log(this.userManagementApiUrl + this.webApiController + "RegisterUser");
        return this.http.post(`${this.userManagementApiUrl + this.webApiController + "RegisterUser"}`, formData, { observe: 'events' }).pipe(map((event) => {
            return this.httpResponseHandlerService.getEventMessage(event);
        }), catchError(this.httpResponseHandlerService.handleError));
    }
    // Login  
    Login(formData) {
        console.log(this.userManagementApiUrl + this.webApiController + "Authenticate");
        //console.log("https://localhost:44343/User/Authenticate");
        return this.http.post(`${this.userManagementApiUrl + this.webApiController + "Authenticate"}`, formData, { observe: 'events' })
            .pipe(map(event => this.httpResponseHandlerService.getEventMessage(event)), catchError(this.httpResponseHandlerService.handleError));
    }
    GetUser(email) {
        return this.http.get(`${this.userManagementApiUrl + this.webApiController}GetUserByEmail?email=${email}`)
            .pipe(catchError(this.httpResponseHandlerService.handleError));
    }
    // Forgot password
    forgotPassword(formData) {
        console.log(this.userManagementApiUrl + this.webApiController + "forgotPassword");
        return this.http.post(`${this.userManagementApiUrl + this.webApiController + "forgotPassword"}`, formData, { observe: 'events' })
            .pipe(map(event => this.httpResponseHandlerService.getEventMessage(event)), catchError(this.httpResponseHandlerService.handleError));
    }
    // ResetPassword
    ResetPassword(formData) {
        console.log(this.userManagementApiUrl + this.webApiController + "ResetPassword");
        return this.http.post(`${this.userManagementApiUrl + this.webApiController + "ResetPassword"}`, formData, { observe: 'events' })
            .pipe(map(event => this.httpResponseHandlerService.getEventMessage(event)), catchError(this.httpResponseHandlerService.handleError));
    }
    // user confirmation //
    ActivateUser(activationCode, email) {
        console.log(this.userManagementApiUrl + this.webApiController + "ActivateUser");
        let confirmationURLIs = this.userManagementApiUrl + this.webApiController + "ActivateUser?activationCode=" + activationCode + '&email=' + email;
        //let confirmationURLIs = this.userManagementApiUrl + this.webApiController + "ActivateUser";
        console.log(confirmationURLIs);
        const formData = new FormData();
        formData.append('activationCode', activationCode);
        formData.append('email', email);
        return this.http.post(`${confirmationURLIs}`, formData, { observe: 'events' })
            .pipe(map(event => this.httpResponseHandlerService.getEventMessage(event)), catchError(this.httpResponseHandlerService.handleError));
    }
    // get user information 
    UpdateUser(formData) {
        // console.log(this.userManagementApiUrl + this.webApiController + "UpdateUser?email=" + email);
        // let emailConfirmationURL = this.userManagementApiUrl + this.webApiController + "UpdateUser" ;
        // console.log(emailConfirmationURL);
        // const formData = new FormData();
        // formData.append('email', email);
        return this.http.post(`${this.userManagementApiUrl + this.webApiController + "UpdateUser"}`, formData, { observe: 'events' }) //(`${emailConfirmationURL}`, formData, { observe: 'events' })
            .pipe(map(event => this.httpResponseHandlerService.getEventMessage(event)), catchError(this.httpResponseHandlerService.handleError));
    }
};
UserManagementWebapiService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserManagementWebapiService);
export { UserManagementWebapiService };
//# sourceMappingURL=user-management-webapi.service.js.map