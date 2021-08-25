import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { IDialogParams } from '../models/IDialogParams';



@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openDialog(dialogParams: IDialogParams) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.width = dialogParams.width;

    if (dialogParams.disableClose !== undefined) {
      dialogConfig.disableClose = dialogParams.disableClose;
    }else{
      dialogConfig.disableClose = true;
    }
    if (dialogParams.autoFocus !== undefined) {
      dialogConfig.autoFocus = dialogParams.autoFocus;
    }else{
      dialogConfig.autoFocus = true;
    }
    if(dialogParams.data !== undefined){
      dialogConfig.data = dialogParams.data;
    }
    

    return this.dialog.open(dialogParams.dailogComponent, dialogConfig);
  }

}
