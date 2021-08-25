import { __decorate, __param } from "tslib";
import { Component, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
let ConfirmationMessageComponent = class ConfirmationMessageComponent {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
    }
    ngOnInit() {
    }
    closeDialog() {
        this.dialogRef.close(false);
    }
};
ConfirmationMessageComponent = __decorate([
    Component({
        selector: 'app-confirmation-message',
        templateUrl: './confirmation-message.component.html',
        styleUrls: ['./confirmation-message.component.css']
    }),
    __param(0, Optional()),
    __param(0, Inject(MAT_DIALOG_DATA))
], ConfirmationMessageComponent);
export { ConfirmationMessageComponent };
//# sourceMappingURL=confirmation-message.component.js.map