import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MyErrorStateMatcher } from '../../miscellaneous/ConfirmEqualValidatorDirective';

// Dummay interface
interface Website {
  value: string;
  viewValue: string;
}

 
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  //require: any
  groupForm: FormGroup;
  password: string = '';
  minPw = 8;
  hide: boolean = true; // hide show password param
  matcher = new MyErrorStateMatcher();
  emailExists: string = '';
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.groupForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(this.minPw)]]
     
    })
  }
  emailFormControl = new FormControl('',
    [
      Validators.required,
      Validators.email
    ]);

  matcher1 = new ErrorStateMatcher();
  // Dummay data for users
  websites: Website[] = [
    {value: '1', viewValue: 'Admin'},
    {value: '2', viewValue: 'User'} 
  ];
  email = new FormControl('', [Validators.required, Validators.email]);
    public createAccountForm(groupForm: FormGroup){
        debugger;
    }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getPassword() {
    if (this.groupForm.controls.password.hasError('required')) {

      return 'Password is required';
    }
  }
  onFocus() {
     this.emailExists = '';
  }
}
