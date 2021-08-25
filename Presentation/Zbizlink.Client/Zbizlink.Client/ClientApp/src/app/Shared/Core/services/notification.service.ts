import { Injectable } from '@angular/core';
import{MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public SnackBar:MatSnackBar) { }
  config:MatSnackBarConfig={
    duration:6000,
    horizontalPosition:"right",
    verticalPosition:"bottom"
  }
  success(msg:string | any){
    this.config['panelClass'] = ['success-snackbar', 'snackBarCcontainer'];
    this.SnackBar.open(msg,'',this.config) ;
  }
  error(msg:string | any){
    this.config['panelClass'] = ['error-snackbar', 'snackBarCcontainer'];
    this.SnackBar.open(msg,'',this.config) ;
  }
  warning(msg:string | any){

    this.config['panelClass'] = ['warn-snackbar', 'snackBarCcontainer'];
    this.SnackBar.open(msg,'',this.config) ;
  }

}
