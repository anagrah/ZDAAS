import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let NavbarService = class NavbarService {
    constructor() {
        this.visible = false;
        this.ifTokenExists();
    }
    ngOnInit() {
    }
    hide() {
        this.visible = false;
    }
    ifTokenExists() {
        if (localStorage.getItem('Token'))
            this.visible = true;
    }
    show() { this.visible = true; }
    toggle() { this.visible = !this.visible; }
    // Logout user
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem('Token');
        sessionStorage.clear();
        localStorage.clear();
        this.hide();
        return true;
    }
};
NavbarService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], NavbarService);
export { NavbarService };
//# sourceMappingURL=navbar.service.js.map