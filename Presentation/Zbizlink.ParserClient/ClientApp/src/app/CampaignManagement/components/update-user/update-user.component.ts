import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { WebApiResponse } from 'src/app/shared/models/WebApiResponse';
import { ProgressSpinnerService } from 'src/app/shared/services/progress-spinner.service';
import { threadId } from 'worker_threads';
import { MyErrorStateMatcher } from '../../miscellaneous/ConfirmEqualValidatorDirective';
import { Role } from '../../models/Role';
import { AdminUserWebapiService } from '../../services/admin-user-webapi.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
 groupForm: FormGroup;
 matcher = new MyErrorStateMatcher();
 emailExists: string = '';
 hide: boolean = true;
 minPw = 8; 
 password: string = '';
 userTypes: Role[] = [];
 checked = false;
 IsActiveID = false;
 IsActive:number =0;
 indeterminate = false;
 labelPosition: 'before' | 'after' = 'after';
 disabled = false;
 response ;
 selectedUser:Number = 0;
 //RoleName:string ='';
  //AdminRoleId=0;
 constructor(private fb: FormBuilder, public adminUserWebapiService : AdminUserWebapiService, private router:Router,private notification: NotificationService,
  public progressSpinnerService: ProgressSpinnerService,public dialogRef: MatDialogRef<any>) {
    
   
   }
  
  private populateUserInfoinPopUpModel() {
    var res = this.dialogRef;
    this.response = res._containerInstance._config.data;
    this.firstName = this.response.FirstName;
    this.lastName = this.response.LastName;
    this.email = this.response.Email;
    this.IsActiveID = this.response.IsActiveID;
    this.password = this.response.Password; 
   // this.AdminRoleId = this.response.RoleId;
    //this.RoleName = this.response.RoleName; 
    this.selectedUser = this.response.RoleId;
    this.userTypes.push({'AdminRoleId':this.response.RoleId,'RoleName':this.response.RoleName}); 
    console.log({'AdminRoleId':this.response.RoleId,'RoleName':this.response.RoleName});
  }

  ngOnInit(): void {
    if(!sessionStorage.getItem('CampaignUser')) {
      this.router.navigateByUrl('/');
    }
    this.GetUserRoles();
    this.populateUserInfoinPopUpModel();
    this.groupForm = this.fb.group({
        firstName:['', Validators.required],
        lastName: ['', Validators.required], 
        password: ['', [Validators.required, Validators.minLength(this.minPw)]],
        RoleId: ['', Validators.required],
        IsActiveID:[]  
     
    }) 
   
  }
  errorMessage: string = '';
  email = new FormControl('', [Validators.required, Validators.email]);
  emailFormControl = new FormControl('',
    [
      Validators.required,
      Validators.email
    ]);

  matcher1 = new ErrorStateMatcher();
  public updateUser(groupForm: FormGroup){  
    if (groupForm.valid == true && this.emailFormControl.valid == true) { 
          groupForm.value.Email = this.emailFormControl.value;
      if (this.progressSpinnerService.isLoading == false)  
           this.progressSpinnerService.isLoading = true; 
           groupForm.value.IsActiveID = this.IsActive;
      this.adminUserWebapiService.AdminUpdateUser(groupForm.value).subscribe(response => { 
        if ( response !=0 && response !== undefined && response != null) { 
          this.closeDialogOpp();
          this.progressSpinnerService.isLoading = false;
        }  
      })
    }



  } 
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
  onCheckboxChange($event){ 
    if ($event.checked ===true)  
          this.IsActive =  1;
    else
    this.IsActive =  0;
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
  
  ok(): void { 

   }
  closeDialogOpp(): void { 
    this.dialogRef.close();
  }
  onFileComplete($event) {

  }
  onFocus() {
    this.emailExists = '';
 }

}
