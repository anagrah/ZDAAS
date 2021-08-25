import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ProgressSpinnerService } from '../../../shared/services/progress-spinner.service';
import { Router } from '@angular/router';
import { CampaignLookupDataService } from '../../services/campaign-lookup-data.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { SummarySynonymbridgesLookupService } from '../../services/summary-synonymbridges-lookup.service';

@Component({
  selector: 'app-add-category-field',
  templateUrl: './add-category-field.component.html',
  styleUrls: ['./add-category-field.component.css']
})
export class AddCategoryFieldComponent implements OnInit {
  groupForm: FormGroup;
  Name:string='';
  response ;
  labelName:string ='';
  errorMessage:string = '';
  lblLength:Number =0; 
  constructor(
  //   @Optional()
  // @Inject(MAT_DIALOG_DATA) public data,
  public dialogRef: MatDialogRef<any>,private fb: FormBuilder,public progressSpinnerService: ProgressSpinnerService,
  public campaignLookupDataService: CampaignLookupDataService,private router:Router,private notification: NotificationService,
  public summarySynonymbridgesLookupService: SummarySynonymbridgesLookupService
) { 
  var res = this.dialogRef;
  this.response = res._containerInstance._config.data;
  if (this.response.id == 1) {
    this.labelName ='Synonym';
    this.lblLength = 100;
  }else if (this.response.id == 2) {
    this.labelName ='Agency';
    this.lblLength = 50;
  }else if (this.response.id == 3) {
    this.labelName ='Industry';
    this.lblLength = 100;
  }
  else if (this.response.id == 4) {
    this.labelName ='Contract Vehicle';
    this.lblLength = 50;
  }
}

  ngOnInit(): void {
    // if (sessionStorage.getItem('CampaignUser')) {
    //   this.redirect();
    // } 
    this.groupForm = this.fb.group({
      Name:['', Validators.required] 
   
  }) 
  }
  public save(groupForm: FormGroup){  
    if(groupForm.valid == true) {  
      var userId = sessionStorage.getItem('userId');
      this.groupForm.value.CreatedBy = userId;  
     
    if(this.progressSpinnerService.isLoading == false)  
       this.progressSpinnerService.isLoading = true; 
       debugger;
      if (this.labelName =='Synonym') {
        // call synonym save method 
        this.groupForm.value.Synonym = groupForm.value.Name;
        if (this.response.SummaryFieldId !== undefined ) {
          this.groupForm.value.SummaryFieldId = this.response.SummaryFieldId;
          this.SaveSummarySynonym(groupForm);
        }else{
          this.groupForm.value.ModifiedBy = userId;
          this.groupForm.value.CategoryId = this.response.categoryID;
          this.SaveSynonym(groupForm);
        }
      
        
      }else if (this.labelName =='Agency') {
          // call Agency save method 
          this.groupForm.value.AgencyName = groupForm.value.Name;
          this.groupForm.value.Description = "";
          this.SaveAgency(groupForm);
      }else if (this.labelName =='Industry') {
       // call Industry save method
       this.groupForm.value.IndustryName = groupForm.value.Name;
       this.groupForm.value.Description = "";
       this.SaveIndustry(groupForm);
      }
      else if (this.labelName =='Contract Vehicle') {
    // call Contract Vehicle save method
        this.groupForm.value.ContractVehicleName = groupForm.value.Name;
        this.groupForm.value.Description = "";
        this.SaveContractVehicle(groupForm);
      } 
      this.progressSpinnerService.isLoading = false;
} 

  }
  private SaveAgency(groupForm: FormGroup) {
    this.campaignLookupDataService.SaveAgency(groupForm.value).subscribe(response => {
      if (response.code == 1) {
        debugger;
        //  response.response // new generated id
        this.notification.success(this.labelName + ' added successfully');
        let data = { id:  response.response ,name:groupForm.value.Name ,labelName:this.labelName};
        this.closeDialogOpp(data);
        this.progressSpinnerService.isLoading = false;
      }
      else {
        this.errorMessage = response.message;
      }
    });
  }

  private SaveSynonym(groupForm: FormGroup) {
    this.campaignLookupDataService.SaveSynonym(groupForm.value).subscribe(response => {
      if (response.code == 1) {
        debugger;
        //  response.response // new generated id
        this.notification.success(this.labelName + ' added successfully');
        let data = { id:  response.response ,name:groupForm.value,labelName:this.labelName };
        this.closeDialogOpp(data);
        this.progressSpinnerService.isLoading = false;
      }
      else {
        this.errorMessage = response.message;
      }
    });
  }
//
private SaveSummarySynonym(groupForm: FormGroup) {
  this.summarySynonymbridgesLookupService.SaveSummarySynonym(groupForm.value).subscribe(response => {
    if (response.code == 1) {
      debugger;
      //  response.response // new generated id
      this.notification.success(this.labelName + ' added successfully');
      let data = { id:  response.response ,name:groupForm.value,labelName:this.labelName };
      this.closeDialogOpp(data);
      this.progressSpinnerService.isLoading = false;
    }
    else {
      this.errorMessage = response.message;
    }
  });
}
//
private SaveIndustry(groupForm: FormGroup) {
  this.campaignLookupDataService.SaveIndustry(groupForm.value).subscribe(response => {
    if (response.code == 1) {
      debugger;
      //  response.response // new generated id
      this.notification.success(this.labelName + ' added successfully');
      let data = { id:  response.response ,name:groupForm.value.Name,labelName:this.labelName };
      this.closeDialogOpp(data);
      this.progressSpinnerService.isLoading = false;
    }
    else {
      this.errorMessage = response.message;
    }
  });
}
//
private SaveContractVehicle(groupForm: FormGroup) {
  this.campaignLookupDataService.SaveContractVehicle(groupForm.value).subscribe(response => {
    if (response.code == 1) {
      //  response.response // new generated id
      this.notification.success(this.labelName + ' added successfully');
      let data = { id:  response.response ,name:groupForm.value.Name,labelName:this.labelName };
      this.closeDialogOpp(data);
      this.progressSpinnerService.isLoading = false;
    }
    else {
      this.errorMessage = response.message; 
    }
  });
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
}
