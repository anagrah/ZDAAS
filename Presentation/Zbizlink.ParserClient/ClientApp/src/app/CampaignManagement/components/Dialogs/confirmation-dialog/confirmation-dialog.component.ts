import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {
  
  message:string = 'Are you sure want to delete?'
  userInput:string = 'No';
  label:string = '';

  constructor(public dialogRef: MatDialogRef<any>) { 
    this.label = this.dialogRef._containerInstance._config.data; 
  }

  ngOnInit(): void {
     
  }
  ConfirmDeletion(){
    this.userInput = 'yes';
    this.closeDialogOpp(this.userInput);
  }
  Cancel(){
    this.closeDialogOpp(this.userInput);
  }
  closeDialogOpp(data): void { 
    this.dialogRef.close(data);
  }
}
