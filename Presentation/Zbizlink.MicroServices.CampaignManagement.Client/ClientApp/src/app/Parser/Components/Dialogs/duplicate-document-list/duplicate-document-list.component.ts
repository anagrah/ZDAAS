import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileName } from 'src/app/parser/Models/FileName';

@Component({
  selector: 'app-duplicate-document-list',
  templateUrl: './duplicate-document-list.component.html',
  styleUrls: ['./duplicate-document-list.component.css']
})
export class DuplicateDocumentListComponent implements OnInit {

  duplicateFileList: FileName[] = [];
  message: string;

  constructor(@Optional()
  @Inject(MAT_DIALOG_DATA) public data,
  public dialogRef: MatDialogRef<DuplicateDocumentListComponent>) {
    debugger;
    this.duplicateFileList = data.duplicateFileList;
    
   }

  ngOnInit(): void {
    this.SetMessage();
  }

  SetMessage(){
   if(this.duplicateFileList.length === 1){
    this.message = "Following file is already attached. this file can not be re-attached";
   } else if (this.duplicateFileList.length > 1) {
    this.message = "Following files are already attached. these files can not be re-attached";
   
   }
  }
  closeDialog(){
    this.dialogRef.close();
  }
  
  ok() {

    this.dialogRef.close();
  }

}