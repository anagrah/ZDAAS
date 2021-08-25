import { __decorate } from "tslib";
import { Component } from '@angular/core';
let MenuComponent = class MenuComponent {
    constructor(router, auth, nav, utility) {
        this.router = router;
        this.auth = auth;
        this.nav = nav;
        this.utility = utility;
        this.isHidden = false;
    }
    ngOnInit() {
        this.hideShowLogOutBtn();
    }
    logout() {
        this.nav.logout();
        this.router.navigate(['/login-user']);
    }
    // If user came from zbizlink site , hide logout button,due to direct login ,Else for parser user it will be shown 
    hideShowLogOutBtn() {
        // this.isHidden = true;
        if (this.utility.loggedIn()) // For logged in user show logout button
            this.nav.show();
        else
            this.nav.hide(); // For logged out user hide logout button
        // this.isHidden = false;
    }
};
MenuComponent = __decorate([
    Component({
        selector: 'app-menu',
        templateUrl: './menu.component.html',
        styleUrls: ['./menu.component.scss']
    })
], MenuComponent);
export { MenuComponent };
//# sourceMappingURL=menu.component.js.map