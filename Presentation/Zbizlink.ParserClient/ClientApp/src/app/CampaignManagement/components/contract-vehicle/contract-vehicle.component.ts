import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { WebApiResponse } from 'src/app/shared/models/WebApiResponse';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ProgressSpinnerService } from 'src/app/shared/services/progress-spinner.service';
import { DialogService } from '../../../shared/services/dialog.service';    
import { ConfirmationDialogComponent } from '../Dialogs/confirmation-dialog/confirmation-dialog.component'; 
import { ContractVehicleModel } from '../../models/contract-vehicle-model';
import { AddEditContractVehicleComponent } from '../Dialogs/add-edit-contract-vehicle/add-edit-contract-vehicle.component';
import { ContractVehicleService } from '../../services/contract-vehicle.service';

@Component({
  selector: 'app-contract-vehicle',
  templateUrl: './contract-vehicle.component.html',
  styleUrls: ['./contract-vehicle.component.css']
})
export class ContractVehicleComponent implements OnInit {

   
  getContractVehicleResponse:any[]=[]; 
  deleteContractVehicleId:Number = 0;  

 constructor(private dialogService: DialogService,private router:Router,
  public contractVehicleService: ContractVehicleService,
  public progressSpinnerService: ProgressSpinnerService,  
  private notification: NotificationService )
    {   
      
     }

  ngOnInit(): void {
    if(sessionStorage.getItem('CampaignUser')) {
      this.redirect();
       this.GetContractVehicle(); 
    }
 
  } 

  displayedColumns: string[] = ['ContractVehicleName','Description', 'Edit','Delete'];
  dataSource = new MatTableDataSource<ContractVehicleModel>();
   
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  } 
   
  // Add/save Agency 
  AddContractVehicle(){
    this.openDialogBox(null);
  }
  //  
  EditContractVehicle(element){
    debugger;
    this.openDialogBox(element);

  }
  //
  DeleteContractVehicle(element){ 
    debugger;
    if (element.ContractVehicleId > 0) { 
     this.deleteContractVehicleId = element.ContractVehicleId;
     let matDialogRef = this.dialogService.openDialog(
      { 
        width: '28%',
        data: 'Contract Vehicle', 
        dailogComponent: ConfirmationDialogComponent
      });
    matDialogRef.afterClosed().subscribe(res => {  
      if(res !== undefined && res !== null && res !== ''){
        console.log(res.userInput);
        if (this.deleteContractVehicleId > 0  && res === 'yes') {
          // Perform deletion action here 
          if (this.progressSpinnerService.isLoading == false)  
          this.progressSpinnerService.isLoading = true; 
          this.contractVehicleService.DeleteContractVehicle(this.deleteContractVehicleId).subscribe((res: WebApiResponse)=>{   
// deletion failure code is 8 right now
if (res.code == '8') { 
        this.notification.error(res.message);
}else if(res.code == '1'){
  let tempData = this.dataSource.data.findIndex(a => a.ContractVehicleId == this.deleteContractVehicleId);
  if (tempData !== -1 && tempData != null && tempData !== undefined) {
    // replace value 
    this.dataSource.data.splice(tempData,1);
    // to refresh and update grid data ,use below line
    this.dataSource.paginator = this.paginator;
  }
  this.notification.success('Record deleted successfully');
}
this.progressSpinnerService.isLoading = false;
      },
      (error: any) => {
        console.log(error);
        this.notification.error(error);
        this.progressSpinnerService.isLoading = false; 
      })
    }else{
          // cancel action
        }
      } 
    });
    }
  }
  openDialogBox (data:any): void {
    let postRequestParams = {data:data,summaryParams:this.getContractVehicleResponse} ;
    let matDialogRef = this.dialogService.openDialog(
      {
        width: '81%',
        data: postRequestParams, 
        dailogComponent: AddEditContractVehicleComponent
      });
    matDialogRef.afterClosed().subscribe(res => { 
      debugger;
      if(res.key !== undefined && res.key !== null && res.key !== ''){
        console.log(res.key + "=" + res.value);
        if (res.key === 'Insert') {
          this.dataSource.data.push(res.value); 
        }else{
          let tempData = this.dataSource.data.findIndex(a => a.ContractVehicleId == res.value.ContractVehicleId);
          if (tempData !== -1 && tempData != null && tempData !== undefined) {
            // replace value 
            this.dataSource.data.splice(tempData,1,res.value);
            
          }
        }
        // to refresh and update grid data ,use below line
        this.dataSource.paginator = this.paginator;
      } 
    });
  };
   
  private redirect(): void {  
    this.router.navigateByUrl('contract-vehicle'); //use the stored url here
  }
  
 public GetContractVehicle() { 
  if (this.progressSpinnerService.isLoading == false)  
      this.progressSpinnerService.isLoading = true; 
      this.contractVehicleService.GetContractVehicle().subscribe((res: WebApiResponse)=>{  
    debugger;
   if (res !== undefined || res !== null) {
    console.log(res);   
     this.getContractVehicleResponse = res.response;
    this.dataSource =   new MatTableDataSource<ContractVehicleModel>(this.getContractVehicleResponse); 
    this.dataSource.paginator = this.paginator;
    this.progressSpinnerService.isLoading = false;
   }
    },
    (error: any) => {
      console.log(error);
      this.notification.error(error);
      this.progressSpinnerService.isLoading = false; 
    }
    )}
    // Data Filter
    applyFilter(filterValue: string) { 
      this.dataSource.filter = filterValue.trim().toLowerCase();
      console.log(this.dataSource.filter);
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
}
