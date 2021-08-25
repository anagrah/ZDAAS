import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const invalidParent = !!(
          control
          && control.parent
          && control.parent.invalid
          && control.parent.dirty
          && control.parent.hasError('notSame'));
        return (invalidParent);
      } 
     
  }


