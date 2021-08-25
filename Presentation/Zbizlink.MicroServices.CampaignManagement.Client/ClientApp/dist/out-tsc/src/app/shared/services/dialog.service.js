import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
let DialogService = class DialogService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog(dialogParams) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.width = dialogParams.width;
        if (dialogParams.disableClose !== undefined) {
            dialogConfig.disableClose = dialogParams.disableClose;
        }
        else {
            dialogConfig.disableClose = true;
        }
        if (dialogParams.autoFocus !== undefined) {
            dialogConfig.autoFocus = dialogParams.autoFocus;
        }
        else {
            dialogConfig.autoFocus = true;
        }
        if (dialogParams.data !== undefined) {
            dialogConfig.data = dialogParams.data;
        }
        return this.dialog.open(dialogParams.dailogComponent, dialogConfig);
    }
};
DialogService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], DialogService);
export { DialogService };
//# sourceMappingURL=dialog.service.js.map