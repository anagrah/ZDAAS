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
import { IndustryModel } from '../../models/industry-model';
import { IndustryService } from '../../services/industry.service';
import { AddEditIndustryComponent } from '../Dialogs/add-edit-industry/add-edit-industry.component';

@Component({
  selector: 'app-industry',
  templateUrl: './industry.component.html',
  styleUrls: ['./industry.component.css']
})
export class IndustryComponent implements OnInit {
 
   
  getIndustryResponse:any[]=[]; 
  deleteIndustryID:Number = 0;  

 constructor(private dialogService: DialogService,private router:Router,
  public industryService: IndustryService,
  public progressSpinnerService: ProgressSpinnerService,  
  private notification: NotificationService )
    {   
      
     }

  ngOnInit(): void {
    if(sessionStorage.getItem('CampaignUser')) {
      this.redirect();
       this.GetIndustry(); 
    }
 
  } 

  displayedColumns: string[] = ['IndustryName','Description', 'Edit','Delete'];
  dataSource = new MatTableDataSource<IndustryModel>();
   
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  } 
   
  // Add/save Agency 
  AddIndustry(){
    this.openDialogBox(null);
  }
  //  
  EditIndustry(element){
    debugger;
    this.openDialogBox(element);

  }
  //
  DeleteIndustry(element){ 
    debugger;
    if (element.IndustryID > 0) { 
     this.deleteIndustryID = element.IndustryID;
     let matDialogRef = this.dialogService.openDialog(
      { 
        width: '28%',
        data: 'Industry', 
        dailogComponent: ConfirmationDialogComponent
      });
    matDialogRef.afterClosed().subscribe(res => {  
      if(res !== undefined && res !== null && res !== ''){
        console.log(res.userInput);
        if (this.deleteIndustryID > 0  && res === 'yes') {
          // Perform deletion action here 
          if (this.progressSpinnerService.isLoading == false)  
          this.progressSpinnerService.isLoading = true; 
          this.industryService.DeleteIndustry(this.deleteIndustryID).subscribe((res: WebApiResponse)=>{   
// deletion failure code is 8 right now
if (res.code == '8') { 
        this.notification.error(res.message);
}else if(res.code == '1'){
  let tempData = this.dataSource.data.findIndex(a => a.IndustryID == this.deleteIndustryID);
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
    let postRequestParams = {data:data,summaryParams:this.getIndustryResponse} ;
    let matDialogRef = this.dialogService.openDialog(
      {
        width: '81%',
        data: postRequestParams, 
        dailogComponent: AddEditIndustryComponent
      });
    matDialogRef.afterClosed().subscribe(res => { 
      debugger;
      if(res.key !== undefined && res.key !== null && res.key !== ''){
        console.log(res.key + "=" + res.value);
        if (res.key === 'Insert') {
          this.dataSource.data.push(res.value); 
        }else{
          let tempData = this.dataSource.data.findIndex(a => a.IndustryID == res.value.IndustryID);
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
    this.router.navigateByUrl('industry'); //use the stored url here
  }
  
 public GetIndustry() { 
  if (this.progressSpinnerService.isLoading == false)  
      this.progressSpinnerService.isLoading = true; 
      this.industryService.GetIndustry().subscribe((res: WebApiResponse)=>{  
    debugger;
   if (res !== undefined || res !== null) {
    console.log(res);   
     this.getIndustryResponse = res.response;
    this.dataSource =   new MatTableDataSource<IndustryModel>(this.getIndustryResponse); 
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
