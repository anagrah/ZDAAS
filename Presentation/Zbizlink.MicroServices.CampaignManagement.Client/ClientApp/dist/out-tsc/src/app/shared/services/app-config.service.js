import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AppConfigService = class AppConfigService {
    constructor(http) {
        this.http = http;
    }
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
};
AppConfigService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AppConfigService);
export { AppConfigService };
//# sourceMappingURL=app-config.service.js.map