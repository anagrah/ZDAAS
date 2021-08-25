import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service'; 
import { ProgressSpinnerService } from '../../../../shared/services/progress-spinner.service';
import { ContractVehicleService } from '../../../services/contract-vehicle.service';
import { WebApiResponse } from '../../../../shared/models/WebApiResponse';

@Component({
  selector: 'app-add-edit-contract-vehicle',
  templateUrl: './add-edit-contract-vehicle.component.html',
  styleUrls: ['./add-edit-contract-vehicle.component.css']
})
export class AddEditContractVehicleComponent implements OnInit {
    
  groupForm: FormGroup;  
  errorMessage:string = '';
     
  ContractVehicleId :Number;
  ContractVehicleName :string = ''; 
  Description :string = ''; 
  // change button values on add / edit 

  BtnSave:string='';
  BtnAddEdit:string= '';

  constructor( 
  public dialogRef: MatDialogRef<any>,private fb: FormBuilder,public progressSpinnerService: ProgressSpinnerService,
  private router:Router,private notification: NotificationService,public contractVehicleService:ContractVehicleService
  
) { 
  this.AddEditMethod();
}

  private AddEditMethod() {
    //  let postRequestParams = {data:data,summaryParams:this.getSummaryResponse} ;
    debugger;
    if (this.dialogRef._containerInstance._config.data.data !== null) {
      let response = this.dialogRef._containerInstance._config.data.data; 

      this.ContractVehicleId = response.ContractVehicleId;
      this.ContractVehicleName = response.ContractVehicleName; 
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
      ContractVehicleId:[''],
      ContractVehicleName:['',Validators.required],  
      Description:['']
  }) 
  } 
  public SaveContractVehicle(groupForm: FormGroup){      
    if(groupForm.valid == true) {   
      if (this.groupForm.value.ContractVehicleName.trim() === "") {
        return this.errorMessage = 'Contract vehicle can not be null or empty';
      }  
        if (this.progressSpinnerService.isLoading == false) 
            this.progressSpinnerService.isLoading = true;    
            let UserId = parseInt(sessionStorage.getItem('userId')); 
            if ( this.groupForm.value.ContractVehicleId > 0 && this.BtnSave === 'Update' && this.BtnAddEdit === 'Edit') {
              groupForm.value.ModifiedBy = UserId; 
              this.UpdateContractVehicle(groupForm);
            }
            else{
              groupForm.value.CreatedBy = UserId;  
              this.AddContractVehicle(groupForm);
            } 
       } 
       else{
          return true;
  }
  }
 
  private UpdateContractVehicle(groupForm: FormGroup) {
    this.contractVehicleService.UpdateContractVehicle(groupForm.value).subscribe(data => {
      if (data !== 0 && data !== undefined && data !== null) { 

       this.notification.success("Contract vehicle updated successfully");
      let apiResponse =  {ContractVehicleId: this.groupForm.value.ContractVehicleId, ContractVehicleName:this.groupForm.value.ContractVehicleName, Description: this.groupForm.value.Description};
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

  private AddContractVehicle(groupForm: FormGroup) {
    this.contractVehicleService.SaveContractVehicle(groupForm.value).subscribe(data => {
      if (data !== 0 && data !== undefined && data !== null) {
        this.progressSpinnerService.isLoading = false;
        if(data.code === 6){
          this.errorMessage = data.message ;
        }else{
          this.contractVehicleResponse(data);
        } 
      }
    }, (error: any) => {
      console.log(error);
      this.notification.error(error);
      this.progressSpinnerService.isLoading = false;
    });
  }

  private contractVehicleResponse(res: WebApiResponse) {

     this.notification.success("Contract vehicle saved successfully"); 
     let apiResponse =  {ContractVehicleId: res.response, ContractVehicleName:this.groupForm.value.ContractVehicleName, Description: this.groupForm.value.Description};
     let response = {key:'Insert',value:apiResponse};
     this.closeDialogOpp(response);
  }

  getContractVehicleName(){
    if (this.groupForm.controls.ContractVehicleName.hasError('required')) {
      return 'Contract vehicle is required';
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
