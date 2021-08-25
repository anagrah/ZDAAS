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
  success(msg:string){
    this.config['panelClass'] = ['notification', 'success'];
    this.SnackBar.open(msg,'',this.config) ;
  }
  error(msg:string){
    this.config['panelClass'] = ['notification', 'error'];
    this.SnackBar.open(msg,'',this.config) ;
  }
  warning(msg:string){
    
    this.config['panelClass'] = ['notification', 'warning'];
    this.SnackBar.open(msg,'',this.config) ;
  }

}
