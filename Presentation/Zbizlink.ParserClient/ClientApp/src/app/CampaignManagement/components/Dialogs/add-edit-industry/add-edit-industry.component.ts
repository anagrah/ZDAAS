import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service'; 
import { ProgressSpinnerService } from '../../../../shared/services/progress-spinner.service'; 
import { WebApiResponse } from '../../../../shared/models/WebApiResponse';
import { IndustryService } from '../../../services/industry.service';

@Component({
  selector: 'app-add-edit-industry',
  templateUrl: './add-edit-industry.component.html',
  styleUrls: ['./add-edit-industry.component.css']
})
export class AddEditIndustryComponent implements OnInit {

   
  groupForm: FormGroup;  
  errorMessage:string = '';
      
  IndustryID :Number;
  IndustryName :string = ''; 
  Description :string = '';
   
  // change button values on add / edit 

  BtnSave:string='';
  BtnAddEdit:string= '';

  constructor( 
  public dialogRef: MatDialogRef<any>,private fb: FormBuilder,public progressSpinnerService: ProgressSpinnerService,
  private router:Router,private notification: NotificationService,public industryService:IndustryService
  
) { 
  this.AddEditMethod();
}

  private AddEditMethod() {
    //  let postRequestParams = {data:data,summaryParams:this.getSummaryResponse} ;
    debugger;
    if (this.dialogRef._containerInstance._config.data.data !== null) {
      let response = this.dialogRef._containerInstance._config.data.data; 

      this.IndustryID = response.IndustryID;
      this.IndustryName = response.IndustryName; 
      this.Description = response.Description; 

      this.BtnAddEdit = 'Edit';
      this.BtnSave = 'Update';
    }
    else {
      this.BtnAddEdit = 'Add';
      this.BtnSave = 'Save';
    }
  }

  ngOnInit(): void {    
    this.groupForm = this.fb.group({ 
      IndustryID:[''],
      IndustryName:['',Validators.required],  
      Description:['']
  }) 
  } 
  public SaveIndustry(groupForm: FormGroup){      
    if(groupForm.valid == true) { 
      if (this.groupForm.value.IndustryName.trim() === "") {
        return this.errorMessage = 'Industry can not be null or empty';
      }   
        if (this.progressSpinnerService.isLoading == false) 
            this.progressSpinnerService.isLoading = true;    
            let UserId = parseInt(sessionStorage.getItem('userId')); 
            if ( this.groupForm.value.IndustryID > 0 && this.BtnSave === 'Update' && this.BtnAddEdit === 'Edit') {
              groupForm.value.ModifiedBy = UserId; 
              this.UpdateIndustry(groupForm);
            }
            else{
              groupForm.value.CreatedBy = UserId;  
              this.AddIndustry(groupForm);
            } 
       } 
       else{
          return true;
  }
  }
 
  private UpdateIndustry(groupForm: FormGroup) {
    this.industryService.UpdateIndustry(groupForm.value).subscribe(data => {
      if (data !== 0 && data !== undefined && data !== null) { 

       this.notification.success("Industry updated successfully");
      let apiResponse =  {IndustryID: this.groupForm.value.IndustryID, IndustryName:this.groupForm.value.IndustryName, Description: this.groupForm.value.Description};
       let response = {key:'Update',value:apiResponse};
       this.closeDialogOpp(response); 
        this.progressSpinnerService.isLoading = false;
      }
    }, (error: any) => {
      console.log(error);
      this.notification.error(error);
      this.progressSpinnerService.isLoading = false;
    });
  }

  private AddIndustry(groupForm: FormGroup) {
    this.industryService.SaveIndustry(groupForm.value).subscribe(data => {
      if (data !== 0 && data !== undefined && data !== null) { 
        this.progressSpinnerService.isLoading = false;
        if(data.code === 6){
          this.errorMessage = data.message ;
        }else{
          this.industryResponse(data);
        }
      }
    }, (error: any) => {
      console.log(error);
      this.notification.error(error);
      this.progressSpinnerService.isLoading = false;
    });
  }

  private industryResponse(res: WebApiResponse) {

     this.notification.success("Industry saved successfully"); 
     let apiResponse =  {IndustryID: res.response, IndustryName:this.groupForm.value.IndustryName, Description: this.groupForm.value.Description};
     let response = {key:'Insert',value:apiResponse};
     this.closeDialogOpp(response);
  }

  getIndustryName(){
    if (this.groupForm.controls.IndustryName.hasError('required')) {
      return 'Industry is required';
    }
  }
  ok(): void { 

  }
 closeDialogOpp(data): void { 
   this.dialogRef.close(data);
 }
 onFocus() {
  this.errorMessage = '';
} 

}
