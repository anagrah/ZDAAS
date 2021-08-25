import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let NotificationService = class NotificationService {
    constructor(SnackBar) {
        this.SnackBar = SnackBar;
        this.config = {
            duration: 6000,
            horizontalPosition: "right",
            verticalPosition: "bottom"
        };
    }
    success(msg) {
        this.config['panelClass'] = ['notification', 'success'];
        this.SnackBar.open(msg, '', this.config);
    }
    error(msg) {
        this.config['panelClass'] = ['notification', 'error'];
        this.SnackBar.open(msg, '', this.config);
    }
    warning(msg) {
        this.config['panelClass'] = ['notification', 'warning'];
        this.SnackBar.open(msg, '', this.config);
    }
};
NotificationService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], NotificationService);
export { NotificationService };
//# sourceMappingURL=notification.service.js.map