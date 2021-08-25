import { map } from 'rxjs/operators';
import { userRegistrationStart } from './../../Core/StateManagement/NgRx/registrationState/registration.actions';
import { AppState } from './../../../../Store/AppState/app.state';
import { NotificationFacadeService } from './../../../../Shared/Abstraction/Facade/notification-facade.service';
import { RegistrationService } from './../../Core/Services/registration.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebApiResponse } from 'src/app/Shared/Core/models/webApiResponse.model';
import { RegistrationFacadeService } from '../../Abstraction/Facade/registration-facade.service';
import { pipe, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { ErrorMessageService } from '../../Core/Services/error-message.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  signup_formGroup: any;
  registrationError: any = '';
  registrationSuccess: any = '';
  signupSubscription: Subscription = new Subscription;



  constructor(private formBuilder: FormBuilder,
     private registrationFacadeService: RegistrationFacadeService,
     private router: Router,
     private notificationFacadeService: NotificationFacadeService,
     private errorMessageService: ErrorMessageService,
     private store: Store<AppState>) {
    this.SignUpForm();
   }

  ngOnInit(): void {
  }



  //Using FormBuilder to provide different Form Controls
  SignUpForm() {
    this.signup_formGroup = this.formBuilder.group({
      firstName: new FormControl('', [
        Validators.required,
        Validators.pattern(("^[^{};><?\\\\/:]*$")),
        Validators.maxLength(50),
        Validators.minLength(3),
      ]),
      middleName: new FormControl('', [
        Validators.pattern(("^[^\\[\\],'{};:><?\\\\/.]*$")),
        Validators.maxLength(50),
        Validators.minLength(3),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-zA-Z0-9\d@#$%^&*-+=()|! ]+"),
        Validators.maxLength(50),
        Validators.minLength(3),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.email,
        Validators.maxLength(100),
        Validators.pattern("^[a-z0-9.#$%^&*!+=_]+@[a-z0-9.]+\\.[a-z]{2,20}$"),
      ]),
      userName: new FormControl('', [
        Validators.required,
        Validators.pattern(("^[^{};><?\\\\/:]*$")),
        Validators.maxLength(50),
        Validators.minLength(3),
      ]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern("[ 0-9()+-]+"),
        Validators.maxLength(20),
        Validators.minLength(5)
      ]),
      businessName: new FormControl('', [
        Validators.required,
        Validators.pattern(("^[^{};><?/]*$")),
        Validators.maxLength(120),
        Validators.minLength(3),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$#^_+!%*?&])[A-Za-z0-9\d$@$#^_+!%*?&].{7,30}'),
        Validators.minLength(8),
        Validators.maxLength(30)
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$#^_+!%*?&])[A-Za-z0-9\d$@$#^_+!%*?&].{7,30}'),
      ]),
      recaptcha: new FormControl('', [
        Validators.required,
      ]),
    })
  }

  get firstName() { return this.signup_formGroup.get('firstName') };
  get middleName() { return this.signup_formGroup.get('middleName') };
  get lastName() { return this.signup_formGroup.get('lastName') };
  get email() { return this.signup_formGroup.get('email') };
  get userName() { return this.signup_formGroup.get('userName') };
  get phoneNumber() { return this.signup_formGroup.get('phoneNumber') };
  get businessName() { return this.signup_formGroup.get('businessName') };
  get password() { return this.signup_formGroup.get('password') };
  get confirmPassword() { return this.signup_formGroup.get('confirmPassword') };
  get recaptcha() { return this.signup_formGroup.get('recaptcha') };



// SignUp subscription main function
  onSignupSubmit() {
    if(!this.signup_formGroup.valid){
      return;
    }

    const userTypeId:number = 1;
    const firstName = this.signup_formGroup.value.firstName;
    const middleName = this.signup_formGroup.value.middleName;
    const lastName = this.signup_formGroup.value.lastName;
    const userName = this.signup_formGroup.value.userName;
    const phoneNumber = this.signup_formGroup.value.phoneNumber;
    const businessName = this.signup_formGroup.value.businessName;
    const confirmPassword = this.signup_formGroup.value.confirmPassword;
    const email = this.signup_formGroup.value.email;
    const password = this.signup_formGroup.value.password;

    // this.signupSubscription = this.registrationFacadeService.signUp(
    //   {firstName,middleName,lastName,userName,phoneNumber,businessName,confirmPassword,email,password,userTypeId}
    //   ).subscribe((data) =>{
    //     return this.signUpFormResponse(data);
    // });

    this.store.dispatch(userRegistrationStart({ firstName,middleName,lastName,userName,phoneNumber,
      businessName,confirmPassword,email,password,userTypeId }));

  }

  // private signUpFormResponse(res: WebApiResponse) {
  //      const email = this.signup_formGroup.value.email;
  //       if (res && res.code != '200') {
  //         return this.registrationError = this.notificationFacadeService.error(res.message + ':  ' + res.errors);
  //       }
  //       else if (res && res.code == '200') {
  //         this.router.navigate(['/user/email-verification', email]);
  //         return this.registrationSuccess = this.notificationFacadeService.success(res.message);
  //       }
  //     }


      //Place this function at the end of all subscription logics
      ngOnDestroy() {
        if (this.signupSubscription) {
          this.signupSubscription.unsubscribe();
        }
      }

    //Function to show errors/validation for First Name
    firstNameValidation() {
      const getFirstName = this.signup_formGroup.get('firstName');
      if(getFirstName.touched && !getFirstName.valid) {
        if(getFirstName.errors.required) {
          return 'First Name is required!';
        }
        if(getFirstName.errors.pattern) {
          return 'Not Allowed character entered!'
        }
        if(getFirstName.errors.maxlength) {
          return 'Max First Name length allowed is 50 characters!'
        }
        if(getFirstName.errors.minlength) {
          return 'Minimum First Name length allowed is 3 characters!'
        }
      }
      return;
    };

    //Function to show errors/validation for Middle Name
    middleNameValidation() {
      const getMiddleName = this.signup_formGroup.get('middleName');
      if(getMiddleName.touched && !getMiddleName.valid && !getMiddleName.required) {
        if(getMiddleName.errors.pattern) {
          return 'Not Allowed character entered!'
        }
        if(getMiddleName.errors.maxlength) {
          return 'Max Middle Name length allowed is 50 characters!'
        }
        if(getMiddleName.errors.minlength) {
          return 'Minimum Middle Name length allowed is 3 characters!'
        }
      }
      return;
    };


    //Function to show errors/validation for Last Name
    lastNameValidation() {
      const getLastName = this.signup_formGroup.get('lastName');
      if(!getLastName.touched){
        getLastName == getLastName.valid
     }
      if(getLastName.touched && !getLastName.valid) {
        if(getLastName.errors.required) {
          return 'Last Name is required!';
        }
        if(getLastName.errors.pattern) {
          return 'Not Allowed character entered!'
        }
        if(getLastName.errors.maxlength) {
          return 'Max Last Name length allowed is 50 characters!'
        }
        if(getLastName.errors.minlength) {
          return 'Minimum Last Name length allowed is 3 characters!'
        }
      }
      return;
    };

  //Function to show errors/validation for email
  emailValidation() {
    const getEmail = this.signup_formGroup.get('email');
    if(getEmail.touched && !getEmail.valid) {
      if(getEmail.errors.required) {
        return 'Email is required!';
      }
      if(getEmail.errors.pattern) {
        return 'Your entered email address is not correct!'
      }
      if(getEmail.errors.maxlength) {
        return 'Max Email length allowed is 100 characters!'
      }
      if(getEmail.errors.minlength) {
        return 'Minimum Email length allowed is 6 characters!'
      }
    }
    return;
  };

      //Function to show errors/validation for userName
    userNameValidation() {
      const getuserName = this.signup_formGroup.get('userName');
      if(getuserName.touched && !getuserName.valid) {
        if(getuserName.errors.required) {
          return 'UserName is required!';
        }
        if(getuserName.errors.pattern) {
          return 'Not Allowed character entered!'
        }
        if(getuserName.errors.maxlength) {
          return 'Max UserName length allowed is 100 characters!'
        }
        if(getuserName.errors.minlength) {
          return 'Minimum UserName length allowed is 3 characters!'
        }
      }
      return;
    };

  //Function to show errors/validation for phone Number
  phoneNumberValidation() {
    const getphoneNumber = this.signup_formGroup.get('phoneNumber');
    if(getphoneNumber.touched && !getphoneNumber.valid) {
      if(getphoneNumber?.errors?.required) {
        return 'Phone Number is required!';
      }
      if(getphoneNumber?.errors?.pattern) {
        return 'Only ( ) + - and Numerics allowed!'
      }
      if(getphoneNumber?.errors?.maxlength) {
        return 'Max Phone Number length allowed is 20 characters!'
      }
      if(getphoneNumber?.errors?.minlength) {
        return 'Minimum Phone Number length allowed is 5 characters!'
      }
    }
    return;
  };

  //Function to show errors/validation for Business Name
  businessNameValidation() {
    const getBusinessName = this.signup_formGroup.get('businessName');
    if(getBusinessName.touched && !getBusinessName.valid) {
      if(getBusinessName.errors.required) {
        return 'Business Name is required!';
      }
      if(getBusinessName.errors.pattern) {
        return 'Not Allowed character entered!'
      }
      if(getBusinessName.errors.maxlength) {
        return 'Max Business Name length allowed is 120 characters!'
      }
      if(getBusinessName.errors.minlength) {
        return 'Minimum Business Name length allowed is 3 characters!'
      }
    }
    return;
  };

  //Function to show errors/validation for Password
  passwordValidation() {
    const getPassword = this.signup_formGroup.get('password');
    if(getPassword.touched && !getPassword.valid) {
      if(getPassword.errors.required) {
        return 'Password is required!';
      }
      if(getPassword.errors.maxlength) {
        return 'Max Password length allowed is 30 characters!'
      }
      if(getPassword.errors.minlength) {
        return 'Minimum Password length allowed is 8 characters!'
      }
      if(getPassword.errors.pattern) {
        return 'Password should have At least: one Lowercase letter,  one Uppercase letter,  one Number and one Special character!'
      }
    }
    return;
  };

  //Function to show errors/validation for Verify confirm Password
  //And Compare Passwords
  confirmPasswordValidation() {
    const getConfirmPassword = this.signup_formGroup.get('confirmPassword');
    const getPassword = this.signup_formGroup.get('password');
    if(getConfirmPassword.touched && !getConfirmPassword.valid) {
      if(getConfirmPassword.errors.required) {
        return 'Password verification is required!';
      }
    }
    if (getConfirmPassword.touched && getPassword.value !== getConfirmPassword.value ) {
      return 'Confirm Password does not match Password!'
    }
    if(getConfirmPassword.touched && !getConfirmPassword.valid) {
      if(getConfirmPassword.errors.pattern) {
        return 'Password should have At least: one Lowercase letter,  one Uppercase letter,  one Number and one Special character!'
      }
    }
    return;
  };


  //Google reCaptcha siteKey
  siteKey:[string] = ["6Lcv4GQbAAAAANp38S0vsiCO26Pa_cM3WbwOpUNH"];






}

