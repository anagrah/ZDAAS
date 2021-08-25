import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpResponseHandlerService {

  constructor() { }

  public getEventMessage(event: HttpEvent<any>) {
  
    switch (event.type) {
      case HttpEventType.UploadProgress:
        return this.progress(event);
      case HttpEventType.Response:
        return this.apiResponse(event);
      default:
        return event.type;
    }
      }
  
      private progress(event) {
        const percentDone = Math.round(100 * event.loaded / event.total);
        return { status: 'progress', message: percentDone };
      }
    
      private apiResponse(event) {
        return event.body;
      }
  
      public handleError(error: HttpErrorResponse) {
  
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
         
        //return throwError(error); 
        return throwError('Something bad happened. Please try again later.');
      }
      
}
