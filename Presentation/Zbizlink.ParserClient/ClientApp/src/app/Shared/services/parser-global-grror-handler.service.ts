import { Injectable, ErrorHandler } from '@angular/core';
import { ProgressSpinnerService } from 'src/app/shared/services/progress-spinner.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParserGlobalGrrorHandlerService extends ErrorHandler {
  
  constructor(private progressSpinnerService: ProgressSpinnerService) {
    super();
  }
  handleError(error) {
    debugger
  if(this.progressSpinnerService.isLoading == true){
    this.progressSpinnerService.isLoading = false;
  }
  
  if (Error instanceof HttpErrorResponse) {
    console.log(error.status);
   }
   else {
    console.error(error);
   }
    
   alert(`Fatal error occurred, refresh the page and try again. If you experience this error continuously, contact to administrator.`);
  }
}
