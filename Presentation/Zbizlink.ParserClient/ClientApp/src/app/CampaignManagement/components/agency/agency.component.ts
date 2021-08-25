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
import { Agency } from '../../models/agency';
import { AgencyModel } from '../../models/agency-model';
import { SummarySynonymbridgesLookupService } from '../../services/summary-synonymbridges-lookup.service';
import { ConfirmationDialogComponent } from '../Dialogs/confirmation-dialog/confirmation-dialog.component';
import { AddEditAgencyComponent } from '../Dialogs/add-edit-agency/add-edit-agency.component';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css']
})
export class AgencyComponent implements OnInit {

 
  getAgenciesResponse:any[]=[]; 
  deleteAgencyId:Number = 0;  

 constructor(private dialogService: DialogService,private router:Router,
  public summarySynonymbridgesLookupService: SummarySynonymbridgesLookupService,
  public progressSpinnerService: ProgressSpinnerService,  
  private notification: NotificationService )
    {   
      
     }

  ngOnInit(): void {
    if(sessionStorage.getItem('CampaignUser')) {
      this.redirect();
       this.GetAgencies(); 
    }
 
  } 

  displayedColumns: string[] = ['AgencyName','Description', 'Edit','Delete'];
  dataSource = new MatTableDataSource<AgencyModel>();
   
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  } 
   
  // Add/save Agency 
  AddAgencies(){
    this.openDialogBox(null);
  }
  //  
  EditAgencies(element){
    debugger;
    this.openDialogBox(element);

  }
  //
  DeleteAgencies(element){ 
    debugger;
    if (element.AgencyID > 0) { 
     this.deleteAgencyId = element.AgencyID;
     let matDialogRef = this.dialogService.openDialog(
      { 
        width: '28%',
        data: 'Agency', 
        dailogComponent: ConfirmationDialogComponent
      });
    matDialogRef.afterClosed().subscribe(res => {  
      if(res !== undefined && res !== null && res !== ''){
        console.log(res.userInput);
        if (this.deleteAgencyId > 0  && res === 'yes') {
          // Perform deletion action here 
          if (this.progressSpinnerService.isLoading == false)  
          this.progressSpinnerService.isLoading = true; 
          this.summarySynonymbridgesLookupService.DeleteAgency(this.deleteAgencyId).subscribe((res: WebApiResponse)=>{   
// deletion failure code is 8 right now
if (res.code == '8') { 
        this.notification.error(res.message);
}else if(res.code == '1'){
  let tempData = this.dataSource.data.findIndex(a => a.AgencyID == this.deleteAgencyId);
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
    let postRequestParams = {data:data,summaryParams:this.getAgenciesResponse} ;
    let matDialogRef = this.dialogService.openDialog(
      {
        width: '81%',
        data: postRequestParams, 
        dailogComponent: AddEditAgencyComponent
      });
    matDialogRef.afterClosed().subscribe(res => { 
      debugger;
      if(res.key !== undefined && res.key !== null && res.key !== ''){
        console.log(res.key + "=" + res.value);
        if (res.key === 'Insert') {
          this.dataSource.data.push(res.value); 
        }else{
          let tempData = this.dataSource.data.findIndex(a => a.AgencyID == res.value.AgencyID);
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
    this.router.navigateByUrl('agency'); //use the stored url here
  }
  
 public GetAgencies() { 
  if (this.progressSpinnerService.isLoading == false)  
      this.progressSpinnerService.isLoading = true; 
      this.summarySynonymbridgesLookupService.GetAgencies().subscribe((res: WebApiResponse)=>{  
    debugger;
   if (res !== undefined || res !== null) {
    console.log(res);   
     this.getAgenciesResponse = res.response;
    this.dataSource =   new MatTableDataSource<AgencyModel>(this.getAgenciesResponse); 
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

    applyFilter(filterValue: string) { 
      this.dataSource.filter = filterValue.trim().toLowerCase();
      console.log(this.dataSource.filter);
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
}
