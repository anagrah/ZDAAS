import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-save-changes-before-move',
  templateUrl: './save-changes-before-move.component.html',
  styleUrls: ['./save-changes-before-move.component.css']
})
export class SaveChangesBeforeMoveComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<any>) { }

  ngOnInit(): void {
  }
  ok(): void { 

  }
 closeDialogOpp(data): void { 
   console.log(data);
   this.dialogRef.close(data);
 }
}
