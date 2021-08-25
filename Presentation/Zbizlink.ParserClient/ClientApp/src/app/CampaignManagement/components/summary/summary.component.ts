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
import { CampaignOpportunities } from '../../models/CampaignOpportunities'; 
import { OpportunityLinkComponent } from '../../shared/opportunity-link/opportunity-link.component';
import { SendEmailComponent } from '../send-email/send-email.component'; 
import { RFPSummaryField } from 'src/app/CampaignManagement/models/rfpsummary-field';
import { AddEditSummaryComponent } from '../Dialogs/add-edit-summary/add-edit-summary.component';
import { SummarySynonymbridgesLookupService } from '../../services/summary-synonymbridges-lookup.service';
import { ConfirmationDialogComponent } from '../Dialogs/confirmation-dialog/confirmation-dialog.component';
 

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  

  disabled = true;
  isHidden:boolean = false;
  OpportunityURL:string ='';
  showAddBtn:boolean = false;
  
  getSummaryResponse:any[]=[];

  deleteSuummaryFieldId:Number = 0;
  errorMessage:string ='';

 constructor(private dialogService: DialogService,private router:Router,
  public summarySynonymbridgesLookupService: SummarySynonymbridgesLookupService,
  public progressSpinnerService: ProgressSpinnerService
 ,private notification: NotificationService )
    {   
      
     }

  ngOnInit(): void {
    if(sessionStorage.getItem('CampaignUser')) {
      this.redirect();
       this.GetSummaryField();
      

    }
   
  }
  
  OpportunityName:string ='';


  displayedColumns: string[] = ['FieldName', 'Description','DisplayOrder','Mandatory', 'Edit','Delete'];
  dataSource = new MatTableDataSource<RFPSummaryField>();
   
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  } 
  onAddProperty(obj) {
    debugger;
    
  }
  //
  GetSummary(){

  }
  // Add/save summary 
  AddSummary(){
    this.openDialogBox(null);
  }
  //  
  EditSummary(element){
    debugger;
    if(element.FieldName === 'Solicitation Title' || element.FieldName === 'Solicitation Number' || element.FieldName === 'Requesting Agency' ||
     element.FieldName === 'Original Posted Date' || element.FieldName === 'Closing Date and Time'){
      this.notification.warning(element.FieldName + ' can not be edited');
      return;
     }
    this.openDialogBox(element);

  }
  //
  DeleteSummary(element){ 
    debugger;

    if(element.FieldName === 'Solicitation Title' || element.FieldName === 'Solicitation Number' || element.FieldName === 'Requesting Agency' ||
     element.FieldName === 'Original Posted Date' || element.FieldName === 'Closing Date and Time'){
      this.notification.warning(element.FieldName + ' can not be deleted');
      return;
     }

    if (element.SummaryFieldId > 0) {
     // 
     this.deleteSuummaryFieldId = element.SummaryFieldId;
     let matDialogRef = this.dialogService.openDialog(
      { 
        width: '28%',
        data: 'Summary', 
        dailogComponent: ConfirmationDialogComponent
      });
    matDialogRef.afterClosed().subscribe(res => {  
      if(res !== undefined && res !== null && res !== ''){
        console.log(res.userInput);
        if (this.deleteSuummaryFieldId > 0  && res === 'yes') {
          // Perform deletion action here 
          if (this.progressSpinnerService.isLoading == false)  
          this.progressSpinnerService.isLoading = true; 
      this.summarySynonymbridgesLookupService.DeleteSummaryField(this.deleteSuummaryFieldId).subscribe((res: WebApiResponse)=>{   
// deletion failure code is 8 right now
if (res.code == '8') { 
        this.notification.error(res.message);
}else if(res.code == '1'){
  let tempData = this.dataSource.data.findIndex(a => a.SummaryFieldId == this.deleteSuummaryFieldId);
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
      }
    
    )

        }else{
          // cancel action
        }
      } 
    });
    }
  }
  openDialogBox (data:any): void {
    let postRequestParams = {data:data,summaryParams:this.getSummaryResponse} ;
    let matDialogRef = this.dialogService.openDialog(
      {
        width: '81%',
        data: postRequestParams, 
        dailogComponent: AddEditSummaryComponent
      });
    matDialogRef.afterClosed().subscribe(res => { 
      debugger;
      if(res.key !== undefined && res.key !== null && res.key !== ''){
        console.log(res.key + "=" + res.value);
        if (res.key === 'Insert') {
          this.dataSource.data.push(res.value); 
        }else{
          let tempData = this.dataSource.data.findIndex(a => a.SummaryFieldId == res.value.SummaryFieldId);
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
    this.router.navigateByUrl('summary'); //use the stored url here
  }
 // Get user list
 public GetSummaryField() { 
  if (this.progressSpinnerService.isLoading == false)  
      this.progressSpinnerService.isLoading = true; 
  this.summarySynonymbridgesLookupService.GetSummaryField().subscribe((res: WebApiResponse)=>{  
    
   if (res !== undefined || res !== null) {
    console.log(res);   
     this.getSummaryResponse = res.response;
    this.dataSource =   new MatTableDataSource<RFPSummaryField>(res.response); 
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
 
// Data filter
applyFilter(filterValue: string) { 
  this.dataSource.filter = filterValue.trim().toLowerCase();
  console.log(this.dataSource.filter);
  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
}
