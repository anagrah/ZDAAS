import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MyErrorStateMatcher } from '../../miscellaneous/ConfirmEqualValidatorDirective';
let CreateAccountComponent = class CreateAccountComponent {
    constructor(fb) {
        this.fb = fb;
        this.password = '';
        this.minPw = 8;
        this.hide = true; // hide show password param
        this.matcher = new MyErrorStateMatcher();
        this.emailExists = '';
        this.emailFormControl = new FormControl('', [
            Validators.required,
            Validators.email
        ]);
        this.matcher1 = new ErrorStateMatcher();
        // Dummay data for users
        this.websites = [
            { value: '1', viewValue: 'Admin' },
            { value: '2', viewValue: 'User' }
        ];
        this.email = new FormControl('', [Validators.required, Validators.email]);
    }
    ngOnInit() {
        this.groupForm = this.fb.group({
            password: ['', [Validators.required, Validators.minLength(this.minPw)]]
        });
    }
    createAccountForm(groupForm) {
        debugger;
    }
    getErrorMessage() {
        if (this.email.hasError('required')) {
            return 'You must enter a value';
        }
        return this.email.hasError('email') ? 'Not a valid email' : '';
    }
    getPassword() {
        if (this.groupForm.controls.password.hasError('required')) {
            return 'Password is required';
        }
    }
    onFocus() {
        this.emailExists = '';
    }
};
CreateAccountComponent = __decorate([
    Component({
        selector: 'app-create-account',
        templateUrl: './create-account.component.html',
        styleUrls: ['./create-account.component.scss']
    })
], CreateAccountComponent);
export { CreateAccountComponent };
//# sourceMappingURL=create-account.component.js.map