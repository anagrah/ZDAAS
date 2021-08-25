import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { ProgressSpinnerService } from 'src/app/shared/services/progress-spinner.service';
import { CampaignLookupDataService } from 'src/app/CampaignManagement/services/campaign-lookup-data.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { Category } from '../../models/category';
import { SynonymList } from 'src/app/CampaignManagement/models/synonym-list';
import { Agency } from 'src/app/CampaignManagement/models/agency';
import { Industry } from 'src/app/CampaignManagement/models/industry';
import { ContractVehicle } from 'src/app/CampaignManagement/models/contract-vehicle';
import { State } from 'src/app/CampaignManagement/models/state';
import { BridgeSynonymOpportunityTypeList } from 'src/app/CampaignManagement/models/bridge-synonym-opportunity-type-list';
import { SynonymBridges } from 'src/app/CampaignManagement/models/synonym-bridges';
import { BridgeSynonymAgencyList } from 'src/app/CampaignManagement/models/bridge-synonym-agency-list';
import { BridgeSynonymContractVehicleList } from 'src/app/CampaignManagement/models/bridge-synonym-contract-vehicle-list';
import { BridgeSynonymIndustryList } from 'src/app/CampaignManagement/models/bridge-synonym-industry-list';
import { BridgeSynonymStatesList } from 'src/app/CampaignManagement/models/bridge-synonym-states-list';

@Component({
  selector: 'app-view-all-synonym-lists',
  templateUrl: './view-all-synonym-lists.component.html',
  styleUrls: ['./view-all-synonym-lists.component.css']
})
export class ViewAllSynonymListsComponent implements OnInit {
  response ;
  synonymBridges:SynonymBridges[]=[];

  //for save
  bridgeSynonymAgencyList: BridgeSynonymAgencyList[] = [];
  bridgeSynonymContractVehicleList: BridgeSynonymContractVehicleList[] = [];
  bridgeSynonymIndustryList: BridgeSynonymIndustryList[] = [];
  bridgeSynonymStatesList: BridgeSynonymStatesList[] = [];
  bridgeSynonymOpportunityTypeList: BridgeSynonymOpportunityTypeList[] = [];
  
  statesList: State[] = [];
  industryList: Industry[] = [];
  agencyList: Agency[] = [];
  contractVehicleList: ContractVehicle[] = [];
  
  responseBridgeSynonymStatesList: BridgeSynonymStatesList[] = [];

  isState: Boolean = false;
  isAgency: Boolean = false;
  isIndustry: Boolean = false; 
  isContractVehicle: Boolean = false;


  responseArray: any[] = [];

  removable = true;
  labelName :string=''; 

  constructor(
    public dialogRef: MatDialogRef<any>,private fb: FormBuilder,public progressSpinnerService: ProgressSpinnerService,
    public campaignLookupDataService: CampaignLookupDataService,private router:Router,private notification: NotificationService

  ) {
    
   }

   ngOnInit(): void {
    this.viewAllLists();
  }
  private viewAllLists() {
    var res = this.dialogRef;
    this.response = res._containerInstance._config.data; 
    this.hideShowListsOnFilterBasis();

    if (this.response.selectedDDLName == 'State') {
      this.statesList = this.response.selectedList;
      this.isState = true;
      this.labelName = 'States';
     // this.response.bridgeSynonymStatesList = [];
    }
    else if (this.response.selectedDDLName == 'Agency') {
      this.agencyList = this.response.selectedList;
      this.isAgency = true;
      this.labelName = 'Agencies';
      //this.response.bridgeSynonymAgencyList = [];
    }
    else if (this.response.selectedDDLName == 'Industry') {
      this.industryList = this.response.selectedList;
      this.isIndustry = true;
      this.labelName = 'Industries';
     // this.response.bridgeSynonymIndustryList = [];
    }
    else if (this.response.selectedDDLName == 'ContractVehicle') {
      this.contractVehicleList = this.response.selectedList;
      this.isContractVehicle = true;
      this.labelName = 'Contract Vehicles';
      //this.response.bridgeSynonymContractVehicleList = [];
    }
  }

  private hideShowListsOnFilterBasis() {
    this.isAgency = false;
    this.isState = false;
    this.isIndustry = false;
    this.isContractVehicle = false;
  }

  ok(): void { 

  }
 closeDialogOpp(): void {  
  let response = { stateArray :this.statesList , agencyArray : this.agencyList , industryArray:this.industryList , contractVehicle:this.contractVehicleList,name:this.labelName,bridgeSynonymStatesList :this.response.bridgeSynonymStatesList,bridgeSynonymAgencyList:this.response.bridgeSynonymAgencyList,bridgeSynonymIndustryList:this.response.bridgeSynonymIndustryList,bridgeSynonymContractVehicleList:this.response.bridgeSynonymContractVehicleList };
   this.dialogRef.close(response);
   this.labelName=''; 
 }
 remove(item: any,key): void {
   debugger;
  if (key == 'state') {
    this.response.bridgeSynonymStatesList =  this.campaignLookupDataService.deleteState(item,this.response.synonymBridges,this.response.bridgeSynonymStatesList);
    this.deleteState(item);
  }
  else if (key == 'agency') {
    this.response.bridgeSynonymAgencyList = this.campaignLookupDataService.deleteAgency(item,this.response.synonymBridges,this.response.bridgeSynonymAgencyList);
    this.deleteAgency(item);
  }
  else if (key == 'industry') {
    this.response.bridgeSynonymIndustryList = this.campaignLookupDataService.deleteIndustry(item,this.response.synonymBridges,this.response.bridgeSynonymIndustryList);
    this.deleteIndustry(item);
  }
  else if (key == 'contractVehicle') {
    this.response.bridgeSynonymContractVehicleList = this.campaignLookupDataService.deleteContractVehicle(item,this.response.synonymBridges,this.response.bridgeSynonymContractVehicleList);
    this.deleteContractVehicle(item);
  }
 
}

  private deleteState(item: any) {
    this.responseArray =[];
    const index = this.statesList.indexOf(item);
    if (index >= 0) {
      this.statesList.splice(index, 1);
    //  this.responseArray = this.statesList ;
    }
  }
  private deleteAgency(item: any) {
    this.responseArray =[];
    const index = this.agencyList.indexOf(item);
    if (index >= 0) {
      this.agencyList.splice(index, 1);
     // this.responseArray = this.agencyList ;
    }
  }

  private deleteIndustry(item: any) {
    this.responseArray =[];
    const index = this.industryList.indexOf(item);
    if (index >= 0) {
      this.industryList.splice(index, 1);
     // this.responseArray = this.industryList ;
    }
  }
  private deleteContractVehicle(item: any) {
    this.responseArray =[];
    const index = this.contractVehicleList.indexOf(item);
    if (index >= 0) {
      this.contractVehicleList.splice(index, 1);
     // this.responseArray = this.contractVehicleList ;
    }
  }
}
