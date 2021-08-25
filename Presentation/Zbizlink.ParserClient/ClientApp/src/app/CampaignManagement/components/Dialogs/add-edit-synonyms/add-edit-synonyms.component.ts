import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Validators, FormBuilder, FormGroup } from '@angular/forms'; 
import { Router } from '@angular/router'; 
import { NotificationService } from 'src/app/shared/services/notification.service'; 
import { CampaignLookupDataService } from '../../../services/campaign-lookup-data.service'; 
import { ProgressSpinnerService } from '../../../../shared/services/progress-spinner.service';
import { WebApiResponse } from '../../../../shared/models/WebApiResponse';
import { Category } from '../../../models/category';
import { DocumentUploadService } from '../../../../parser/services/document-upload.service';

@Component({
  selector: 'app-add-edit-synonyms',
  templateUrl: './add-edit-synonyms.component.html',
  styleUrls: ['./add-edit-synonyms.component.css']
})
export class AddEditSynonymsComponent implements OnInit {

  groupForm: FormGroup;
  Name:string='';
  response ; 
  errorMessage:string = '';
   
  SynonymId :Number;
  Synonym:string ;
  CategoryId:Number ;
   
  categories: Category[] = [];
  //
  existingDisplayOrder:string = '';
  
  // change button values on add / edit 

  BtnSave:string='';
  BtnAddEdit:string= '';

  constructor( 
  public dialogRef: MatDialogRef<any>,private fb: FormBuilder,public progressSpinnerService: ProgressSpinnerService,
  public campaignLookupDataService: CampaignLookupDataService,private router:Router,private notification: NotificationService,
  public documentUploadService: DocumentUploadService
) { 
  this.AddEditMethod();
}

  private AddEditMethod() {
    //  let postRequestParams = {data:data,summaryParams:this.getSummaryResponse} ;
    debugger; 

    if (this.dialogRef._containerInstance._config.data.data !== null) {
      let response = this.dialogRef._containerInstance._config.data.data;
      this.SynonymId = response.SynonymId;
      this.Synonym = response.Synonym;
      this.CategoryId = response.CategoryId; 
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
      SynonymId :[''],
      Synonym:['',Validators.required],
      CategoryId: ['',Validators.required],
      Name:['']
  }) 
 let categoriesResponse = this.GetCategories();
 console.log(categoriesResponse);
  }
  // on change roles 
  onChangeDropdownItem($event){  
    debugger; 
    return this.categories;
  }
  
  public GetCategories() { 
    this.documentUploadService.GetCategoryNameList().subscribe((res: WebApiResponse)=>{
      this.categories = res.response;   
      },
      (error: any) => {
        console.log(error);
        this.notification.error(error);
        this.progressSpinnerService.isLoading = false; 
      }
    ) 
    }     
  public SaveCategorySynonyms(groupForm: FormGroup){  
    if(groupForm.valid == true) {   
      if (this.groupForm.value.Synonym.trim() === "") {
        return this.errorMessage = 'Synonym can not be null or empty';
      }        
        if (this.progressSpinnerService.isLoading == false) 
            this.progressSpinnerService.isLoading = true;    
            let UserId = parseInt(sessionStorage.getItem('userId')); 
            if ( this.groupForm.value.SynonymId > 0 && this.BtnSave === 'Update' && this.BtnAddEdit === 'Edit') {
              groupForm.value.ModifiedBy = UserId; 
              this.UpdateCategorySynonym(groupForm);
            }
            else{
              groupForm.value.CreatedBy = UserId; 
              this.AddCategorySynonym(groupForm);
            } 
       } 
       else{
          return true;
  }
  }
  private UpdateCategorySynonym(groupForm: FormGroup) {
    this.campaignLookupDataService.EditCategoriesAndSynonym(groupForm.value).subscribe(data => {
      if (data !== 0 && data !== undefined && data !== null) { 
       this.notification.success("Category synonyms updated successfully");
       let categoryObj = this.categories.find(s=>s.CategoryId ==this.groupForm.value.CategoryId); 
      let apiResponse =  {SynonymId: this.groupForm.value.SynonymId, Synonym:this.groupForm.value.Synonym, CategoryId: this.groupForm.value.CategoryId, Name: categoryObj.Name};
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

  private AddCategorySynonym(groupForm: FormGroup) {
    this.campaignLookupDataService.CategorySynonymInsert(groupForm.value).subscribe(data => {
      if (data !== 0 && data !== undefined && data !== null) {        
        this.progressSpinnerService.isLoading = false;
        if(data.code === 6){
          this.errorMessage = data.message ;
        }else{
          this.categorySynonymResponse(data);
        }
      }
    }, (error: any) => {
      console.log(error);
      this.notification.error(error);
      this.progressSpinnerService.isLoading = false;
    });
  } 
  private categorySynonymResponse(res: WebApiResponse) {

     this.notification.success("Category synonyms saved successfully");
     let categoryObj = this.categories.find(s=>s.CategoryId ==this.groupForm.value.CategoryId); 
     let apiResponse =  {SynonymId: res.response, Synonym:this.groupForm.value.Synonym, CategoryId: this.groupForm.value.CategoryId, Name: categoryObj.Name};
     let response = {key:'Insert',value:apiResponse};
     this.closeDialogOpp(response);
  }

  getSynonym(){
    if (this.groupForm.controls.Synonym.hasError('required')) {
      return 'Synonym is required';
    }
  }
  getCategoryId(){
    if (this.groupForm.controls.CategoryId.hasError('required')) {
      return 'Category type is required';
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

 getName() { 
  if (this.groupForm.controls.Name.hasError('required')) {
    return ' is required';
  }
}
onCheckboxChange($event){
  
}
}
