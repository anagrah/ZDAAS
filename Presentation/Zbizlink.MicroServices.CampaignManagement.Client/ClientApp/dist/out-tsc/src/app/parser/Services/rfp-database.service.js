import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpEventType, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators/catchError';
import { map } from 'rxjs/internal/operators/map';
let RfpDatabaseService = class RfpDatabaseService {
    constructor(http, appConfigService) {
        this.http = http;
        this.appConfigService = appConfigService;
        this.apiUrl = this.appConfigService.apiBaseUrl;
    }
    CreateEmptyOpportunity(formData) {
        console.log(this.apiUrl);
        return this.http.post(`${this.apiUrl + "Opportunity/CreateEmptyOpportunity"}`, formData, {
            observe: 'events'
        }).pipe(map(event => this.getEventMessage(event)), catchError(this.handleError));
    }
    SaveFiles(formData) {
        console.log(this.apiUrl);
        return this.http.post(`${this.apiUrl + "document/saveFile"}`, formData, {
            observe: 'events'
        }).pipe(map(event => this.getEventMessage(event)), catchError(this.handleError));
    }
    CreateEmptyOpportunityWithAllFileSave(formData) {
        return this.http.post(`${this.apiUrl + "Opportunity/CreateEmptyOpportunity"}`, formData, {
            observe: 'events'
        }).pipe(map(event => this.getEventMessage(event)), catchError(this.handleError));
    }
    ViewDocument(formData) {
        console.log(this.apiUrl);
        return this.http.post(`${this.apiUrl + "document/viewDocument"}`, formData, {
            observe: 'events'
        }).pipe(map(event => this.getEventMessage(event)), catchError(this.handleError));
    }
    ViewSharePointDocument(formData) {
        console.log(this.apiUrl);
        return this.http.post(`${this.apiUrl + "document/viewSharePointDocument"}`, formData, {
            observe: 'events'
        }).pipe(map(event => this.getEventMessage(event)), catchError(this.handleError));
    }
    AutoParsing(formData) {
        console.log(this.apiUrl);
        return this.http.post(`${this.apiUrl + "document/autoParsing"}`, formData, {
            observe: 'events'
        }).pipe(map(event => this.getEventMessage(event)), catchError(this.handleError));
    }
    DeleteRfpFile(formData) {
        console.log(this.apiUrl);
        return this.http.post(`${this.apiUrl + "document/deleteFile"}`, formData, {
            observe: 'events'
        }).pipe(map(event => this.getEventMessage(event)), catchError(this.handleError));
    }
    GetCategoryNameList() {
        console.log(this.apiUrl);
        return this.http.get(`${this.apiUrl}document/getCategoryNameList`)
            .pipe(catchError(this.handleError));
    }
    getCompanyOppertunityList(publishFlag, companyId) {
        //var companyId=localStorage.getItem('compId');
        //var companyId = 1;
        //if (publishFlag == false) {
        return this.http.get(`${this.apiUrl}document/getCompanyOppertunityList?companyId=${companyId}`)
            .pipe(catchError(this.handleError));
        //}
        //else {GetDocumentList
        //  return this.http.get(`${this.apiUrl}document/GetPublishedDocumentList?companyId=${companyId}`)
        //    .pipe(catchError(this.handleError));
        //}
    }
    GetSavedEmptyOpportunity(opportunityId) {
        //var companyId=localStorage.getItem('compId');
        //var companyId = 1;
        //if (publishFlag == false) {
        return this.http.get(`${this.apiUrl}Opportunity/getSavedEmptyOpportunity?opportunityId=${opportunityId}`)
            .pipe(catchError(this.handleError));
        //}
        //else {GetDocumentList
        //  return this.http.get(`${this.apiUrl}document/GetPublishedDocumentList?companyId=${companyId}`)
        //    .pipe(catchError(this.handleError));
        //}
    }
    save(formData) {
        return this.http.post(`${this.apiUrl + "document/Save"}`, formData)
            .pipe(catchError(this.handleError));
    }
    getOpportunity() {
        return this.http.get(`${this.apiUrl}Opportunity/getopportunity`)
            .pipe(catchError(this.handleError));
    }
    getSavedDocInfo(companyId, userId, documentId) {
        let Params = new HttpParams();
        Params.append('companyId', companyId);
        Params.append('userId', userId);
        Params.append('documentId', documentId);
        // the above paramameter are not in use for instance .
        return this.http.post(`${this.apiUrl}document/GetSavedDocInfo?companyId=${companyId}&userId=${userId}&documentId=${documentId}`, null)
            .pipe(catchError(this.handleError));
    }
    publish(OpportunityId, userId, companyId, clientId, SegmentId) {
        let OppId = Number(OpportunityId);
        return this.http.post(`${this.apiUrl}Opportunity/publish?OpportunityId=${OppId}&userId=${userId}&companyId=${companyId}&clientId=${clientId}&SegmentId=${SegmentId}`, null)
            .pipe(catchError(this.handleError));
    }
    SaveChangedCategoriesAndSummaryData(formData) {
        // let body = JSON.stringify(formData);
        return this.http.post(`${this.apiUrl + "document/saveCategoriesAndSummaryData"}`, formData)
            .pipe(catchError(this.handleError));
    }
    WholeDocumentParseDataSave(formData) {
        return this.http.post(`${this.apiUrl + "document/WholeDocumentParseDataSave"}`, formData, {
            observe: 'events'
        }).pipe(map(event => this.getEventMessage(event)), catchError(this.handleError));
    }
    getEventMessage(event) {
        switch (event.type) {
            case HttpEventType.UploadProgress:
                return this.progress(event);
            case HttpEventType.Response:
                return this.apiResponse(event);
            default:
                return event.type;
        }
    }
    progress(event) {
        const percentDone = Math.round(100 * event.loaded / event.total);
        return { status: 'progress', message: percentDone };
    }
    apiResponse(event) {
        return event.body;
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
RfpDatabaseService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], RfpDatabaseService);
export { RfpDatabaseService };
//# sourceMappingURL=rfp-database.service.js.map