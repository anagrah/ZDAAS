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
  selector: 'app-add-edit-summary',
  templateUrl: './add-edit-summary.component.html',
  styleUrls: ['./add-edit-summary.component.css']
})
export class AddEditSummaryComponent implements OnInit {
  groupForm: FormGroup;
  Name:string='';
  response ; 
  errorMessage:string = '';
  emptyFieldName:string = ''; 
 
  Description :string = '';
  DisplayOrder : Number;
  FieldName :string = '';
  Mandatory :boolean = false;
  SummaryFieldId :Number;
  
  //
  existingDisplayOrder:string = '';
   
  // change button values on add / edit 

  BtnSave:string='';
  BtnAddEdit:string= '';

  constructor( 
  public dialogRef: MatDialogRef<any>,private fb: FormBuilder,public progressSpinnerService: ProgressSpinnerService,
  public campaignLookupDataService: CampaignLookupDataService,private router:Router,private notification: NotificationService,
  public summarySynonymbridgesLookupService: SummarySynonymbridgesLookupService
) { 
  this.AddEditMethod();
}

  private AddEditMethod() {
    //  let postRequestParams = {data:data,summaryParams:this.getSummaryResponse} ;
    debugger;
    if (this.dialogRef._containerInstance._config.data.data !== null) {
      let response = this.dialogRef._containerInstance._config.data.data;
      this.Description = response.Description;
      this.DisplayOrder = response.DisplayOrder;
      this.FieldName = response.FieldName;
      this.Mandatory = response.Mandatory;
      this.SummaryFieldId = response.SummaryFieldId;
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
      FieldName:['',Validators.required],
      DisplayOrder:['', Validators.required] ,
      Mandatory:['',Validators.required],
      Description:[''],
      SummaryFieldId:['']
  }) 
  }  
  public SaveSummary(groupForm: FormGroup){  
    debugger;    
   
    if(groupForm.valid == true) {  
      if (this.groupForm.value.FieldName.trim() === "") {
        return this.emptyFieldName = 'Summary field can not be null or empty';
      } 
             if(this.checkDisplayOrder(groupForm.value.SummaryFieldId,groupForm.value.DisplayOrder) === true) {
                     return  this.errorMessage =  this.existingDisplayOrder;
                 } 
                 
                      if (this.progressSpinnerService.isLoading == false) 
                              this.progressSpinnerService.isLoading = true;   

                      let UserId = parseInt(sessionStorage.getItem('userId')); 
                      
                      if ( this.groupForm.value.SummaryFieldId > 0 && this.BtnSave === 'Update' && this.BtnAddEdit === 'Edit') {
                            groupForm.value.ModifiedBy = UserId; 
                            this.UpdateSummary(groupForm);
                        }
                      else{
                            groupForm.value.CreatedBy = UserId;//parseInt(sessionStorage.getItem('userId'));  
                            this.AddSummary(groupForm);
                          }
                       
       } 
       else{
              return true;
          }
  }
private checkDisplayOrder(summaryFieldId:Number,displayOrder:Number):boolean{
  let isExists = false;
  let tempData = this.dialogRef._containerInstance._config.data.summaryParams.find(a => a.DisplayOrder == displayOrder && a.SummaryFieldId != summaryFieldId);
  console.log(tempData);
  if (tempData !== undefined ) {
    isExists = true ; 
    this.existingDisplayOrder = 'Display order already exists in '+ tempData.FieldName;  
  } 
  return isExists;
}
  private UpdateSummary(groupForm: FormGroup) {
    this.summarySynonymbridgesLookupService.UpdateSummary(groupForm.value).subscribe(data => {
      if (data !== 0 && data !== undefined && data !== null) {
       // this.summaryResponse(data);

       this.notification.success("summary data updated successfully");
      let apiResponse =  {SummaryFieldId: this.groupForm.value.SummaryFieldId, FieldName:this.groupForm.value.FieldName, Description: this.groupForm.value.Description, DisplayOrder: parseInt(this.groupForm.value.DisplayOrder), Mandatory: this.groupForm.value.Mandatory};
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

  private AddSummary(groupForm: FormGroup) {
    this.summarySynonymbridgesLookupService.SaveSummary(groupForm.value).subscribe(data => {
      if (data !== 0 && data !== undefined && data !== null) { 
        this.progressSpinnerService.isLoading = false;
        if(data.code === 6){
          this.emptyFieldName = data.message ;
        }else{
          this.summaryResponse(data);
        }
      }
    }, (error: any) => {
      console.log(error);
      this.notification.error(error);
      this.progressSpinnerService.isLoading = false;
    });
  }

  private summaryResponse(res: WebApiResponse) {

     this.notification.success("summary data saved successfully");
     //this.groupForm.value.SummaryFieldId = res.response;
     let apiResponse =  {SummaryFieldId: res.response, FieldName:this.groupForm.value.FieldName, Description: this.groupForm.value.Description, DisplayOrder: parseInt(this.groupForm.value.DisplayOrder), Mandatory: this.groupForm.value.Mandatory};
     let response = {key:'Insert',value:apiResponse};
     this.closeDialogOpp(response);
  }

  getFieldName(){
    if (this.groupForm.controls.FieldName.hasError('required')) {
      return 'Summary field is required';
    }
  }

  getDisplayOrder(){
    if (this.groupForm.controls.DisplayOrder.hasError('required')) {
      return 'Display order number is required';
    }
  }

   
  ok(): void { 

  }
 closeDialogOpp(data): void { 
   this.dialogRef.close(data);
 }
 onFocus() {
  this.errorMessage = '';
  this.emptyFieldName = '';
}
onClearErrorMessage() { 
  this.emptyFieldName = '';
}

 
onCheckboxChange($event){
  
}
}
