import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Validators, FormBuilder, FormGroup } from '@angular/forms'; 
import { Router } from '@angular/router'; 
import { NotificationService } from 'src/app/shared/services/notification.service'; 
import { CampaignLookupDataService } from '../../../services/campaign-lookup-data.service';
import { SummarySynonymbridgesLookupService } from '../../../services/summary-synonymbridges-lookup.service';
import { ProgressSpinnerService } from '../../../../shared/services/progress-spinner.service';
import { WebApiResponse } from '../../../../shared/models/WebApiResponse';


@Component({
  selector: 'app-add-edit-agency',
  templateUrl: './add-edit-agency.component.html',
  styleUrls: ['./add-edit-agency.component.css']
})
export class AddEditAgencyComponent implements OnInit {

  groupForm: FormGroup;  
  errorMessage:string = '';
   

  Description :string = '';
  AgencyName :string = ''; 
  AgencyID :Number;
    
  // change button values on add / edit 

  BtnSave:string='';
  BtnAddEdit:string= '';

  constructor( 
  public dialogRef: MatDialogRef<any>,private fb: FormBuilder,public progressSpinnerService: ProgressSpinnerService,
  private router:Router,private notification: NotificationService,
  public summarySynonymbridgesLookupService: SummarySynonymbridgesLookupService
) { 
  this.AddEditMethod();
}

  private AddEditMethod() {
    //  let postRequestParams = {data:data,summaryParams:this.getSummaryResponse} ;
    debugger;
    if (this.dialogRef._containerInstance._config.data.data !== null) {
      let response = this.dialogRef._containerInstance._config.data.data; 

      this.AgencyID = response.AgencyID;
      this.AgencyName = response.AgencyName; 
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
      AgencyID:[''],
      AgencyName:['',Validators.required],  
      Description:['']
  }) 
  } 
  public SaveAgency(groupForm: FormGroup){    
    if(groupForm.valid == true) { 
      if (this.groupForm.value.AgencyName.trim() === "") {
        return this.errorMessage = 'Agency can not be null or empty';
      }  
        if (this.progressSpinnerService.isLoading == false) 
            this.progressSpinnerService.isLoading = true;    
            let UserId = parseInt(sessionStorage.getItem('userId')); 
            if ( this.groupForm.value.AgencyID > 0 && this.BtnSave === 'Update' && this.BtnAddEdit === 'Edit') {
              groupForm.value.ModifiedBy = UserId; 
              this.UpdateAgency(groupForm);
            }
            else{
              groupForm.value.CreatedBy = UserId;  
              this.AddAgency(groupForm);
            } 
       } 
       else{
          return true;
  }
  }
 
  private UpdateAgency(groupForm: FormGroup) {
    this.summarySynonymbridgesLookupService.UpdateAgency(groupForm.value).subscribe(data => {
      if (data !== 0 && data !== undefined && data !== null) { 

       this.notification.success("Agency updated successfully");
      let apiResponse =  {AgencyID: this.groupForm.value.AgencyID, AgencyName:this.groupForm.value.AgencyName, Description: this.groupForm.value.Description};
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

  private AddAgency(groupForm: FormGroup) {
    this.summarySynonymbridgesLookupService.SaveAgency(groupForm.value).subscribe(data => {
      if (data !== 0 && data !== undefined && data !== null) {
        this.progressSpinnerService.isLoading = false;
        if(data.code === 6){
          this.errorMessage = data.message ;
        }else{
          this.agencyResponse(data);
        }
       
      }
    }, (error: any) => {
      console.log(error);
      this.notification.error(error);
      this.progressSpinnerService.isLoading = false;
    });
  }

  private agencyResponse(res: WebApiResponse) {

     this.notification.success("Agency saved successfully"); 
     let apiResponse =  {AgencyID: res.response, AgencyName:this.groupForm.value.AgencyName, Description: this.groupForm.value.Description};
     let response = {key:'Insert',value:apiResponse};
     this.closeDialogOpp(response);
  }

  getAgencyName(){
    if (this.groupForm.controls.AgencyName.hasError('required')) {
      return 'Agency is required';
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
