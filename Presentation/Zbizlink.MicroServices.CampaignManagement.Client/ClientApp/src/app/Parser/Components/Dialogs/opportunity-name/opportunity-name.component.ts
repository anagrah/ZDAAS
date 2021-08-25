import { Component, OnInit, Optional } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-opportunity-name',
  templateUrl: './opportunity-name.component.html',
  styleUrls: ['./opportunity-name.component.css']
})
export class OpportunityNameComponent implements OnInit {

  name = new FormControl('', [Validators.required]);  

  constructor(@Optional()
  public dialogRef: MatDialogRef<any>) { }

  ngOnInit(): void {
   
  }
  closeDialogOpp(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    console.log(name);
    //debugger;
    if(String(this.name.value).trim() !== ""){
      this.dialogRef.close(this.name.value);
    }else{
      this.name.setValue("");
    }
    
  }

  getErrorMessage() {
    if (this.name.hasError('required')) {
      return 'You must enter a value';
    }

  }
  
}
