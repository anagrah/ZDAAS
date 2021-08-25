import { __decorate, __param } from "tslib";
import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
let DuplicateDocumentListComponent = class DuplicateDocumentListComponent {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.duplicateFileList = [];
        debugger;
        this.duplicateFileList = data.duplicateFileList;
    }
    ngOnInit() {
        this.SetMessage();
    }
    SetMessage() {
        if (this.duplicateFileList.length === 1) {
            this.message = "Following file is already attached. this file can not be re-attached";
        }
        else if (this.duplicateFileList.length > 1) {
            this.message = "Following files are already attached. these files can not be re-attached";
        }
    }
    closeDialog() {
        this.dialogRef.close();
    }
    ok() {
        this.dialogRef.close();
    }
};
DuplicateDocumentListComponent = __decorate([
    Component({
        selector: 'app-duplicate-document-list',
        templateUrl: './duplicate-document-list.component.html',
        styleUrls: ['./duplicate-document-list.component.css']
    }),
    __param(0, Optional()),
    __param(0, Inject(MAT_DIALOG_DATA))
], DuplicateDocumentListComponent);
export { DuplicateDocumentListComponent };
//# sourceMappingURL=duplicate-document-list.component.js.map