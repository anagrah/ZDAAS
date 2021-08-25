import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { Router, ActivatedRoute, UrlTree } from '@angular/router';
import { ProgressSpinnerService } from 'src/app/shared/services/progress-spinner.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { User } from '../../models/User';
import { UserApiResponse } from '../../models/UserApiResponse';
import { WebApiResponse } from 'src/app/shared/models/WebApiResponse';
import { UserManagementWebapiService } from '../../services/user-management-webapi.service';
import { NavbarService } from '../../Services/navbar.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})

export class LoginUserComponent implements OnInit {
  @Input() isHidden: boolean = false;
  email: string = '';
  password: string = '';
  hide: boolean = true; 
  matcher = new ErrorStateMatcher();
  
  returnUrl: string = '';
  groupForm: FormGroup;
  errorMessage: string = '';
  constructor(private fb: FormBuilder, public userManagementWebapiService: UserManagementWebapiService,
    private notification: NotificationService, public progressSpinnerService: ProgressSpinnerService,
    private route: ActivatedRoute, private router: Router, public nav: NavbarService) {

      
  }

  ngOnInit(): void { 
    if(localStorage.getItem('Token') || sessionStorage.length > 0) { // if token or session exists then it will not redirect to login page
      this.redirect();
    }
    this.groupForm = this.fb.group({ 
      password: ['', [Validators.required]]
    }); 
    // Get the query params
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/parser';   
  }
   
  public logInForm(groupForm: FormGroup) { 
    if (groupForm.valid == true && this.emailFormControl.valid == true) { 
      groupForm.value.Username = this.emailFormControl.value;
      if (this.progressSpinnerService.isLoading == false)  
           this.progressSpinnerService.isLoading = true;
      this.userManagementWebapiService.Login(groupForm.value).subscribe(response => { 
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
      }
    ) 
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
    localStorage.setItem('currentUser', JSON.stringify(data.response));
    localStorage.setItem("Token", data.response.Token);
    localStorage.setItem('compId', data.response.companyId);
    localStorage.setItem('Source', data.response.Source);
    localStorage.setItem('clientID', data.response.ClientId);
    localStorage.setItem('userid', data.response.Id);

    localStorage.setItem('parserUser', 'true');
    localStorage.setItem('zbizlinkUser', 'false');

    var user = new User;
    user = data.response;
    this.isHidden = false;
    sessionStorage.clear();
  }

  getPassword() {
    if (this.groupForm.controls.password.hasError('required')) {

      return 'Password is required';
    }
  }
  private redirect(): void {    
      if (this.returnUrl !== undefined && this.returnUrl !== "" && this.returnUrl !== '/parser') { 
        if ( !this.returnUrl.includes('category=')) {
        let decodedURL = decodeURIComponent(this.returnUrl);
        if (decodedURL.endsWith('=')) {
             decodedURL = decodedURL.replace(/=/g,'');
        }     
          let campaignOpportunityURL = decodedURL.split('?');  
          console.log(campaignOpportunityURL[1]);
          // decode and split opportunity url to get opportunity id 
          var OpportunityId = window.atob(campaignOpportunityURL[1]).split('='); 
          if (OpportunityId.length >0 ) 
               sessionStorage.setItem("OpportunityId", OpportunityId[1]); 
        }     
        this.router.navigateByUrl(this.returnUrl);
       
      }
      else{
        this.router.navigateByUrl('/parser'); //use the stored url here  
      }  
  }
  onFocus() {
    this.errorMessage = '';
  }
}
