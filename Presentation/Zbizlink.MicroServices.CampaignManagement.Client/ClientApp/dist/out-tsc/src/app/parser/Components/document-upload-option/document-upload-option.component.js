import { __decorate, __param } from "tslib";
import { Component, Optional } from '@angular/core';
let DocumentUploadOptionComponent = class DocumentUploadOptionComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.categories = [
            { value: 'category_2', viewValue: 'Scope' },
            { value: 'category_3', viewValue: 'Background' },
            { value: 'category_4', viewValue: 'Labor' }
        ];
    }
    ngOnInit() {
    }
    closeDialogOpp() {
        this.dialogRef.close();
    }
    ok() {
        this.dialogRef.close(this.categoryDropdownSelectedValue);
    }
};
DocumentUploadOptionComponent = __decorate([
    Component({
        selector: 'app-document-upload-option',
        templateUrl: './document-upload-option.component.html',
        styleUrls: ['./document-upload-option.component.css']
    }),
    __param(0, Optional())
], DocumentUploadOptionComponent);
export { DocumentUploadOptionComponent };
//# sourceMappingURL=document-upload-option.component.js.map