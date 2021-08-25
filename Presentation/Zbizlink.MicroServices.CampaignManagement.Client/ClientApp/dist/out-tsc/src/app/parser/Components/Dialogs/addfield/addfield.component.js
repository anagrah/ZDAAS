import { __decorate, __param } from "tslib";
import { Component, Inject, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SummaryField } from 'src/app/parser/models/SummaryField';
let AddfieldComponent = class AddfieldComponent {
    constructor(fb, el, dialogRef, data) {
        this.fb = fb;
        this.el = el;
        this.dialogRef = dialogRef;
        this.id = 0;
        this.fieldtypes = ['TextBox', 'DateTime'];
        this.fieldLabel = '';
        this.required = false;
        this.controlTypes = [
            { typeCode: 1, typeValue: 'TextBox' },
            { typeCode: 3, typeValue: 'DateTime' }
        ];
        console.log('--->' + data.id + '<---');
        this.id = data.id;
        this.summary = data.summary;
    }
    ngOnInit() {
        this.groupForm = this.fb.group({
            labelfield: ['', [Validators.required]],
            typefield: ['', [Validators.required]]
        });
    }
    Cancel() {
        this.dialogRef.close();
    }
    ChangeFieldType(e) {
        debugger;
        if (e !== undefined && e.value !== undefined) {
            let strValue = e.value;
            let arr = strValue.indexOf(':') === 1 ? strValue.split(': ') : [0];
            this.fieldType = arr[0] === 0 ? strValue : arr[1].toString();
        }
    }
    getErrorMessage() {
        if (this.groupForm.controls.labelfield.hasError('required')) {
            return 'You must enter a value';
        }
        //return this.groupForm.controls.labelfield.hasError('email') ? 'Not a valid email' : '';
    }
    Done() {
        debugger;
        if (this.groupForm.valid) {
            console.log('---> ' + this.fieldLabel + ' <---');
            console.log('---> ' + this.fieldType + ' <---');
            //this.summary.addField(this,this.id,this.fieldLabel,this.fieldType);
            //this.dialogRef.close();
            //this.summarArray = new Array<SummaryField>();
            this.summaryField = new SummaryField(this.fieldLabel, this.fieldType, "", 0, 0);
            this.dialogRef.close(this.summaryField);
        }
        else {
            if (this.groupForm.get('typefield').hasError) {
                this.fieldTypeElement.focus();
            }
        }
    }
};
__decorate([
    ViewChild("fieldtype", { static: false })
], AddfieldComponent.prototype, "fieldTypeElement", void 0);
AddfieldComponent = __decorate([
    Component({
        selector: 'app-addfield-dialog',
        templateUrl: './addfield.component.html',
        styleUrls: ['./addfield.component.css']
    }),
    __param(3, Inject(MAT_DIALOG_DATA))
], AddfieldComponent);
export { AddfieldComponent };
//# sourceMappingURL=addfield.component.js.map