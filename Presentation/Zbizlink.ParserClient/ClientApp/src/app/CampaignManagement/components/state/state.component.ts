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
import { Agency } from '../../models/agency';
import { State } from '../../models/state';
import { Industry } from '../../models/industry';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

 


  disabled = true;
  isHidden:boolean = false;
  OpportunityURL:string ='';
  showAddBtn:boolean = false;
  
 constructor(private dialogService: DialogService,private router:Router,
  private campaignUserWebapiService:CampaignUserWebapiService,
  public progressSpinnerService: ProgressSpinnerService
  ,private notification: NotificationService )
    {   
      
     }

  ngOnInit(): void {
    if(sessionStorage.getItem('CampaignUser')) {
      this.redirect();
     // var response = this.GetCampaignOpportunities();
     // console.log(response); 

    }
    
  }
  
  OpportunityName:string ='';


  displayedColumns: string[] = ['AgencyName', 'Description', 'Edit','Delete'];
  dataSource = new MatTableDataSource<State>();
   
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  } 
  onAddProperty(obj) {
    debugger;
    
  }
  sendURL (opportunityId:Number): void {
    debugger;
 

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
    this.router.navigateByUrl('state'); //use the stored url here
  }
 // Get user list
 public GetCampaignOpportunities() { 
  if (this.progressSpinnerService.isLoading == false)  
      this.progressSpinnerService.isLoading = true; 
  this.campaignUserWebapiService.getCampaignOpportunityList().subscribe((res: WebApiResponse)=>{  
    
   

   console.log(res);   
   this.dataSource =   new MatTableDataSource<State>(res.response); 
   this.dataSource.paginator = this.paginator;
   this.progressSpinnerService.isLoading = false;
    },
    (error: any) => {
      console.log(error);
      this.notification.error(error);
      this.progressSpinnerService.isLoading = false; 
    }
	
    )}
 

}
