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
import { ConfirmationDialogComponent } from '../Dialogs/confirmation-dialog/confirmation-dialog.component';
import { CampaignLookupDataService } from '../../services/campaign-lookup-data.service';
import { AddEditSynonymsComponent } from '../Dialogs/add-edit-synonyms/add-edit-synonyms.component';
import { DocumentUploadService } from '../../../parser/services/document-upload.service';
import { Category } from '../../models/category';
import { SummarySynonym } from '../../models/summary-synonym';
import { SummarySynonymbridgesLookupService } from '../../services/summary-synonymbridges-lookup.service';
import { AddEditSummarySynonymsComponent } from '../Dialogs/add-edit-summary-synonyms/add-edit-summary-synonyms.component'; 
import { RFPSummaryField } from '../../models/rfpsummary-field';

@Component({
  selector: 'app-summary-synonym-list',
  templateUrl: './summary-synonym-list.component.html',
  styleUrls: ['./summary-synonym-list.component.css']
})
export class SummarySynonymListComponent implements OnInit {
 
  getSummaryResponse:any[]=[]; 
  deleteSummarySynonymId:Number = 0; 
  summarySynonymArray:SummarySynonym[] = [];
  categories:RFPSummaryField[] = [];

 constructor(private dialogService: DialogService,private router:Router,
  public summarySynonymbridgesLookupService: SummarySynonymbridgesLookupService,
  public progressSpinnerService: ProgressSpinnerService, public documentUploadService: DocumentUploadService
 ,private notification: NotificationService )
    {   
      
     }

  ngOnInit(): void {
    if(sessionStorage.getItem('CampaignUser')) {
      this.redirect();
      this.GetSummaryFields(); 
    }
 
  } 

  displayedColumns: string[] = ['Synonym', 'Name','Description', 'Edit','Delete'];
  dataSource = new MatTableDataSource<SummarySynonym>();
   
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  } 
   
  // Add/save summary 
  AddSummarySynonym(){
    this.openDialogBox(null);
  }
  //  
  EditSummarySynonym(element){
    debugger;
    this.openDialogBox(element);

  }
  //
  DeleteSummarySynonym(element){ 
    debugger;
    if (element.SummarySynonymId > 0) { 
     this.deleteSummarySynonymId = element.SummarySynonymId;
     let matDialogRef = this.dialogService.openDialog(
      { 
        width: '28%',
        data: 'Summary Synonym', 
        dailogComponent: ConfirmationDialogComponent
      });
    matDialogRef.afterClosed().subscribe(res => {  
      if(res !== undefined && res !== null && res !== ''){
        console.log(res.userInput);
        if (this.deleteSummarySynonymId > 0  && res === 'yes') {
          // Perform deletion action here 
          if (this.progressSpinnerService.isLoading == false)  
          this.progressSpinnerService.isLoading = true; 
          this.summarySynonymbridgesLookupService.SummarySynonymDelete(this.deleteSummarySynonymId).subscribe((res: WebApiResponse)=>{   
// deletion failure code is 8 right now
if (res.code == '8') { 
        this.notification.error(res.message);
}else if(res.code == '1'){
  let tempData = this.dataSource.data.findIndex(a => a.SummarySynonymId == this.deleteSummarySynonymId);
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
    let postRequestParams = {data:data,summaryParams:this.getSummaryResponse} ;
    let matDialogRef = this.dialogService.openDialog(
      {
        width: '81%',
        data: postRequestParams, 
        dailogComponent: AddEditSummarySynonymsComponent
      });
    matDialogRef.afterClosed().subscribe(res => { 
      debugger;
      if(res.key !== undefined && res.key !== null && res.key !== ''){
        console.log(res.key + "=" + res.value);
        if (res.key === 'Insert') {
          this.dataSource.data.push(res.value); 
        }else{
          let tempData = this.dataSource.data.findIndex(a => a.SummarySynonymId == res.value.SummarySynonymId);
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
    this.router.navigateByUrl('summary-synonym-list'); //use the stored url here
  }
  
 public GetSummarySynonyms() { 
  if (this.progressSpinnerService.isLoading == false)  
      this.progressSpinnerService.isLoading = true; 
      this.summarySynonymbridgesLookupService.GetSummarySynonym().subscribe((res: WebApiResponse)=>{  
    debugger;
   if (res !== undefined || res !== null) {
    console.log(res);   
     this.getSummaryResponse = res.response;
     res.response.forEach((element,Index) => {
      //element.CategorySynonym.forEach(value => {
        let categoryObj = this.categories.find(s=>s.SummaryFieldId == element.SummaryFieldId); 
        if(categoryObj !==undefined){
          element.Name = categoryObj.FieldName; 
        } 
        // element.Description = categoryObj.Description; 
         this.summarySynonymArray.push(element);
      //}); 
     }); 

    this.dataSource =   new MatTableDataSource<SummarySynonym>(this.summarySynonymArray); 
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
    public GetSummaryFields() { 
      this.summarySynonymbridgesLookupService.GetSummaryField().subscribe((res: WebApiResponse)=>{
        debugger;
        this.categories = res.response; 
        if (this.categories.length > 0 ) {
              this.GetSummarySynonyms(); 
         } 
        },
        (error: any) => {
          console.log(error);
          this.notification.error(error);
          this.progressSpinnerService.isLoading = false; 
        }
      ) 
      }

      // Data Filter

      applyFilter(filterValue: string) { 
        this.dataSource.filter = filterValue.trim().toLowerCase();
        console.log(this.dataSource.filter);
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
      }
}
