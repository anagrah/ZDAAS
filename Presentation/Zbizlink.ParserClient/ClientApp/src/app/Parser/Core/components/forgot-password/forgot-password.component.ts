import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { NotificationService } from 'src/app/shared/services/notification.service';

import { WebApiResponse } from 'src/app/shared/models/WebApiResponse';
import { Router } from '@angular/router';
import { ProgressSpinnerService } from 'src/app/shared/services/progress-spinner.service';
import { EmailServiceWebapiService } from '../../services/email-service-webapi.service';
import { UserManagementWebapiService } from '../../services/user-management-webapi.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  hide: boolean = false;
  emailSuccessFailureMessage: string = '';
  isSuccess: boolean = false;
  constructor(public userManagementWebapiService: UserManagementWebapiService,
    public emailServiceWebapiService: EmailServiceWebapiService,
    private notification: NotificationService, private router: Router, public progressSpinnerService: ProgressSpinnerService) { }

  ngOnInit(): void { 
    if (localStorage.getItem('Token') || sessionStorage.length > 0) {
      this.router.navigateByUrl('/');
    }
  }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new ErrorStateMatcher();
  public forgotPassword() {
    if (this.emailFormControl.valid) {
      if (this.progressSpinnerService.isLoading == false)
        this.progressSpinnerService.isLoading = true;
      this.userManagementWebapiService.GetUser(this.emailFormControl.value).subscribe(data => {
        if (data != 0 && data != undefined && data != null) {
           if (data.code == '200') {
            if (data.response.ActivationCode != null)
              this.sendEmail(data.response);
            else {
              this.progressSpinnerService.isLoading = false;
              return this.emailSuccessFailureMessage = 'No data found';
            }
          } else {
            this.progressSpinnerService.isLoading = false;
            return this.emailSuccessFailureMessage = data.message;
          }

        }
      },
      (error: any) => {
        console.log(error);
        this.notification.error(error);
        this.progressSpinnerService.isLoading = false; 
      }
    
    )
    }
  }
  // sending email after updating user  is updated
  private sendEmail(user: any) {
    var formData = this.userParams(user);
    this.emailServiceWebapiService.EmailSender(formData).subscribe(emailResponse => {
      if (emailResponse !== undefined && emailResponse != null) {
        this.sendEmailResponse(emailResponse);
      }
    });
  }
  // made because need to send email instead of username
  private userParams(user: any) {
    return {
      FirstName: user.FirstName,
      LastName: user.LastName,
      Email: user.Email,
      ActivationCode: user.ActivationCode,
      EmailCategory: 3,
      Url: 'reset-password'
    };
  }

  // email response 
  private sendEmailResponse(res: WebApiResponse) {
    if (res && res.code == '200') {
      // success
      this.progressSpinnerService.isLoading = false;
      if (res.response.code == '200') {
        this.isSuccess = true;
        return this.emailSuccessFailureMessage = 'Your request to reset password has been received, please follow given link to reset your password.' //res.response.message; // Email sent success message 
      } else {
        return this.emailSuccessFailureMessage = res.response.message; //Email sending fail Error message
      }

    }
  }
  onFocus() {
    this.emailSuccessFailureMessage = '';
  }
}
