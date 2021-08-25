import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { WebApiResponse } from 'src/app/shared/models/WebApiResponse';
import { ProgressSpinnerService } from 'src/app/shared/services/progress-spinner.service';
import { EmailServiceWebapiService } from '../../services/email-service-webapi.service';
import { UserManagementWebapiService } from '../../services/user-management-webapi.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit {
  groupForm: FormGroup;
  emailSendingMessage:string=''; 
  constructor(private formBuilder: FormBuilder,private router: Router,public userManagementWebapiService: UserManagementWebapiService,
    private notification: NotificationService,
    public emailServiceWebapiService: EmailServiceWebapiService,public progressSpinnerService: ProgressSpinnerService) { }

  ngOnInit(): void {
    if (localStorage.getItem('Token') || sessionStorage.length > 0) {
      this.router.navigateByUrl('/');
    }
    this.groupForm = this.formBuilder.group({

    })
  }
  public resendLink(groupForm: FormGroup) 
  {
    this.emailMessage();   
  }

  private emailMessage() { 
    let email = localStorage.getItem('email');
 
 console.log("Sign up Email address to resend an email = " + email);
      if (this.progressSpinnerService.isLoading == false)
        this.progressSpinnerService.isLoading = true;
      this.userManagementWebapiService.GetInActiveUser(email).subscribe(data => {
        if (data != 0 && data != undefined && data != null) { 
           if (data.code == '200') {
            console.log("User found ,now resend email");
            if (data.response.ActivationCode != null)
              this.sendEmail(data.response);
            else {
              this.progressSpinnerService.isLoading = false;
              return this.emailSendingMessage = 'No data found';
            }
          } else {
            this.progressSpinnerService.isLoading = false;
            return this.emailSendingMessage = data.message;
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
        this.emailSendingMessage = res.response.message;
        return setTimeout(() => {
             this.emailSendingMessage ='';
         }, 3000);
         //this.emailSendingMessage = res.response.message; // Email sent success message 
      } else {
        return this.emailSendingMessage = res.response.message; //Email sending fail Error message
      }

    }
  }
}
