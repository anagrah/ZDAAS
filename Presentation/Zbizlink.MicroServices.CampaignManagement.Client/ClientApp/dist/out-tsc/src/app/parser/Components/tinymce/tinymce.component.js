import { __decorate, __param } from "tslib";
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
let TinymceComponent = class TinymceComponent {
    constructor(fb, dialogRef, data) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.OppoertunityDataArray = [];
        this.description = data.title;
        this.OppoertunityDataArray = data.opportunityData;
    }
    ngOnInit() {
        this.tinyData = this.getDataForTinymce();
    }
    getDataForTinymce() {
        let data = "";
        let onlyData = "";
        if (this.OppoertunityDataArray.length === 1 && this.OppoertunityDataArray[0].getAttribute('data-temptrow') !== null) {
            if (this.OppoertunityDataArray[0].getAttribute('data-temptrow').valueOf() === 'true') {
                return "";
            }
        }
        for (let index = 0; index < this.OppoertunityDataArray.length; index++) {
            const element = this.OppoertunityDataArray[index];
            //let el: Element = element.getAttribute("");
            onlyData = element.innerHTML;
            data += element.outerHTML;
        }
        if (onlyData.trim() == '.') {
            data = undefined;
        }
        return data;
    }
    ok() {
        this.dialogRef.close(this.tinyData);
    }
    Cancel() {
        this.dialogRef.close();
    }
};
TinymceComponent = __decorate([
    Component({
        selector: 'app-tinymce',
        templateUrl: './tinymce.component.html',
        styleUrls: ['./tinymce.component.css']
    }),
    __param(2, Inject(MAT_DIALOG_DATA))
], TinymceComponent);
export { TinymceComponent };
//# sourceMappingURL=tinymce.component.js.map