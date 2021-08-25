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
import { CategorySynonym } from '../../models/category-synonym';
import { CampaignLookupDataService } from '../../services/campaign-lookup-data.service';
import { AddEditSynonymsComponent } from '../Dialogs/add-edit-synonyms/add-edit-synonyms.component';
import { DocumentUploadService } from '../../../parser/services/document-upload.service';
import { Category } from '../../models/category';
 

@Component({
  selector: 'app-synonyms',
  templateUrl: './synonyms.component.html',
  styleUrls: ['./synonyms.component.css']
})
export class SynonymsComponent implements OnInit { 
  
  getSummaryResponse:any[]=[]; 
  deleteSynonymId:Number = 0; 
  categorySynonymArray:CategorySynonym[] = [];
  categories:Category[] = [];

 constructor(private dialogService: DialogService,private router:Router,
  public campaignLookupDataService: CampaignLookupDataService,
  public progressSpinnerService: ProgressSpinnerService, public documentUploadService: DocumentUploadService
 ,private notification: NotificationService )
    {   
      
     }

  ngOnInit(): void {
    if(sessionStorage.getItem('CampaignUser')) {
      this.redirect();
      this.GetCategories(); 
    }
 
  } 

  displayedColumns: string[] = ['Synonym', 'Name', 'Edit','Delete'];
  dataSource = new MatTableDataSource<CategorySynonym>();
   
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  } 
   
  // Add/save summary 
  AddCategorySynonym(){
    this.openDialogBox(null);
  }
  //  
  EditCategorySynonym(element){
    debugger;
    this.openDialogBox(element);

  }
  //
  DeleteCategorySynonym(element){ 
    debugger;
    if (element.SynonymId > 0) { 
     this.deleteSynonymId = element.SynonymId;
     let matDialogRef = this.dialogService.openDialog(
      { 
        width: '28%',
        data: 'Category Synonym', 
        dailogComponent: ConfirmationDialogComponent
      });
    matDialogRef.afterClosed().subscribe(res => {  
      if(res !== undefined && res !== null && res !== ''){
        console.log(res.userInput);
        if (this.deleteSynonymId > 0  && res === 'yes') {
          // Perform deletion action here 
          if (this.progressSpinnerService.isLoading == false)  
          this.progressSpinnerService.isLoading = true; 
      this.campaignLookupDataService.DeleteCategorySynonym(this.deleteSynonymId).subscribe((res: WebApiResponse)=>{   
// deletion failure code is 8 right now
if (res.code == '8') { 
        this.notification.error(res.message);
}else if(res.code == '1'){
  let tempData = this.dataSource.data.findIndex(a => a.SynonymId == this.deleteSynonymId);
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
        dailogComponent: AddEditSynonymsComponent
      });
    matDialogRef.afterClosed().subscribe(res => { 
      debugger;
      if(res.key !== undefined && res.key !== null && res.key !== ''){
        console.log(res.key + "=" + res.value);
        if (res.key === 'Insert') {
          this.dataSource.data.push(res.value); 
        }else{
          let tempData = this.dataSource.data.findIndex(a => a.SynonymId == res.value.SynonymId);
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
    this.router.navigateByUrl('synonyms'); //use the stored url here
  }
 // Get user list
 public GetCategorySynonym() { 
  if (this.progressSpinnerService.isLoading == false)  
      this.progressSpinnerService.isLoading = true; 
  this.campaignLookupDataService.GetCategorySynonym().subscribe((res: WebApiResponse)=>{  
    
   if (res !== undefined || res !== null) {
    console.log(res);   
     this.getSummaryResponse = res.response;
     res.response.forEach((element,Index) => {
      element.CategorySynonym.forEach(value => {
        let categoryObj = this.categories.find(s=>s.CategoryId == value.CategoryId); 
        value.Name = categoryObj.Name; 
        this.categorySynonymArray.push(value);
      }); 
     }); 

    this.dataSource =   new MatTableDataSource<CategorySynonym>(this.categorySynonymArray); 
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
    public GetCategories() { 
      this.documentUploadService.GetCategoryNameList().subscribe((res: WebApiResponse)=>{
        this.categories = res.response; 
        if (this.categories.length > 0 ) {
              this.GetCategorySynonym(); 
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
