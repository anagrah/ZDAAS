import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  resetPassword : FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.resetPassword = this.fb.group({
      email : [' ', [Validators.required, Validators.email]]
    });
  }
  get email(){
    return this.resetPassword.controls;
  }

  reset(){
    this.submitted = true;
    if (this.resetPassword.valid) {
      console.log(this.resetPassword.value);
  }
}
}