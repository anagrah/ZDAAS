import { __decorate, __param } from "tslib";
import { Component, Optional } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
let OpportunityNameComponent = class OpportunityNameComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.name = new FormControl('', [Validators.required]);
    }
    ngOnInit() {
    }
    closeDialogOpp() {
        this.dialogRef.close();
    }
    onSubmit() {
        console.log(name);
        //debugger;
        if (String(this.name.value).trim() !== "") {
            this.dialogRef.close(this.name.value);
        }
        else {
            this.name.setValue("");
        }
    }
    getErrorMessage() {
        if (this.name.hasError('required')) {
            return 'You must enter a value';
        }
    }
};
OpportunityNameComponent = __decorate([
    Component({
        selector: 'app-opportunity-name',
        templateUrl: './opportunity-name.component.html',
        styleUrls: ['./opportunity-name.component.css']
    }),
    __param(0, Optional())
], OpportunityNameComponent);
export { OpportunityNameComponent };
//# sourceMappingURL=opportunity-name.component.js.map