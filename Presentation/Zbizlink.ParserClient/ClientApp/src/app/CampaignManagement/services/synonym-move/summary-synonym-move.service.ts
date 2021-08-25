import { Injectable, OnInit } from '@angular/core';
import { WebResponse } from 'src/app/shared/models/WebResponse';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ProgressSpinnerService } from 'src/app/shared/services/progress-spinner.service';
import { SummaryFieldAndSynonymRes } from '../../models/Summary/summary-field-and-synonym-res';
import { CampaignLookupDataService } from '../campaign-lookup-data.service';

@Injectable({
  providedIn: 'root'
})
export class SummarySynonymMoveService implements OnInit {

  public summaryFieldAndSynonymRes: Array<SummaryFieldAndSynonymRes>;

  constructor(private campaignLookupDataService: CampaignLookupDataService,
    private notification: NotificationService,
    public progressSpinnerService: ProgressSpinnerService) { }

    ngOnInit(): void {
    
      this.GetSummaryFieldAndSynonym();
    }
    
    GetSummaryFieldAndSynonym(){
      this.campaignLookupDataService.GetSummaryFieldAndSynonym().subscribe(
        res => this.SummaryFieldAndSynonymResponse(res),            
        err => this.UploadError(err)
      );
    }
    
    SummaryFieldAndSynonymResponse(webResponse: WebResponse<SummaryFieldAndSynonymRes[]>){
      debugger;
      if(webResponse.code == '1'){
        this.summaryFieldAndSynonymRes = webResponse.response; 
      }else{
    
      }
    }
      UploadError(parm: any): void {
      
       this.progressSpinnerService.isLoading = false;
       this.notification.error(parm);
    }
}




