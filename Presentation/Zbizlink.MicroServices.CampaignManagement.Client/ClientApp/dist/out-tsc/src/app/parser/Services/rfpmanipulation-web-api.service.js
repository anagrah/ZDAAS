import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators/catchError';
import { map } from 'rxjs/internal/operators/map';
let RFPManipulationWebApiService = class RFPManipulationWebApiService {
    constructor(http, appConfigService, httpResponseHandlerService) {
        this.http = http;
        this.appConfigService = appConfigService;
        this.httpResponseHandlerService = httpResponseHandlerService;
        this.apiUrl = this.appConfigService.apiBaseUrl;
    }
    CreateEmptyOpportunity(formData) {
        console.log(this.apiUrl);
        return this.http.post(`${this.apiUrl + "Opportunity/CreateEmptyOpportunity"}`, formData, {
            observe: 'events'
        }).pipe(map(event => this.httpResponseHandlerService.getEventMessage(event)), catchError(this.httpResponseHandlerService.handleError));
    }
    SaveFiles(formData) {
        console.log(this.apiUrl);
        return this.http.post(`${this.apiUrl + "document/saveFile"}`, formData, {
            observe: 'events'
        }).pipe(map(event => this.httpResponseHandlerService.getEventMessage(event)), catchError(this.httpResponseHandlerService.handleError));
    }
    CreateEmptyOpportunityWithAllFileSave(formData) {
        return this.http.post(`${this.apiUrl + "Opportunity/CreateEmptyOpportunity"}`, formData, {
            observe: 'events'
        }).pipe(map(event => this.httpResponseHandlerService.getEventMessage(event)), catchError(this.httpResponseHandlerService.handleError));
    }
    ViewDocument(formData) {
        console.log(this.apiUrl);
        return this.http.post(`${this.apiUrl + "document/viewDocument"}`, formData, {
            observe: 'events'
        }).pipe(map(event => this.httpResponseHandlerService.getEventMessage(event)), catchError(this.httpResponseHandlerService.handleError));
    }
    ViewSharePointDocument(formData) {
        console.log(this.apiUrl);
        return this.http.post(`${this.apiUrl + "document/viewSharePointDocument"}`, formData, {
            observe: 'events'
        }).pipe(map(event => this.httpResponseHandlerService.getEventMessage(event)), catchError(this.httpResponseHandlerService.handleError));
    }
    AutoParsing(formData) {
        console.log(this.apiUrl);
        return this.http.post(`${this.apiUrl + "document/autoParsing"}`, formData, {
            observe: 'events'
        }).pipe(map(event => this.httpResponseHandlerService.getEventMessage(event)), catchError(this.httpResponseHandlerService.handleError));
    }
    DeleteRfpFile(formData) {
        console.log(this.apiUrl);
        return this.http.post(`${this.apiUrl + "document/deleteFile"}`, formData, {
            observe: 'events'
        }).pipe(map(event => this.httpResponseHandlerService.getEventMessage(event)), catchError(this.httpResponseHandlerService.handleError));
    }
    GetCategoryNameList() {
        console.log(this.apiUrl);
        return this.http.get(`${this.apiUrl}document/getCategoryNameList`)
            .pipe(catchError(this.httpResponseHandlerService.handleError));
    }
    getCompanyOppertunityList(publishFlag, companyId) {
        return this.http.get(`${this.apiUrl}document/getCompanyOppertunityList?companyId=${companyId}`)
            .pipe(catchError(this.httpResponseHandlerService.handleError));
    }
    GetSavedEmptyOpportunity(opportunityId) {
        return this.http.get(`${this.apiUrl}Opportunity/getSavedEmptyOpportunity?opportunityId=${opportunityId}`)
            .pipe(catchError(this.httpResponseHandlerService.handleError));
    }
    save(formData) {
        debugger;
        return this.http.post(`${this.apiUrl + "document/Save"}`, formData)
            .pipe(catchError(this.httpResponseHandlerService.handleError));
    }
    getOpportunity() {
        return this.http.get(`${this.apiUrl}Opportunity/getopportunity`)
            .pipe(catchError(this.httpResponseHandlerService.handleError));
    }
    getSavedDocInfo(companyId, userId, documentId) {
        let Params = new HttpParams();
        Params.append('companyId', companyId);
        Params.append('userId', userId);
        Params.append('documentId', documentId);
        // the above paramameter are not in use for instance .
        return this.http.post(`${this.apiUrl}document/GetSavedDocInfo?companyId=${companyId}&userId=${userId}&documentId=${documentId}`, null)
            .pipe(catchError(this.httpResponseHandlerService.handleError));
    }
    publish(OpportunityId, userId, companyId, clientId, SegmentId) {
        let OppId = Number(OpportunityId);
        return this.http.post(`${this.apiUrl}Opportunity/publish?OpportunityId=${OppId}&userId=${userId}&companyId=${companyId}&clientId=${clientId}&SegmentId=${SegmentId}`, null)
            .pipe(catchError(this.httpResponseHandlerService.handleError));
    }
    SaveChangedCategoriesAndSummaryData(formData) {
        // let body = JSON.stringify(formData);
        return this.http.post(`${this.apiUrl + "document/saveCategoriesAndSummaryData"}`, formData)
            .pipe(catchError(this.httpResponseHandlerService.handleError));
    }
    WholeDocumentParseDataSave(formData) {
        return this.http.post(`${this.apiUrl + "document/WholeDocumentParseDataSave"}`, formData, {
            observe: 'events'
        }).pipe(map(event => this.httpResponseHandlerService.getEventMessage(event)), catchError(this.httpResponseHandlerService.handleError));
    }
};
RFPManipulationWebApiService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], RFPManipulationWebApiService);
export { RFPManipulationWebApiService };
//# sourceMappingURL=rfpmanipulation-web-api.service.js.map