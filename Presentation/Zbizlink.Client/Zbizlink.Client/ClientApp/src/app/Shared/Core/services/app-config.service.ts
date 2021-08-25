import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  private appConfig: any;

  constructor(private http: HttpClient) { }

  loadAppConfig() {
    return this.http.get('/assets/config.json')
      .toPromise()
      .then(data => {
        this.appConfig = data;
      });
  }

  get userAuthApiUrl() {
    if (!this.appConfig) {
      throw Error('Config file not loaded!');
    }
    console.log("<-------URL Hit by user----------->\n" + this.appConfig.userAuthApiUrl);
    return this.appConfig.userAuthApiUrl + '/api';
  }

}

