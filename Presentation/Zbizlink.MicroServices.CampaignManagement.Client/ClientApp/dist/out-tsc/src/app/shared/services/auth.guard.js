import { __decorate } from "tslib";
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
let AuthGuard = class AuthGuard {
    constructor(UserManagementWebapiService, router, utility) {
        this.UserManagementWebapiService = UserManagementWebapiService;
        this.router = router;
        this.utility = utility;
    }
    canActivate() {
        if (this.isZibilinkUser()) {
            return true;
        }
        else {
            if (this.utility.loggedIn()) {
                return true;
            }
            else {
                this.router.navigate(['/login-user']);
                return false;
            }
        }
    }
    // check ,zbizlink user
    isZibilinkUser() {
        if (sessionStorage.length == 0)
            this.getParamValueQueryString();
        console.log("Company id = " + sessionStorage.getItem('compId') + " company SegmentID = " + sessionStorage.getItem('companySegmentID') + " clientID =  " + sessionStorage.getItem('clientID'));
        if (sessionStorage.getItem('compId') && sessionStorage.getItem('companySegmentID') && sessionStorage.getItem('clientID')) {
            return true;
        }
        else
            return false;
    }
    getParamValueQueryString() {
        const url = window.location.href;
        console.log("TRFP Parser url = " + url);
        if (url.includes('?')) {
            const httpParams = new HttpParams({ fromString: url.split('?')[1] });
            var compId = httpParams.get('compId');
            var userid = httpParams.get('userid');
            var companySegmentID = httpParams.get('companySegmentID');
            var clientID = httpParams.get('clientID');
            // set values in session
            if (userid != null && companySegmentID != null && clientID != null) {
                sessionStorage.setItem('compId', compId);
                sessionStorage.setItem('userid', userid);
                sessionStorage.setItem('companySegmentID', companySegmentID);
                sessionStorage.setItem('clientID', clientID);
                console.log("TRFP Parser url + params = " + url + "Company id = " + sessionStorage.getItem('compId') + " company SegmentID = " + sessionStorage.getItem('companySegmentID') + " clientID =  " + sessionStorage.getItem('clientID'));
                // clear token if it exists 
                localStorage.removeItem('Token');
            }
        }
    }
};
AuthGuard = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map