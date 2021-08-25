import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ProgressSpinnerService } from '../../../shared/services/progress-spinner.service';
import { Router } from '@angular/router';
import { CampaignLookupDataService } from '../../services/campaign-lookup-data.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-opportunity-link',
  templateUrl: './opportunity-link.component.html',
  styleUrls: ['./opportunity-link.component.css']
})
export class OpportunityLinkComponent implements OnInit {
  groupForm: FormGroup;
  
  response ;
  opportunityURL:string='';
  constructor(
  //   @Optional()
  // @Inject(MAT_DIALOG_DATA) public data,
  public dialogRef: MatDialogRef<any>,private fb: FormBuilder,public progressSpinnerService: ProgressSpinnerService,
  public campaignLookupDataService: CampaignLookupDataService,private router:Router,private notification: NotificationService
) { 
  var res = this.dialogRef;
  this.response = res._containerInstance._config.data;
  debugger;
  if(this.response !== undefined ){
   this.opportunityURL = this.response.OpportunityURL;
   this.progressSpinnerService.isLoading = false;
  }
}

  ngOnInit(): void {

    if(this.progressSpinnerService.isLoading == true){
        this.progressSpinnerService.isLoading = false;
    }
   this.groupForm = this.fb.group({
     // Name:[''] 
   
  }) 
  }
  ok(): void { 

  }
 closeDialogOpp(): void { 
   this.dialogRef.close();
 }
 
}

