import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { event } from 'jquery';
import { WebApiResponse } from 'src/app/shared/models/WebApiResponse';
import { CampaignLookupDataService } from 'src/app/CampaignManagement/services/campaign-lookup-data.service';
import { ProgressSpinnerService } from 'src/app/shared/services/progress-spinner.service';
import { Agency } from 'src/app/CampaignManagement/models/agency';
import { Industry } from 'src/app/CampaignManagement/models/industry';
import { ContractVehicle } from 'src/app/CampaignManagement/models/contract-vehicle';
import { State } from 'src/app/CampaignManagement/models/state';
import { NotificationService } from 'src/app/shared/services/notification.service';
 

@Component({
  selector: 'app-opportunity-name',
  templateUrl: './opportunity-name.component.html',
  styleUrls: ['./opportunity-name.component.css']
})
export class OpportunityNameComponent implements OnInit {
  selectedSourceOfProposal: string;
  sourcesOfProposal: string[] = ['Federal', 'State', 'Commercial'];


  agencyList: Agency[] = [];
  industryList: Industry[] = [];
  contractVehicleList: ContractVehicle[] = []; 
  stateList: State[] = [];

  tempAgencyList: Agency[] = [];
  tempIndustryList: Industry[] = [];
  tempContractVehicleList: ContractVehicle[] = [];
  tempStateList:State[]=[];

  sourceGroupForm: FormGroup;
 
  isState = false; 
  constructor(@Optional()
  public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public synonymsData: any, private fb: FormBuilder,
  public progressSpinnerService: ProgressSpinnerService,public campaignLookupDataService: CampaignLookupDataService,
  private notification: NotificationService
) {
   // debugger;
    // if (synonymsData != null && synonymsData != '') {
    //   this.agencyList = synonymsData.AgencyList;
    //   this.stateList = synonymsData.StatesList;
    //   this.contractVehicleList = synonymsData.ContractVehicleList;
    //   this.industryList = synonymsData.IndustryList;
    // }

  }

  ngOnInit(): void {
    debugger;
    this.createForm();
    this.setStateCategoryValidators();    
    this.GetCampaignOpportunities();
  }

  closeDialogOpp(): void {
    this.dialogRef.close();
  }
  submitForm(form) {
    debugger;
    console.log(JSON.stringify(form)); 
    if (this.sourceGroupForm.invalid) {
      this.sourceGroupForm.markAsDirty();
      return;
    }else{
      if (this.progressSpinnerService.isLoading == false)
           this.progressSpinnerService.isLoading = true;
            this.dialogRef.close(form); 
    }

  } 
  createForm() {
    this.sourceGroupForm = this.fb.group({
      opportunityName: ['', Validators.required],
       selectedSourceName: ['',Validators.required],
       selectedSourceDetails: this.fb.group({
        agencyId : ['',Validators.required],
        stateId : [''],
        contractVehicleId : [''],
        industryId : ['']
       })
    });
  }
 
  setStateCategoryValidators() {
    const agencyIdControl = this.sourceGroupForm.get('selectedSourceDetails.agencyId');
    const stateIdControl = this.sourceGroupForm.get('selectedSourceDetails.stateId');
    const industryIdControl = this.sourceGroupForm.get('selectedSourceDetails.industryId');


    this.sourceGroupForm.get('selectedSourceName').valueChanges
      .subscribe(selectedCategory => {
        this.sourceGroupForm.get('selectedSourceDetails').reset(); 
        if (selectedCategory === 'Federal') {  
          stateIdControl.setValidators(null);
          agencyIdControl.setValidators([Validators.required]);
        }
        if (selectedCategory === 'State') { 
         stateIdControl.setValidators([Validators.required]);
          agencyIdControl.setValidators(null);
        }
        if (selectedCategory === 'Commercial') {
          agencyIdControl.setValidators(null);
          stateIdControl.setValidators(null);
          // industryIdControl.setValidators(null);
        }
        stateIdControl.updateValueAndValidity();
        agencyIdControl.updateValueAndValidity();

      });
  }
  
  public GetCampaignOpportunities() {
    if (this.progressSpinnerService.isLoading == false)
      this.progressSpinnerService.isLoading = true;
    this.campaignLookupDataService.GetOpportunityCategoryLookupData().subscribe((res: WebApiResponse) => {
      console.log("response is = " + res);
      debugger;
      if (res.code == '1') {
        this.agencyList = res.response.AgencyList;
        this.contractVehicleList = res.response.ContractVehicleList;
        this.industryList = res.response.IndustryList;
        this.stateList = res.response.StatesList;
 
        
        this.tempAgencyList = this.agencyList.slice();
        this.tempContractVehicleList = this.contractVehicleList.slice();
        this.tempIndustryList = this.industryList.slice();
        this.tempStateList = this.stateList.slice();

        this.progressSpinnerService.isLoading = false;
      }
    
    },
    (error: any) => {
      console.log(error);
      this.notification.error(error);
      this.progressSpinnerService.isLoading = false; 
    }
  
  )
   
  }
}
