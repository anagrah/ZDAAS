import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WebApiResponse } from 'src/app/shared/models/WebApiResponse';
import { ProgressSpinnerService } from 'src/app/shared/services/progress-spinner.service';

import { EmailServiceWebapiService } from '../../services/email-service-webapi.service';
import { UserManagementWebapiService } from '../../services/user-management-webapi.service';

@Component({
  selector: 'app-confirm-user',
  templateUrl: './confirm-user.component.html',
  styleUrls: ['./confirm-user.component.css']
})
export class ConfirmUserComponent implements OnInit {
  activationCode: string = '';
  email: string = ''; 
  isSuccess: boolean = false;
  groupForm: FormGroup; 
  emailSuccessFailureMessage: string = '';
  userConfirmationMessage: string = '';
  constructor(private activatedRoute: ActivatedRoute, 
    public userManagementWebapiService: UserManagementWebapiService,
    private emailServiceWebapiService: EmailServiceWebapiService, public progressSpinnerService: ProgressSpinnerService,
    private router: Router,private fb: FormBuilder) {
    this.getUserActivationCodeAndEmail();
  }

  private getUserActivationCodeAndEmail() { 
    if (this.progressSpinnerService.isLoading == false)
        this.progressSpinnerService.isLoading = true;
    this.activatedRoute.queryParams.subscribe(params => {
      this.activationCode = params['activationCode'];
      this.email = params['email'];
      console.log(this.activationCode + " email = " + this.email); // Print the parameter to the console. 
      if (this.activationCode != '' && this.email != '') {
        this.activateUser(this.activationCode, this.email); 
      }      
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem('Token') || sessionStorage.length > 0) {
      this.router.navigateByUrl('/');
    }
  }
  // confirm User
  public activateUser(activationCode: string, email: string) {
     this.userManagementWebapiService.ActivateUser(activationCode, email).subscribe(response => {
      if (response !== 0 && response !== undefined && response != null) {
          this.activationResponse(response);
      }

    })

  }
  // activation user response 
  private activationResponse(apiResponse: WebApiResponse) {
    this.progressSpinnerService.isLoading = false;
    if (apiResponse.code == '200') {
      // if is Success confirmation  show thank you screen
      if (apiResponse.response.code == '200') {
        this.isSuccess = true;
        localStorage.removeItem('email'); // remove email after user is confirmed 
        return this.userConfirmationMessage = 'Your registration is confirmed, you can login to continue.';
      } else if (apiResponse.response.code == '500') {
        // if already confirmed
        this.isSuccess = true;
        return this.userConfirmationMessage = apiResponse.response.message;
      } else {
        // else show resend email screen 
        this.isSuccess = false; 
      }

    }
  }
  // Resend email if verification link has expired 
  public resendEmailLink() {
    if (this.activationCode != '' && this.email != '') {
      if (this.progressSpinnerService.isLoading == false)
          this.progressSpinnerService.isLoading = true;
      // update user activation code and expiray date before sending email        
      this.groupForm = this.fb.group({
        Email: this.email
     });
      this.updateUser(this.groupForm.value);
    }
  }
 
  private updateUser(groupForm: FormGroup) {      
    this.userManagementWebapiService.UpdateUser(groupForm).subscribe(data => {
      if (data != 0 && data != undefined && data != null) {
        if (data.code == '200') 
            this.sendEmail(data.response);
        else{
          this.progressSpinnerService.isLoading = false;
          return this.emailSuccessFailureMessage = data.message;           
        }         
      }
    })
  }
  // sending email after expiry link is updated
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
      Email: user.Username,
      ActivationCode: user.ActivationCode,
      EmailCategory:2,
      Url:'confirm-user'
    };
  }

  // email response 
  private sendEmailResponse(res: WebApiResponse) {
    if (res && res.code == '200') {
      // success
      this.progressSpinnerService.isLoading = false;
      if (res.response.code == '200') {
        return this.emailSuccessFailureMessage = res.response.message; // Email sent success message 
      } else {
        return this.emailSuccessFailureMessage = res.response.message; //Email sending fail Error message
      }
    } 
  }
}
