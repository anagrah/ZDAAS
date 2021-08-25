import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
let LoginComponent = class LoginComponent {
    constructor(fb, notification, progressSpinnerService, route, router, nav) {
        this.fb = fb;
        this.notification = notification;
        this.progressSpinnerService = progressSpinnerService;
        this.route = route;
        this.router = router;
        this.nav = nav;
        this.isHidden = false;
        this.email = '';
        this.password = '';
        this.hide = true;
        this.matcher = new ErrorStateMatcher();
        this.errorMessage = '';
        // private logInFormResponse(res: WebApiResponse) {  
        //   if (res.code =='200') { 
        //     if (res.response !=undefined && res.response!=null) {
        //       this.userInformationStore(res);
        //       this.nav.show();
        //       this.redirect(); 
        //     }
        //     else
        //       this.errorMessage = res.message;  
        //   } else if (res.code != '200') { 
        //       this.errorMessage = res.message; 
        //   }  
        // } 
        // Email validator.
        this.emailFormControl = new FormControl('', [
            Validators.required,
            Validators.email,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
        ]);
    }
    ngOnInit() {
        if (localStorage.getItem('Token') || sessionStorage.length > 0) { // if token or session exists then it will not redirect to login page
            this.redirect();
        }
        this.groupForm = this.fb.group({
            password: ['', [Validators.required]]
        });
    }
    logInForm(groupForm) {
        if (groupForm.valid == true && this.emailFormControl.valid == true) {
            groupForm.value.Username = this.emailFormControl.value;
            if (this.progressSpinnerService.isLoading == false)
                this.progressSpinnerService.isLoading = true;
            // this.userManagementWebapiService.Login(groupForm.value).subscribe(response => { 
            //   if ( response !=0 && response !== undefined && response != null) { 
            //     this.logInFormResponse(response);
            //     this.progressSpinnerService.isLoading = false;
            //   }  
            // }) 
        }
    }
    userInformationStore(data) {
        localStorage.setItem('currentUser', JSON.stringify(data.response));
        localStorage.setItem("Token", data.response.Token);
        localStorage.setItem('compId', data.response.companyId);
        // var user = new User;
        // user = data.response;
        this.isHidden = false;
        sessionStorage.clear();
    }
    getPassword() {
        if (this.groupForm.controls.password.hasError('required')) {
            return 'Password is required';
        }
    }
    redirect() {
        this.router.navigateByUrl('/'); //use the stored url here
    }
    onFocus() {
        this.errorMessage = '';
    }
};
__decorate([
    Input()
], LoginComponent.prototype, "isHidden", void 0);
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map