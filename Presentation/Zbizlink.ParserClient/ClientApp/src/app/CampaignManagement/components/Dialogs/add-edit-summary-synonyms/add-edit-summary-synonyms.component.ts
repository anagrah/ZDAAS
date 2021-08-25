import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ProgressSpinnerService } from 'src/app/shared/services/progress-spinner.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { Router } from '@angular/router';
import { CampaignLookupDataService } from '../../../services/campaign-lookup-data.service';
import { Category } from '../../../models/category';
import { WebApiResponse } from 'src/app/shared/models/WebApiResponse';
import { SummarySynonymbridgesLookupService } from '../../../services/summary-synonymbridges-lookup.service';
import { RFPSummaryField } from '../../../models/rfpsummary-field';

@Component({
  selector: 'app-add-edit-summary-synonyms',
  templateUrl: './add-edit-summary-synonyms.component.html',
  styleUrls: ['./add-edit-summary-synonyms.component.css']
})
export class AddEditSummarySynonymsComponent implements OnInit {

   
  groupForm: FormGroup;
  Name:string='';
  response ; 
  errorMessage:string = '';
   
  SynonymId :Number;
  Synonym:string ;
  CategoryId:Number ;

  //RfpsummarySynonymId:Number;
  SummaryFieldId:Number;
  Description :string = '';
  SummarySynonymId:Number;

  SummaryFields:RFPSummaryField[] = [];
  
  //
  existingDisplayOrder:string = '';
  
  // change button values on add / edit 

  BtnSave:string='';
  BtnAddEdit:string= '';
 
  constructor( 
  public dialogRef: MatDialogRef<any>,private fb: FormBuilder,public progressSpinnerService: ProgressSpinnerService,
  public campaignLookupDataService: CampaignLookupDataService,
  public summarySynonymbridgesLookupService: SummarySynonymbridgesLookupService,
  private router:Router,private notification: NotificationService,
   
) { 
  this.AddEditMethod();
}

  private AddEditMethod() {
    //  let postRequestParams = {data:data,summaryParams:this.getSummaryResponse} ;
    debugger; 

    if (this.dialogRef._containerInstance._config.data.data !== null) {
      let response = this.dialogRef._containerInstance._config.data.data; 
      this.SummarySynonymId = response.SummarySynonymId;
      this.SummarySynonymId = response.SummarySynonymId;
      this.Synonym = response.Synonym;
      this.SummaryFieldId = response.SummaryFieldId; 
      this.Description = response.Description;
      this.Name = response.Name; 

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
     // RfpsummarySynonymId:[''],
      SummarySynonymId:[''],
      SummaryFieldId:['',Validators.required],
      Synonym:['',Validators.required],
      Description:['']
       
  }) 
 let categoriesResponse = this.GetSummaryFields();
 console.log(categoriesResponse);
  }
  // on change roles 
  onChangeDropdownItem($event){  
    debugger; 
    return this.SummaryFields;
  } 
  public GetSummaryFields() { 
    this.summarySynonymbridgesLookupService.GetSummaryField().subscribe((res: WebApiResponse)=>{
      debugger;
      this.SummaryFields = res.response; 
      
      },
      (error: any) => {
        console.log(error);
        this.notification.error(error);
        this.progressSpinnerService.isLoading = false; 
      }
    ) 
    }    
  public SaveCategorySynonyms(groupForm: FormGroup){  
    debugger;
    if(groupForm.valid == true) {   
      if (this.groupForm.value.Synonym.trim() === "") {
        return this.errorMessage = 'Summary synonym can not be null or empty';
      } 
      
        if (this.progressSpinnerService.isLoading == false) 
            this.progressSpinnerService.isLoading = true;    
            let UserId = parseInt(sessionStorage.getItem('userId')); 
            if ( this.groupForm.value.SummarySynonymId > 0 && this.BtnSave === 'Update' && this.BtnAddEdit === 'Edit') {
              groupForm.value.ModifiedBy = UserId; 
              groupForm.value.SummarySynonymId = this.groupForm.value.SummarySynonymId;
              this.UpdateSummarySynonym(groupForm);
            }
            else{
              groupForm.value.CreatedBy = UserId; 
              this.AddSummarySynonym(groupForm);
            } 
       } 
       else{
          return true;
  }
  }
  private UpdateSummarySynonym(groupForm: FormGroup) {
    debugger;
    this.summarySynonymbridgesLookupService.SummarySynonymEdit(groupForm.value).subscribe(data => {
      if (data !== 0 && data !== undefined && data !== null) { 
       this.notification.success("Summary synonyms updated successfully");  
       let objSummaryFields = this.SummaryFields.find(s=>s.SummaryFieldId ==this.groupForm.value.SummaryFieldId); 
       let apiResponse =  {SummarySynonymId: this.groupForm.value.SummarySynonymId, Synonym:this.groupForm.value.Synonym, SummaryFieldId: this.groupForm.value.SummaryFieldId, Name: objSummaryFields.FieldName,Description:this.groupForm.value.Description};
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

  private AddSummarySynonym(groupForm: FormGroup) {
    this.summarySynonymbridgesLookupService.SaveSummarySynonym(groupForm.value).subscribe(data => {
      if (data !== 0 && data !== undefined && data !== null) { 
        this.progressSpinnerService.isLoading = false;
        if(data.code === 6){
          this.errorMessage = data.message ;
        }else{
          this.summarySynonymResponse(data);
        }
      }
    }, (error: any) => {
      console.log(error);
      this.notification.error(error);
      this.progressSpinnerService.isLoading = false;
    });
  } 
  private summarySynonymResponse(res: WebApiResponse) {

     this.notification.success("Summary synonyms saved successfully");
     let objSummaryFields = this.SummaryFields.find(s=>s.SummaryFieldId == this.groupForm.value.SummaryFieldId); 
     let apiResponse =  {SummarySynonymId: res.response, Synonym:this.groupForm.value.Synonym, SummaryFieldId: this.groupForm.value.SummaryFieldId, Name: objSummaryFields.FieldName,Description:this.groupForm.value.Description};
     let response = {key:'Insert',value:apiResponse};
     this.closeDialogOpp(response);
  }

  getSynonym(){
    if (this.groupForm.controls.Synonym.hasError('required')) {
      return 'Summary synonym is required';
    }
  }
  getSummaryFieldId(){
    if (this.groupForm.controls.SummaryFieldId.hasError('required')) {
      return 'Summary type is required';
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
