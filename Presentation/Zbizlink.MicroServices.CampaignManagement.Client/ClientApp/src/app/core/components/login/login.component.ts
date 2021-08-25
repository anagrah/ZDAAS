import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ProgressSpinnerService } from 'src/app/shared/services/progress-spinner.service';
import { NavbarService } from '../../services/navbar.service';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() isHidden: boolean = false;
  email: string = '';
  password: string = '';
  hide: boolean = true;
  matcher = new ErrorStateMatcher();
  //returnUrl: string;
  groupForm: FormGroup;
  errorMessage: string = '';
  constructor(private fb: FormBuilder,  
    private notification: NotificationService, public progressSpinnerService: ProgressSpinnerService,
    private route: ActivatedRoute, private router: Router, public nav: NavbarService) {

      
  }

  ngOnInit(): void {

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
      // this.userManagementWebapiService.Login(groupForm.value).subscribe(response => { 
      //   if ( response !=0 && response !== undefined && response != null) { 
      //     this.logInFormResponse(response);
      //     this.progressSpinnerService.isLoading = false;
      //   }  
      // }) 
    }
 
  }


  // private logInFormResponse(res: WebApiResponse) {  
  //   if (res.code =='200') { 
  //     if (res.response !=undefined && res.response!=null) {
  //       this.userInformationStore(res);
  //       this.nav.show();
  //       this.redirect(); 
  //     }
  //     else
  //       this.errorMessage = res.message;  
  //   } else if (res.code != '200') { 
  //       this.errorMessage = res.message; 
  //   }  
  // } 
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
    // var user = new User;
    // user = data.response;
    this.isHidden = false;
    sessionStorage.clear();
  }

  getPassword() {
    if (this.groupForm.controls.password.hasError('required')) {

      return 'Password is required';
    }
  }
  private redirect(): void {  
    this.router.navigateByUrl('/'); //use the stored url here
  }
  onFocus() {
    this.errorMessage = '';
  }
}

