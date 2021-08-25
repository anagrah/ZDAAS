import { Component, OnInit, Inject, Optional } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RFPFile } from 'src/app/parser/Models/RFPFile';

@Component({
  selector: 'app-file-list-message',
  templateUrl: './file-list-message.component.html',
  styleUrls: ['./file-list-message.component.css']
})
export class FileListMessageComponent implements OnInit {

  rfpFileList: RFPFile[];
  message: string;
  
  constructor(@Optional()
  @Inject(MAT_DIALOG_DATA) public data,
  public dialogRef: MatDialogRef<FileListMessageComponent>) {
    debugger;
    this.rfpFileList = data.rfpFileList;
    this.message = data.message;
     
   }


   closeDialog(){
    this.dialogRef.close();
  }
  
  ok() {

    this.dialogRef.close();
  }

  ngOnInit(): void {
    debugger;
  }

}
