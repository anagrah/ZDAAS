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
import { CampaignUserWebapiService } from '../../services/campaign-user-webapi.service'; 
import { OpportunityLinkComponent } from '../../shared/opportunity-link/opportunity-link.component';
import { SendEmailComponent } from '../send-email/send-email.component';

@Component({
  selector: 'app-marketing-campaign',
  templateUrl: './marketing-campaign.component.html',
  styleUrls: ['./marketing-campaign.component.css']
})

export class MarketingCampaignComponent implements OnInit {
  disabled = true;
  isHidden:boolean = false;
  OpportunityURL:string ='';
  showAddBtn:boolean = false;
  
 constructor(private dialogService: DialogService,private router:Router,private campaignUserWebapiService:CampaignUserWebapiService,public progressSpinnerService: ProgressSpinnerService
   ,private notification: NotificationService )
    {
      debugger;
    
      
     }

  ngOnInit(): void {
    if(sessionStorage.getItem('CampaignUser')) {
      this.redirect();
      var response = this.GetCampaignOpportunities();
      console.log(response); 

    }
   
  }
  
  OpportunityName:string ='';


  displayedColumns: string[] = ['OpportunityName', 'OpportunityCreatedDate', 'SentUserList','CampaignSent','CampaignSentDate','ShowUrl', 'Send'];
  dataSource = new MatTableDataSource<CampaignOpportunities>();
   
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  } 
  onAddProperty(obj) {
    debugger;
    
  }
  sendURL (opportunityId:Number): void {
    debugger;
// console.log(opportunityId);
var encodedURL = btoa("OpportunityId=" + opportunityId).trim(); // encodeURIComponent("/?OpportunityId="+this.campaignData.OpportunityId);

console.log("URL Encoding = " + encodedURL);
this.OpportunityURL = window.location.origin + "/parser/?" + encodedURL; //"/?OpportunityId="+this.campaignData.OpportunityId;
console.log("URL Encoding = " + this.OpportunityURL);

// Decode URL
var decodedURL = window.location.origin + "/?" + atob(encodedURL);
console.log("URL Decoding = " + decodedURL);

let data = {OpportunityURL:this.OpportunityURL };

    let matDialogRef = this.dialogService.openDialog(
      {
        width: '395px',
        data: data,
        dailogComponent: OpportunityLinkComponent
      });
    matDialogRef.afterClosed().subscribe(res => {
   
    
    });
  };
  sendEmail(opportunityId:Number ,opportunityName:string,campaignOpportunityID:Number): void { 
    // open the dialogue 
    
    let data = {
      headerFlag: true,
      OpportunityName:opportunityName,
      OpportunityId:opportunityId,
      CampaignOpportunityId:campaignOpportunityID

    };

    const dialogRef = this.dialogService.openDialog({
      width: '81%',
      data: data,
      dailogComponent: SendEmailComponent,
    });

    dialogRef.afterClosed().subscribe(
      data => {  
      }
    );

  }
  private redirect(): void {  
    this.router.navigateByUrl('marketing-campaign'); //use the stored url here
  }
 // Get user list
 public GetCampaignOpportunities() { 
  if (this.progressSpinnerService.isLoading == false)  
      this.progressSpinnerService.isLoading = true; 
  this.campaignUserWebapiService.getCampaignOpportunityList().subscribe((res: WebApiResponse)=>{  
    console.log("response is = "+res);
  if (res.response.length > 0) {
    res.response.forEach(function (value) { 
      if (value.opportunityName == null)  
          value.opportunityName = 'Not provided';
      if (value.sentUserList == null)  
          value.sentUserList = 'Not sent';
      if(value.IsActiveID == 1) 
        value.IsActiveID = true;              
      else 
        value.IsActiveID = false; 

        if(value.campaignSentStatus == 1) 
        value.campaignSent = 'InProgress';   
       else if(value.campaignSentStatus == 2) 
        value.campaignSent = 'Success';   
       else if(value.campaignSentStatus == 3) 
        value.campaignSent = 'Fail';  
       if (value.campaignSentDate == '0001-01-01T00:00:00') 
            value.campaignSentDate = '';
  console.log(value.IsActiveID);
  console.log("Created date is = "+value.createdDate);
});  
  } 

   console.log(res);   
   this.dataSource =   new MatTableDataSource<CampaignOpportunities>(res.response); 
   this.dataSource.paginator = this.paginator;
   this.progressSpinnerService.isLoading = false;
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

