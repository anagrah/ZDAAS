import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router'; 
import { ProgressSpinnerService } from 'src/app/shared/services/progress-spinner.service';
import { NavbarService } from '../../services/navbar.service';
 
import { AdminUserWebapiService } from '../../services/admin-user-webapi.service';
import { WebApiResponse } from 'src/app/shared/models/WebApiResponse';
import { NotificationService } from 'src/app/shared/services/notification.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() isHidden: boolean = false;
  email: string = '';
  password: string = '';
  hide: boolean = true;
  CampaignUser:boolean = false;
  matcher = new ErrorStateMatcher();
  returnUrl: string; 
  groupForm: FormGroup;
  errorMessage: string = '';
  constructor(private fb: FormBuilder, public progressSpinnerService: ProgressSpinnerService,private notification: NotificationService,
     private router: Router, public nav: NavbarService,public adminManagementWebapiService:AdminUserWebapiService) {

      
  }

  ngOnInit(): void {
    this.returnUrl ='campaign';
    if (localStorage.getItem('Token') || sessionStorage.length > 0) { // if token or session exists then it will not redirect to login page
       this.redirect();
    }
    this.groupForm = this.fb.group({ 
      password: ['', [Validators.required]]
    });  
  }
  public logInForm(groupForm: FormGroup) { 
    if (groupForm.valid == true && this.emailFormControl.valid == true) { 
      groupForm.value.Username = this.emailFormControl.value;
      if (this.progressSpinnerService.isLoading == false)  
           this.progressSpinnerService.isLoading = true; 
      this.adminManagementWebapiService.AdminLogin(groupForm.value).subscribe(response => { 
        if ( response !=0 && response !== undefined && response != null) { 
          this.logInFormResponse(response);
          this.progressSpinnerService.isLoading = false;
        } 
      }
      ,
    (error: any) => {
      console.log(error);
      this.notification.error(error);
      this.progressSpinnerService.isLoading = false; 
    })
      // ,
      //   err => this.adminManagementWebapiService.UploadError(err) ) 
    }
  }

 
  private logInFormResponse(res: WebApiResponse) {  
    if (res.code =='1') { 
      if (res.response !=undefined && res.response!=null) {
        this.userInformationStore(res);
        this.nav.show();
        this.redirect(); 
      }
      else
        this.errorMessage = res.message;  
    } else if (res.code != '200') { 
        this.errorMessage = res.message; 
    }  
  } 
  // Email validator.
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
  ]);
  
 
  private userInformationStore(data: any) {   
   sessionStorage.setItem("Token", data.response.Token);
   sessionStorage.setItem('response', data.response);
    this.isHidden = false;
    this.CampaignUser = true;   
    sessionStorage.setItem('userId', data.response.Id);
 
    // set company id 
    sessionStorage.setItem('compId', data.response.companyId);
    console.log("Company id after campaign login is = " + sessionStorage.getItem('compId'));
    sessionStorage.setItem("ClientID",data.response.ClientId);
    sessionStorage.setItem("CampaignUser", this.CampaignUser.toString()); 
    console.log(sessionStorage.getItem('CampaignUser'));
    localStorage.clear(); 
  }

  getPassword() {
    if (this.groupForm.controls.password.hasError('required')) {

      return 'Password is required';
    }
  }
  private redirect(): void {  
    this.router.navigateByUrl(this.returnUrl); //use the stored url here
  }
  onFocus() {
    this.errorMessage = '';
  }
}

