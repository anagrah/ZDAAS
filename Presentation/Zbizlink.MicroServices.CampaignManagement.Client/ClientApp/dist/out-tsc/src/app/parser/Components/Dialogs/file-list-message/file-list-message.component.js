import { __decorate, __param } from "tslib";
import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
let FileListMessageComponent = class FileListMessageComponent {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        debugger;
        this.rfpFileList = data.rfpFileList;
        this.message = data.message;
    }
    closeDialog() {
        this.dialogRef.close();
    }
    ok() {
        this.dialogRef.close();
    }
    ngOnInit() {
        debugger;
    }
};
FileListMessageComponent = __decorate([
    Component({
        selector: 'app-file-list-message',
        templateUrl: './file-list-message.component.html',
        styleUrls: ['./file-list-message.component.css']
    }),
    __param(0, Optional()),
    __param(0, Inject(MAT_DIALOG_DATA))
], FileListMessageComponent);
export { FileListMessageComponent };
//# sourceMappingURL=file-list-message.component.js.map