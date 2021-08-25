import { Component, OnInit } from '@angular/core';
import { SummarySynonymBridges } from '../../../models/summary-synonym-bridges';
import { BridgeSummarySynonymAgencyList } from '../../../models/bridge-summary-synonym-agency-list';
import { BridgeSummarySynonymContractVehicleList } from '../../../models/bridge-summary-synonym-contract-vehicle-list';
import { BridgeSummarySynonymIndustryList } from '../../../models/bridge-summary-synonym-industry-list';
import { BridgeSummarySynonymOpportunityTypeList } from '../../../models/bridge-summary-synonym-opportunity-type-list';
import { BridgeSummarySynonymStatesList } from '../../../models/bridge-summary-synonym-states-list';
import { State } from '../../../models/state';
import { Industry } from '../../../models/industry';
import { Agency } from '../../../models/agency';
import { ContractVehicle } from '../../../models/contract-vehicle';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { ProgressSpinnerService } from '../../../../shared/services/progress-spinner.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../../../shared/services/notification.service';
import { SummarySynonymbridgesLookupService } from '../../../services/summary-synonymbridges-lookup.service';

@Component({
  selector: 'app-view-all-summary-synonym',
  templateUrl: './view-all-summary-synonym.component.html',
  styleUrls: ['./view-all-summary-synonym.component.css']
})
export class ViewAllSummarySynonymComponent implements OnInit {

  response ;
  summarySynonymBridges: SummarySynonymBridges[]=[];

  //for save

  bridgeSummarySynonymAgencyList: BridgeSummarySynonymAgencyList[] = [];
  bridgeSummarySynonymContractVehicleList: BridgeSummarySynonymContractVehicleList[] = [];
  bridgeSummarySynonymIndustryList: BridgeSummarySynonymIndustryList[] = [];
  bridgeSummarySynonymOpportunityTypeList: BridgeSummarySynonymOpportunityTypeList[] = [];
  bridgeSummarySynonymStatesList: BridgeSummarySynonymStatesList[] = []; 
  
  statesList: State[] = [];
  industryList: Industry[] = [];
  agencyList: Agency[] = [];
  contractVehicleList: ContractVehicle[] = [];
   
  isState: Boolean = false;
  isAgency: Boolean = false;
  isIndustry: Boolean = false; 
  isContractVehicle: Boolean = false;


  responseArray: any[] = [];

  removable = true;
  labelName :string=''; 

  constructor(
    public dialogRef: MatDialogRef<any>,private fb: FormBuilder,public progressSpinnerService: ProgressSpinnerService,
    public summarySynonymbridgesLookupService: SummarySynonymbridgesLookupService,
    private router:Router,private notification: NotificationService

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
     // this.response.bridgeSummarySynonymStatesList = [];
    }
    else if (this.response.selectedDDLName == 'Agency') {
      this.agencyList = this.response.selectedList;
      this.isAgency = true;
      this.labelName = 'Agencies';
      //this.response.bridgeSummarySynonymAgencyList = [];
    }
    else if (this.response.selectedDDLName == 'Industry') {
      this.industryList = this.response.selectedList;
      this.isIndustry = true;
      this.labelName = 'Industries';
      //this.response.bridgeSummarySynonymIndustryList = [];
    }
    else if (this.response.selectedDDLName == 'ContractVehicle') {
      this.contractVehicleList = this.response.selectedList;
      this.isContractVehicle = true;
      this.labelName = 'Contract Vehicles';
      //this.response.bridgeSummarySynonymContractVehicleList = [];
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
  let response = { stateArray :this.statesList , agencyArray : this.agencyList , industryArray:this.industryList , contractVehicle:this.contractVehicleList,name:this.labelName,bridgeSummarySynonymStatesList :this.response.bridgeSummarySynonymStatesList,bridgeSummarySynonymAgencyList:this.response.bridgeSummarySynonymAgencyList,bridgeSummarySynonymIndustryList:this.response.bridgeSummarySynonymIndustryList,bridgeSummarySynonymContractVehicleList:this.response.bridgeSummarySynonymContractVehicleList };
   this.dialogRef.close(response);
   this.labelName=''; 
 }
 remove(item: any,key): void {
   debugger;
  if (key == 'state') {
    this.response.bridgeSummarySynonymStatesList =  this.summarySynonymbridgesLookupService.deleteState(item,this.response.summarySynonymBridges,this.response.bridgeSummarySynonymStatesList);
    this.deleteState(item);
  }
  else if (key == 'agency') {
    this.response.bridgeSummarySynonymAgencyList = this.summarySynonymbridgesLookupService.deleteAgency(item,this.response.summarySynonymBridges,this.response.bridgeSummarySynonymAgencyList);
    this.deleteAgency(item);
  }
  else if (key == 'industry') {
    this.response.bridgeSummarySynonymIndustryList = this.summarySynonymbridgesLookupService.deleteIndustry(item,this.response.summarySynonymBridges,this.response.bridgeSummarySynonymIndustryList);
    this.deleteIndustry(item);
  }
  else if (key == 'contractVehicle') {
    this.response.bridgeSummarySynonymContractVehicleList = this.summarySynonymbridgesLookupService.deleteContractVehicle(item,this.response.summarySynonymBridges,this.response.bridgeSummarySynonymContractVehicleList);
    this.deleteContractVehicle(item);
  }
 
}

  private deleteState(item: any) {
    this.responseArray =[];
    const index = this.statesList.indexOf(item);
    if (index >= 0) {
      this.statesList.splice(index, 1); 
    }
  }
  private deleteAgency(item: any) {
    this.responseArray =[];
    const index = this.agencyList.indexOf(item);
    if (index >= 0) {
      this.agencyList.splice(index, 1); 
    }
  }

  private deleteIndustry(item: any) {
    this.responseArray =[];
    const index = this.industryList.indexOf(item);
    if (index >= 0) {
      this.industryList.splice(index, 1); 
    }
  }
  private deleteContractVehicle(item: any) {
    this.responseArray =[];
    const index = this.contractVehicleList.indexOf(item);
    if (index >= 0) {
      this.contractVehicleList.splice(index, 1); 
    }
  }
}
