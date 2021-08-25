import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor() { }

  public resetForm(groupForm: FormGroup, emailFormControl: FormControl) {
    groupForm.reset();
    Object.keys(groupForm.controls).forEach(key => {
      groupForm.get(key).setErrors(null);
    });
    // reset email 
    emailFormControl.reset();
    emailFormControl.setErrors(null);
  }
}
