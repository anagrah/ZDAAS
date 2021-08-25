import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import {AdminUserWebapiService} from '../../services/admin-user-webapi.service'
import { ProgressSpinnerService } from 'src/app/shared/services/progress-spinner.service';
import { WebApiResponse } from 'src/app/shared/models/WebApiResponse';
import { Role } from '../../models/Role';
import { MyErrorStateMatcher } from '../../miscellaneous/ConfirmEqualValidatorDirective';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';
 
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  //require: any
  firstName: string = '';
  lastName: string = '';
  groupForm: FormGroup;
  userTypes: Role[] = [];
  password: string = '';
  minPw = 8;
  successMessage:string = '';
  errorMessage: string = '';
  hide: boolean = true; // hide show password param
  matcher = new MyErrorStateMatcher();
  emailExists: string = '';
  constructor(private fb: FormBuilder, public adminUserWebapiService : AdminUserWebapiService, private router:Router,private notification: NotificationService,
    public progressSpinnerService: ProgressSpinnerService) { 
     

     }
    
  ngOnInit(): void {
    if(!sessionStorage.getItem('CampaignUser')) {
      this.router.navigateByUrl('/');
    }
    var response = this.GetUserRoles();
     console.log(response); 
     
    this.groupForm = this.fb.group({
       firstName: ['', Validators.required],
       lastName: ['', Validators.required],
       RoleId: ['', Validators.required],
       password: ['', [Validators.required, Validators.minLength(this.minPw)]]     
    }) 
  }
  //Email validator
  emailFormControl = new FormControl('',
    [
      Validators.required,
      Validators.email
    ]);
  matcher1 = new ErrorStateMatcher();
  email = new FormControl('', [Validators.required, Validators.email]);
 
 // on change roles 
  onSelection(){   
    return this.userTypes
  }
  // Get user roles to bind in user type dropdown list
  public GetUserRoles() { 
  this.adminUserWebapiService.getRoles().subscribe((res: WebApiResponse)=>{
    console.log(res); 
    this.userTypes = res.response;   
    },
    (error: any) => {
      console.log(error);
      this.notification.error(error);
      this.progressSpinnerService.isLoading = false; 
    }
  ) 
  }
  
  public createAccount(groupForm: FormGroup) {  
    if (groupForm.valid == true && this.emailFormControl.valid == true) { 
      groupForm.value.Email = this.emailFormControl.value;
      if (this.progressSpinnerService.isLoading == false)  
           this.progressSpinnerService.isLoading = true; 
      this.adminUserWebapiService.AdminSignUp(groupForm.value).subscribe(response => { 
        if ( response !=0 && response !== undefined && response != null) { 
          this.SingUpFormResponse(response);
          this.progressSpinnerService.isLoading = false;
        }  
      },
      (error: any) => {
        console.log(error);
        this.notification.error(error);
        this.progressSpinnerService.isLoading = false; 
      }
      // ,
      //   err => this.adminUserWebapiService.UploadError(err)
      )
    }
 
  }


  private SingUpFormResponse(res: WebApiResponse) {  
    debugger;
    if (res.code =='200') { 
      if (res.response.code ==1) {
        return this.successMessage = 'User added successfully'; //res.response.message;
      
      } 
      else if (res.response.code == 2)  {
        return this.emailExists = res.response.message;  
      }
      else
        this.errorMessage = res.response.message; 

    } else if (res.code != '200') { 
        this.errorMessage = res.message; 
    }  
  } 
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
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
  getPassword() {
    if (this.groupForm.controls.password.hasError('required')) {

      return 'Password is required';
    }
  } 
  onFocus() {
     this.emailExists = '';
     this.successMessage = '';
  }
 
}
