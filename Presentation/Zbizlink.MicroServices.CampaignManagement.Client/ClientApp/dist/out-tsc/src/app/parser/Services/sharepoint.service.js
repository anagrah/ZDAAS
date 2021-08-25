import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
let SharepointService = class SharepointService {
    constructor(appConfigService, http) {
        this.appConfigService = appConfigService;
        this.http = http;
        this.sharepointapiUrl = this.appConfigService.sharepointapiUrl;
    }
    UploadFilesSharePoint(formData) {
        debugger;
        console.log('>>>>>share point url<<<<<');
        console.log('>>>>>' + this.sharepointapiUrl + '<<<<<');
        return this.http.post(`${this.sharepointapiUrl + "api/Document/BulkUpload"}`, formData)
            .pipe(catchError(this.handleError));
    }
    DeleteFilesSharePoint(params) {
        debugger;
        console.log('>>>>>share point url<<<<<');
        console.log('>>>>>' + this.sharepointapiUrl + '<<<<<');
        return this.http.delete(`${this.sharepointapiUrl + "api/Document/Delete"}`, { observe: 'body', params: params })
            .pipe(catchError(this.handleError));
    }
    GetFileSharePoint(params) {
        debugger;
        console.log('>>>>>share point url<<<<<');
        console.log('>>>>>' + this.sharepointapiUrl + '<<<<<');
        return this.http.get(`${this.sharepointapiUrl + "api/Document/Download"}`, { observe: 'body', params: params })
            .pipe(catchError(this.handleError));
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        //return throwError(error); 
        return throwError('Something bad happened. Please try again later.');
    }
};
SharepointService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], SharepointService);
export { SharepointService };
//# sourceMappingURL=sharepoint.service.js.map