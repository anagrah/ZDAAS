import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ProgressSpinnerService } from 'src/app/shared/services/progress-spinner.service';
import { ActivatedRoute, Router } from '@angular/router';

import { UserManagementWebapiService } from '../../services/user-management-webapi.service';
import { MyErrorStateMatcher } from '../../miscellaneous/ConfirmEqualValidatorDirective';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  password: string = '';
  minPw = 8;
  email: string = '';
  confirmPassword: string = '';
  hide: boolean = true; // hide show password param
  errorMessage: string = '';
  isSuccess: boolean = false;
  passwordUpdateError: string = '';
  //hide1: boolean = true; // hide show confirm password param
  //require: any
  groupForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  constructor(private fb: FormBuilder, public userManagementWebapiService: UserManagementWebapiService,
    private notification: NotificationService,
    public progressSpinnerService: ProgressSpinnerService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.getUserEmail();
  }

  ngOnInit(): void {
    if (localStorage.getItem('Token') || sessionStorage.length > 0) {
      this.router.navigateByUrl('/');
    }
    this.groupForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(this.minPw)]],
      confirmPassword: ['', [Validators.required]]
    },
      { validator: this.checkPasswords });
  }
  private getUserEmail() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.email = params['email'];
      console.log("Email = " + this.email); // Print the parameter to the console. 

    });
  }
  private checkPasswords(group: FormGroup) {
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPassword.value;

    return pass === confirmPass ? null : { notSame: true }
  }


  // form submission 
  public resetPasswordForm(groupForm: FormGroup) {

    if (groupForm.valid == true) {
      if (this.progressSpinnerService.isLoading == false)
        this.progressSpinnerService.isLoading = true;

      if (this.email != '')
        groupForm.value.Username = this.email;
      // make a post request and send to angular service 
      this.userManagementWebapiService.ResetPassword(groupForm.value).subscribe(data => {
        if (data != 0) {
          if (data.code == '200') {
            if (data.response.code == '200') {
              this.isSuccess = true; // change screen to show success message and login button
            } else {
              // show error message
              this.passwordUpdateError = data.response.message;
            }
            //this.router.navigate(['/login']);
          }
          else {
            this.errorMessage = data.message;
          }
          this.progressSpinnerService.isLoading = false;
        }

      })
    }
  }
  //
  getPassword() {
    if (this.groupForm.controls.password.hasError('required')) {

      return 'Password is required';
    }
  }

  getConfirmPassword() {
    if (this.groupForm.controls.confirmPassword.hasError('required')) {
      return 'Confirm Password is required';
    }
    else {
      if (this.groupForm.controls.password.value.toString() != this.groupForm.controls.confirmPassword.value.toString()) {
        return 'Password and Confirm Password does not match';
      }
    }
  }
  onFocus() {
    this.errorMessage = '';
  }
}
