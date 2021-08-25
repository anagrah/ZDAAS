import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let UtilityService = class UtilityService {
    constructor() { }
    // Get token
    loggedIn() {
        return !!localStorage.getItem('Token');
    }
};
UtilityService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UtilityService);
export { UtilityService };
//# sourceMappingURL=utility.service.js.map