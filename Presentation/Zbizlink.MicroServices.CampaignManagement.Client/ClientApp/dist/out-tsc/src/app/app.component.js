// import { Component } from '@angular/core';
import { __decorate } from "tslib";
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   title = 'ZdaasAdminPenal';
// }
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.route.queryParams.forEach(params => {
            if (typeof params.compid != 'undefined') {
                typeof params.compid === 'undefined' ? localStorage.setItem('compId', '0') : localStorage.setItem('compId', params.compid);
                typeof params.userid === 'undefined' ? localStorage.setItem('userid', '0') : localStorage.setItem('userid', params.userid);
                typeof params.companySegmentID === 'undefined' ? localStorage.setItem('companySegmentID', '0') : localStorage.setItem('companySegmentID', params.companySegmentID);
                typeof params.clientID === 'undefined' ? localStorage.setItem('clientID', '0') : localStorage.setItem('clientID', params.clientID);
            }
        });
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map