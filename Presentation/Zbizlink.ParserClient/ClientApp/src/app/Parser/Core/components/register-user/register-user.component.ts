import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MyErrorStateMatcher } from '../../miscellaneous/ConfirmEqualValidatorDirective';
import { RegisterUserService } from '../../services/register-user.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ProgressSpinnerService } from 'src/app/shared/services/progress-spinner.service';
import { WebApiResponse } from 'src/app/shared/models/WebApiResponse';
import { EmailServiceWebapiService } from '../../services/email-service-webapi.service';
import { UserManagementWebapiService } from '../../services/user-management-webapi.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})

export class RegisterUserComponent implements OnInit {
  hide: boolean = true; // hide show password param
  hide1: boolean = true; // hide show confirm password param
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  businessName: string = '';
  phoneNumber: string = '';
  password: string = '';
  minPw = 8;
  confirmPassword: string = '';
  minPhoneNumberLength = 5;
  emailExists: string = '';
  registerError: string = '';
  //require: any
  groupForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  constructor(private fb: FormBuilder, public userManagementWebapiService: UserManagementWebapiService,
    public emailServiceWebapiService: EmailServiceWebapiService,
    private notification: NotificationService,
    public progressSpinnerService: ProgressSpinnerService, private route: ActivatedRoute, 
    private router: Router,
    private registerUserService: RegisterUserService
  ) { }


  ngOnInit(): void {
    if (localStorage.getItem('Token') || sessionStorage.length > 0) {
      this.router.navigateByUrl('/');
    }
    this.groupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      businessName: ['', Validators.required],
      phoneNumber: ['', [Validators.required,Validators.pattern('[- +()0-9]{5,}')]],
      password: ['', [Validators.required, Validators.minLength(this.minPw)]],
      confirmPassword: ['', [Validators.required]]
    },
      { validator: this.checkPasswords });
  }

  emailFormControl = new FormControl('',
    [
      Validators.required,
      Validators.email
    ]);

  matcher1 = new ErrorStateMatcher();

  private checkPasswords(group: FormGroup) {
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPassword.value;
    return pass === confirmPass ? null : { notSame: true }
  } 
   
  // form submission 
  public signUpForm(groupForm: FormGroup) {
    
    if (groupForm.valid == true && this.emailFormControl.valid == true) {
      if (this.progressSpinnerService.isLoading == false) 
          this.progressSpinnerService.isLoading = true;
      groupForm.value.email = this.emailFormControl.value;
      localStorage.setItem("email", this.emailFormControl.value); //only to use it to resend email ,if email was not sent after registration , its being used in thank you screen
      // make a post request and send to angular service 
      this.userManagementWebapiService.UserSignUp(groupForm.value).subscribe(data => {
        
        if (data != 0 && data.response !== undefined && data.response != null) {
              this.signUpFormResponse(data);
              this.progressSpinnerService.isLoading = false;
        }
      }
      ,
      (error: any) => {
        console.log(error);
        this.notification.error(error);
        this.progressSpinnerService.isLoading = false; 
      }
    )
    }
    else
      this.notification.warning("Something missing, Please review your details.");

   // this.progressSpinnerService.isLoading = false;
  }
  private signUpFormResponse(res: WebApiResponse) {

    if (res && res.code != '200') {
      return this.registerError = res.message;
    }
    else if (res && res.code == '200') {
      // on successfull sign up ,send an email to that user for account activation .  
      if (res.response.code == '200')
        this.sendEmail(res.response.ActivationCode);
      else
        return this.emailExists = res.response.message;
    }
  }
  private sendEmail(activationCode) {

    this.groupForm.value.ActivationCode = activationCode;
    var formData = this.userParams(this.groupForm.value);
    this.emailServiceWebapiService.EmailSender(formData).subscribe(response => {
      if (response != 0 && response !== undefined && response != null) {
        this.sendEmailResponse(response);
      }
    },
    (error: any) => {
      console.log(error);
      this.notification.error(error);
      this.progressSpinnerService.isLoading = false; 
    }
  );
  } 
  private userParams(user: any) {
    return {
      FirstName: user.firstName,
      LastName: user.lastName,
      Email: user.email,
      ActivationCode: user.ActivationCode,
      EmailCategory:2,
      Url:'confirm-user'
    };
  }
  private sendEmailResponse(res: WebApiResponse) {

    if (res && res.code == '200') {
      if (res.response.code == '200') {
        this.notification.success("Successfully sign up, an email is sent to provided email address."); //(data.body.response.message +','+response.body.message);//
        this.registerUserService.resetForm(this.groupForm, this.emailFormControl);     // used to reset and clear validations 
        this.router.navigate(['/thank-you']);
      }
      else
        return res.response.message;
    }
    else if (res && res.code != '200')
      return res.response.message;
  }
  //

  getFirstName() {
    if (this.groupForm.controls.firstName.hasError('required')) {
      return 'First name is required';
    }
  }
  //
  getLastName() {
    if (this.groupForm.controls.lastName.hasError('required')) {
      return 'Last name is required';
    }
  }
  //
  getBusinessName() {
    if (this.groupForm.controls.businessName.hasError('required')) {
      return 'Business name is required';
    }
  }
  //
  getPhoneNumber() {
    if (this.groupForm.controls.phoneNumber.hasError('required')) {
      return 'Phone number is required';
    }
  }

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
    this.emailExists = '';
  }
}
