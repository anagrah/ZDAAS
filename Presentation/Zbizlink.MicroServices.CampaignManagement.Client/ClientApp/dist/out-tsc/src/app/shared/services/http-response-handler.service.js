import { __decorate } from "tslib";
import { HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
let HttpResponseHandlerService = class HttpResponseHandlerService {
    constructor() { }
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
HttpResponseHandlerService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], HttpResponseHandlerService);
export { HttpResponseHandlerService };
//# sourceMappingURL=http-response-handler.service.js.map