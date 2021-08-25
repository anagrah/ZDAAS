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

  get apiBaseUrl() {

    if (!this.appConfig) {
      throw Error('Config file not loaded!');
    }

    return this.appConfig.apiBaseUrl + '/api/';
  }
  get sharepointapiUrl() {

    if (!this.appConfig) {
      throw Error('Config file not loaded!');
    }

    return this.appConfig.sharepointapiUrl + '/';
  }
  get userManagementApiUrl() {
    if (!this.appConfig) {
      throw Error('Config file not loaded!');
    }
    console.log("<-------URL Hit by admin----------->\n" + this.appConfig.userManagementApiUrl);
    return this.appConfig.userManagementApiUrl;
  }
  get emailSenderApiUrl() {
    if (!this.appConfig) {
      throw Error('Config file not loaded!');
    }
    return this.appConfig.emailSenderApiUrl + '/api/';
  } 
  get crmApiUrl() {
    if (!this.appConfig) {
      throw Error('Config file not loaded!');
    }
    return this.appConfig.crmApiUrl + '/api/';
  }
}

