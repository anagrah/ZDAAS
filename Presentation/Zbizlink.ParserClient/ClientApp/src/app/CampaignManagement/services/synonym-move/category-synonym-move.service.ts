import { Injectable, OnInit } from '@angular/core';
import { WebResponse } from 'src/app/shared/models/WebResponse';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ProgressSpinnerService } from 'src/app/shared/services/progress-spinner.service';
import { CategoryAndSynonymRes } from '../../models/Category/CategoryAndSynonymRes';
import { CategorySynonym } from '../../models/Category/CategorySynonym';
import { CampaignLookupDataService } from '../campaign-lookup-data.service';

@Injectable({
  providedIn: 'root'
})
export class CategorySynonymMoveService implements OnInit  {

  public categoryAndSynonymRes: Array<CategoryAndSynonymRes>;

  constructor(private campaignLookupDataService: CampaignLookupDataService,
    private notification: NotificationService,
    public progressSpinnerService: ProgressSpinnerService) { }

 

  ngOnInit(): void {
    
    this.GetCategoryAndSynonym();
  }

  GetCategoryAndSynonym(){
    this.campaignLookupDataService.GetCategoriesAndSynonym().subscribe(
      res => this.SaveFileInRfpDBResponse(res),            
      err => this.UploadError(err)
    );
  }

SaveFileInRfpDBResponse(webResponse: WebResponse<CategoryAndSynonymRes[]>){
  debugger;
  if(webResponse.code == '1'){
    this.categoryAndSynonymRes = webResponse.response; 
  }else{

  }
}
  UploadError(parm: any): void {
  
   this.progressSpinnerService.isLoading = false;
   this.notification.error(parm);
}
}
