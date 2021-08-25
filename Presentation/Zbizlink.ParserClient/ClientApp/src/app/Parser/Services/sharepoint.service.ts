import { Injectable } from '@angular/core';
import { AppConfigService } from 'src/app/shared/services/app-config.service';
import { Observable, throwError, observable } from 'rxjs';
import { HttpErrorResponse, HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({
  providedIn: 'root'
})
export class SharepointService {

 private sharepointapiUrl = this.appConfigService.sharepointapiUrl;
  
  
  constructor(private appConfigService: AppConfigService, private http: HttpClient) { }


  UploadFilesSharePoint(formData: FormData): Observable<any>
  {
    console.log(" //SharePoint Akmal")
    formData.forEach((value,key) => {
        console.log(key+" "+value)
    });
    debugger;
    console.log('>>>>>share point url<<<<<');
    console.log('>>>>>'+this.sharepointapiUrl+'<<<<<');
    return this.http.post<any>(`${this.sharepointapiUrl + "api/Document/BulkUpload"}`,formData)
    .pipe(catchError(this.handleError));
  }

  DeleteFilesSharePoint(params: HttpParams): Observable<any>
  {
    debugger;
    console.log('>>>>>share point url<<<<<');
    console.log('>>>>>'+this.sharepointapiUrl+'<<<<<');
    return this.http.delete<any>(`${this.sharepointapiUrl + "api/Document/Delete"}`,{observe: 'body', params: params})
    .pipe(catchError(this.handleError));
  }

  GetFileSharePoint(params: HttpParams): Observable<any>
  {
    debugger;
    console.log('>>>>>share point url<<<<<');
    console.log('>>>>>'+this.sharepointapiUrl+'<<<<<');
    
    return this.http.get<any>(`${this.sharepointapiUrl + "api/Document/Download"}`, {observe: 'body', params: params})
    .pipe(catchError(this.handleError));
  }

  

  private handleError(error: HttpErrorResponse) {

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
