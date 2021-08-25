import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppConfigService } from 'src/app/shared/services/app-config.service';
import { HttpResponseHandlerService } from 'src/app/shared/services/http-response-handler.service';


@Injectable({
  providedIn: 'root'
})
export class EmailServiceWebapiService {

  private emailSenderAPIUrl = this.appConfigService.emailSenderApiUrl;
  constructor(private httpResponseHandlerService: HttpResponseHandlerService,
    private appConfigService: AppConfigService,
    private http: HttpClient)
     { }

  public EmailSender(user: any): Observable<any> {
    console.log('Email service URL = ' + this.emailSenderAPIUrl + "EmailSender");
    // var url='http://localhost:53643/api/EmailSender';
    return this.http.post<any>(`${this.emailSenderAPIUrl + "EmailSender"}`, user, { observe: 'events' }).pipe(map((event) => {
      return this.httpResponseHandlerService.getEventMessage(event)
    }), catchError(this.httpResponseHandlerService.handleError)
    );
  } 
}
