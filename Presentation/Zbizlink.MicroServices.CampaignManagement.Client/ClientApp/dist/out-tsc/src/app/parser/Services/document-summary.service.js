import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
let DocumentSummaryService = class DocumentSummaryService {
    constructor(httpClient, appConfigService) {
        this.httpClient = httpClient;
        this.appConfigService = appConfigService;
        //baseUrl = environment.baseUrl;
        this.baseUrl = this.appConfigService.apiBaseUrl;
        this.headers = new HttpHeaders;
        this.headers.append('Content-Type', 'application/json');
    }
    addSummary(formData) {
        // let body = JSON.stringify(formData);
        return this.httpClient.post(`${this.baseUrl + "document/Save"}`, formData).pipe(catchError(this.handleError));
    }
    //.......................handleError......................................
    handleError(errorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client Side Error :', errorResponse.error.message);
        }
        else {
            console.error('Server Side Error :', errorResponse);
        }
        return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');
    }
};
DocumentSummaryService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], DocumentSummaryService);
export { DocumentSummaryService };
//# sourceMappingURL=document-summary.service.js.map