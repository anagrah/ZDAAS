import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { DialogService } from '../../../shared/services/dialog.service';
import { AddCategoryFieldComponent } from '../../shared/add-category-field/add-category-field.component';
import { ProgressSpinnerService } from '../../../shared/services/progress-spinner.service';
import { WebApiResponse } from '../../../shared/models/WebApiResponse';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ViewAllSynonymListsComponent } from '../view-all-synonym-lists/view-all-synonym-lists.component';
import { Category } from '../../models/category';
//import { SynonymList } from 'src/app/CampaignManagement/models/synonym-list';
import { Agency } from 'src/app/CampaignManagement/models/agency';
import { Industry } from 'src/app/CampaignManagement/models/industry';
import { ContractVehicle } from 'src/app/CampaignManagement/models/contract-vehicle';
import { State } from 'src/app/CampaignManagement/models/state';
import { SynonymBridges } from 'src/app/CampaignManagement/models/synonym-bridges';
import { SummaryFieldAndSynonyms } from 'src/app/CampaignManagement/models/summary-field-and-synonyms';
import { SummarySynonym } from 'src/app/CampaignManagement/models/summary-synonym';
import { BridgeSummarySynonymAgencyList } from '../../models/bridge-summary-synonym-agency-list';
import { BridgeSummarySynonymContractVehicleList } from '../../models/bridge-summary-synonym-contract-vehicle-list';
import { BridgeSummarySynonymIndustryList } from '../../models/bridge-summary-synonym-industry-list';
import { BridgeSummarySynonymOpportunityTypeList } from '../../models/bridge-summary-synonym-opportunity-type-list';
import { BridgeSummarySynonymStatesList } from '../../models/bridge-summary-synonym-states-list';
import { SummarySynonymBridges } from '../../models/summary-synonym-bridges';
import { SummarySynonymbridgesLookupService } from '../../services/summary-synonymbridges-lookup.service';
import { ViewAllSummarySynonymComponent } from '../CampaignDialogs/view-all-summary-synonym/view-all-summary-synonym.component';
import { SaveChangesBeforeMoveComponent } from '../../shared/save-changes-before-move/save-changes-before-move.component';


@Component({
  selector: 'app-summary-synonym',
  templateUrl: './summary-synonym.component.html',
  styleUrls: ['./summary-synonym.component.css']
})
export class SummarySynonymComponent implements OnInit {

  federalCheck = false;
  stateCheck = false;
  commercialCheck = false;
  groupForm: FormGroup;

  selectedSummaryRadioButtonVal: string = "1";
  isSelected:boolean = true;

  agenciesDropDownSettings: any = {};
  statesDropdownSettings: any = {};
  industryDropdownSettings: any = {};
  contractVehicleDropdownSettings: any = {};

  dialogResponse :string = "";

  categories: Category[] = [];

  FilteredSynonymList: any[] = [];
  tempSynonymList: any[] = [];
  OpportunityTypeList: any[] = [];

  agenciesDropDown: Agency[] = [];
  industry: Industry[] = [];
  contractVehicle: ContractVehicle[] = [];
  states: State[] = [];

  selectedAgencyItems: Agency[] = [];
  selectedContractVehicleItems: ContractVehicle[] = [];
  selectedStateItems: State[] = [];
  selectedIndustryItems: Industry[] = [];
  selectedOpportunityTypeListItems: BridgeSummarySynonymOpportunityTypeList[] = [];

  filterableSummaryArray: any[] = [];

  summarySynonymBridges = new SummarySynonymBridges;

  summaryFieldAndSynonyms: SummaryFieldAndSynonyms[] = [];
  summarySynonym: SummarySynonym[] = [];


  bridgeSummarySynonymAgencyList: BridgeSummarySynonymAgencyList[] = [];
  bridgeSummarySynonymContractVehicleList: BridgeSummarySynonymContractVehicleList[] = [];
  bridgeSummarySynonymIndustryList: BridgeSummarySynonymIndustryList[] = [];
  bridgeSummarySynonymOpportunityTypeList: BridgeSummarySynonymOpportunityTypeList[] = [];
  bridgeSummarySynonymStatesList: BridgeSummarySynonymStatesList[] = [];


  SelectedSynonymId: Number = 0;
  backUpDropDown: any[] = [];
  isChecked: false;
  category_Id: Number = 0;
  SelectedSummaryFieldId: Number = 0;

  synonymSectionShow: boolean = false;

  errorMessage: string = '';
  ShowErrorMessage: string = '';
  opportunityTypeErrorMessage: string = 'Please select at least one opportunity type';
  selectedSynonym: string = '';

  isDisabled: boolean = true;
  disAbleSaveButton: boolean = true;
  showAddBtn: boolean = false;
  isModelUpdated: boolean = false;

  showSynonymAddBtn: boolean = false;
  opportunityTypeSectionShow: boolean = false;
  multiSelectDropdownSectionShow: boolean = false;

  viewAllStates: boolean = false;
  viewAllAgencies: boolean = false;
  viewAllIndustries: boolean = false;
  viewAllVehicles: boolean = false;

  disableDeleteButton: boolean = true;

  compareArraysBeforeAndAfterPopUpClose: Number = 0;
  responseAfterPopUpClose: any[] = [];
  constructor(private dialogService: DialogService, public progressSpinnerService: ProgressSpinnerService,
    public summarySynonymbridgesLookupService: SummarySynonymbridgesLookupService, private router: Router, private formBuilder: FormBuilder,
    private notification: NotificationService
  ) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('CampaignUser')) {
      this.redirect();
      var response = this.GetCampaignOpportunities();
      console.log(response);

    }
    this.dropdownSettings();

    this.groupForm = this.formBuilder.group({
      CategoryId: [''],
      SynonymId: [''],
      FederalOpportunityTypeCode: [''],
      StateOpportunityTypeCode: [''],
      CommercialOpportunityTypeCode: [''],
      SummaryFieldId: [''],
      State: [''],
      Agency: [''],
      Industry: [''],
      Vehicle: ['']
    })
  }
  private redirect(): void {
    this.router.navigateByUrl('summary-synonym'); //use the stored url here
  }
  // Get campaign opportunity list
  public GetCampaignOpportunities() {
    if (this.progressSpinnerService.isLoading == false)
      this.progressSpinnerService.isLoading = true;
    this.summarySynonymbridgesLookupService.GetOpportunitySummaryLookupData().subscribe((res: WebApiResponse) => {
      console.log("response is = " + res);
      debugger;
      if (res.code == '1') {
        this.agenciesDropDown = res.response.AgencyList;
        this.contractVehicle = res.response.ContractVehicleList;
        this.industry = res.response.IndustryList;
        this.OpportunityTypeList = res.response.OpportunityTypeList;
        this.states = res.response.StatesList;
        this.summaryFieldAndSynonyms = res.response.SummaryFieldAndSynonyms;


        this.filterableSummaryArray = this.summaryFieldAndSynonyms.slice();

        this.progressSpinnerService.isLoading = false;
      }

    }
      ,
      (error: any) => {
        console.log(error);
        this.notification.error(error);
        this.progressSpinnerService.isLoading = false;
      }
    )

  }
  private dropdownSettings() {

    this.agenciesDropDownSettings = {
      singleSelection: false,
      idField: 'AgencyID',
      textField: 'AgencyName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true
    };
    this.statesDropdownSettings = {
      singleSelection: false,
      defaultOpen: false,
      idField: 'StateId',
      textField: 'StateName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableCheckAll: true,
      itemsShowLimit: 10,
      allowSearchFilter: true
    };

    this.industryDropdownSettings =
      {
        singleSelection: false,
        idField: 'IndustryID',
        textField: 'IndustryName',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 10,
        allowSearchFilter: true
      };

    this.contractVehicleDropdownSettings =
      {
        singleSelection: false,
        idField: 'ContractVehicleId',
        textField: 'ContractVehicleName',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 10,
        allowSearchFilter: true
      };
  }
  onMovingWithoutSavingChanges():boolean {
    let isSuccess = false;
    let matDialogRef = this.dialogService.openDialog(
      {
        width: '395px',
        data: '',
        dailogComponent: SaveChangesBeforeMoveComponent
      });
    matDialogRef.afterClosed().subscribe(res => {
      if (res !== undefined || res !== null || res !== "") {
        if (res === "Save") {
          let responseObject =  this.saveSynonymBridges(this.groupForm); // save and move next
             if (responseObject) { 
             this.dialogResponse = "Save"; 
             return isSuccess = true;
          }
          }else if (res === "DontSave") { // DontSave and move next
        
           this.dialogResponse = "DontSave";
           this.isModelUpdated = false;
           return isSuccess = true;
        }
         else { // cancel => stayed at that page 
           this.disAbleSaveButton = true; 
           this.dialogResponse = "Cancel";
           
        }
      }
    }); 
    return isSuccess;
  }

  selectSummaryFieldId($event) {
    this.SelectedSummaryFieldId = $event.value;
    this.selectedSummaryRadioButtonVal = "1";
    this.isSelected = true;
    this.disableDeleteButton = true;
    this.ClearSelectedDropdownItems();
    this.hideViewAllButtons();
    this.showSynonymAddBtn = true;
    this.showAddBtn = false;
    this.disAbleSaveButton = true;
    this.isDisabled = true;
    this.isModelUpdated = false;
    this.FilterSummarySynonymsArray();
  }

  private FilterSummarySynonymsArray() {
    this.opportunityTypeCheckBoxUnChecked();

    this.SelectedSynonymId = 0;

    this.synonymSectionShow = true;
    this.opportunityTypeSectionShow = false;
    this.multiSelectDropdownSectionShow = false;
    this.FilteredSynonymList = null;
    this.FilteredSynonymList = [];
    this.tempSynonymList = null;
    this.tempSynonymList = [];

    this.ShowErrorMessage = "";

    this.ClearSelectedDropdownItems();
    this.InitializeSelectedDropdownItemsLists();
    this.summaryFieldAndSynonyms.forEach((value, key) => {
      if (value.SummaryFieldId === this.SelectedSummaryFieldId) {
        value.SummarySynonym.forEach((summaryVal, Index) => {
          if (this.selectedSummaryRadioButtonVal === "1") {
            this.FilteredSynonymList.push({ "SynonymId": summaryVal.SummarySynonymId, "Synonym": summaryVal.Synonym });
          }
          else if (this.selectedSummaryRadioButtonVal === "2" && summaryVal.Assign === true) {
            this.FilteredSynonymList.push({ "SynonymId": summaryVal.SummarySynonymId, "Synonym": summaryVal.Synonym });
            this.isSelected = false;
          }
          else if (this.selectedSummaryRadioButtonVal === "3" && summaryVal.Assign === false) {
            this.FilteredSynonymList.push({ "SynonymId": summaryVal.SummarySynonymId, "Synonym": summaryVal.Synonym });
            this.isSelected = false;
          }
        });
      }
    });
    this.tempSynonymList = this.FilteredSynonymList.slice();
  }

  selectSynonym($event) {
    debugger;
    if ($event.value === undefined || $event.value === null || $event.value === "") {
      return true;
    } else {
      this.SelectedSynonymId = $event.value;
    }

    this.hideViewAllButtons();
    this.opportunityTypeSectionShow=true;

    this.disableDeleteButton = true;

    this.isDisabled = false;
    this.showAddBtn = true;

    this.disAbleSaveButton = true;
    this.isModelUpdated = false;

    this.opportunityTypeCheckBoxUnChecked();
    if (this.progressSpinnerService.isLoading == false)
      this.progressSpinnerService.isLoading = true;
    this.initializeSynonymArray();
    this.summarySynonymbridgesLookupService.GetSynonymBridgesLookupDataById(this.SelectedSynonymId).subscribe((res: WebApiResponse) => {
      console.log("response is = " + res);
      if (res.code == '1') {
        debugger;

        if (res.response.BridgeSummarySynonymAgencyList.length > 0 || res.response.BridgeSummarySynonymContractVehicleList.length > 0 || res.response.BridgeSummarySynonymIndustryList.length > 0 || res.response.BridgeSummarySynonymOpportunityTypeList.length > 0 || res.response.BridgeSummarySynonymStatesList.length > 0) {
          this.disableDeleteButton = false;
          this.multiSelectDropdownSectionShow = true;
        }else{
          this.multiSelectDropdownSectionShow = false;
        }

        this.summarySynonymBridges = null;

        this.summarySynonymBridges = res.response;

        this.ClearSelectedDropdownItems();

        this.InitializeSelectedDropdownItemsLists();

        res.response.BridgeSummarySynonymContractVehicleList.forEach((value, key) => {
          const getContractVehicle = this.contractVehicle.find(x => x.ContractVehicleId == value.ContractVehicleId);
          if (getContractVehicle !== undefined) {
            this.selectedContractVehicleItems.push(getContractVehicle);
            this.viewAllVehicles = true;
          }
        });
        //
        res.response.BridgeSummarySynonymStatesList.forEach((value, key) => {
          const getStatesListItem = this.states.find(x => x.StateId == value.StateId);
          if (getStatesListItem !== undefined) {
            this.selectedStateItems.push(getStatesListItem);
            this.viewAllStates = true;
          }
        });
        //
        res.response.BridgeSummarySynonymIndustryList.forEach((value, key) => {
          const getIndustryListItem = this.industry.find(x => x.IndustryID == value.IndustryId);
          if (getIndustryListItem !== undefined) {
            this.selectedIndustryItems.push(getIndustryListItem);
            this.viewAllIndustries = true;
          }
        });
        //
        res.response.BridgeSummarySynonymAgencyList.forEach((value, key) => {
          const getAgencyListItem = this.agenciesDropDown.find(x => x.AgencyID == value.AgencyId);
          if (getAgencyListItem !== undefined) {
            this.selectedAgencyItems.push(getAgencyListItem);
            this.viewAllAgencies = true;
          }
        });
        res.response.BridgeSummarySynonymOpportunityTypeList.forEach((item, key) => {
          this.opportunityTypeCheckBoxChecked(item);
        });
        //
        if (res.response.BridgeSummarySynonymOpportunityTypeList.length <= 0) {
          this.ShowErrorMessage = this.opportunityTypeErrorMessage;
          this.showAddBtn = false;

          this.hideViewAllButtons();

        }

        this.progressSpinnerService.isLoading = false;
      }
    },(error: any) => {
      console.log(error);
      this.notification.error(error);
      this.progressSpinnerService.isLoading = false;
    });
  }

  private opportunityTypeCheckBoxChecked(item: any) {
    if (item.OpportunityTypeId === 1)
      this.federalCheck = true;
    else if (item.OpportunityTypeId === 2)
      this.stateCheck = true;
    else if (item.OpportunityTypeId === 3)
      this.commercialCheck = true;

    if (this.federalCheck === true || this.stateCheck === true || this.commercialCheck === true) {

      this.ShowErrorMessage = '';
      this.showAddBtn = true;

      if (this.selectedStateItems.length > 0) {
        this.viewAllStates = true;
      }
      if (this.selectedAgencyItems.length > 0) {
        this.viewAllAgencies = true;
      }
      if (this.selectedIndustryItems.length > 0) {
        this.viewAllIndustries = true;
      }
      if (this.selectedContractVehicleItems.length > 0) {
        this.viewAllVehicles = true;
      }

    } else {

      this.ShowErrorMessage = this.opportunityTypeErrorMessage;
      this.showAddBtn = false;

      this.hideViewAllButtons();

    }
  }

  private opportunityTypeCheckBoxUnChecked() {
    this.federalCheck = false;
    this.stateCheck = false;
    this.commercialCheck = false;
  }
  onCategoryChange(obj) {
    debugger;
    console.log('Category changed...');
    let selectedCategory = obj.value;
    console.log(selectedCategory);
  }
  onAddProperty(obj) {
    debugger;
    let data = { id: obj, SummaryFieldId: this.SelectedSummaryFieldId };

    let matDialogRef = this.dialogService.openDialog(
      {
        width: '395px',
        data: data,
        dailogComponent: AddCategoryFieldComponent
      });
    matDialogRef.afterClosed().subscribe(res => {
      if (res !== undefined || res !== null || res !== "") {
        if (res.labelName == 'Synonym') {
          this.SynonymResponseMethod(res);
        } else if (res.labelName == 'Agency') {
          this.AgencyResponseMethod(res);
          if (this.selectedAgencyItems.length === 0) {
            this.viewAllAgencies = false;
          }
        } else if (res.labelName == 'Industry') {
          this.IndustryResponseMethod(res);
          if (this.selectedIndustryItems.length === 0) {
            this.viewAllIndustries = false;
          }
        }
        else if (res.labelName == 'Contract Vehicle') {
          this.ContractVehicleResponseMethod(res);
          if (this.selectedContractVehicleItems.length === 0) {
            this.viewAllVehicles = false;
          }
        }
      }
    });
  }
  // States Response
  private StatesResponseMethod(res: any) {
    console.log('StatesResponseMethod is being called here...');
    this.backUpDropDown = [];
    this.backUpDropDown = this.states;
    this.states = null;
    this.states = [];
    console.log('Track error here...');
    let t = this;
    this.backUpDropDown.forEach(function (item: any) {
      if (item.StateId !== undefined) {
        t.states.push({ StateId: item.StateId, StateName: item.StateName });
      }

    });
    this.backUpDropDown = null;
    this.viewAllStates = true;
    console.log('StatesResponseMethod is being end here...');
  }

  // Opportunity type Response
  private OpportunityTypeResponseMethod(response: any) {
    this.opportunityTypeCheckBoxUnChecked();
    response.forEach((item, key) => {
      this.opportunityTypeCheckBoxChecked(item);
    });
  }
  private clearArraysAfterSaveBridgeSynonym() {
    this.bridgeSummarySynonymAgencyList = null;
    this.bridgeSummarySynonymStatesList = null;
    this.bridgeSummarySynonymContractVehicleList = null;
    this.bridgeSummarySynonymIndustryList = null;
    this.bridgeSummarySynonymOpportunityTypeList = null;
    //this.backUpDropDown = null;
  }
  // Agency Response
  private AgencyResponseMethod(res: any) {
    console.log('AgencyResponseMethod is being called here...');
    this.backUpDropDown = [];
    this.backUpDropDown = this.agenciesDropDown;
    this.agenciesDropDown = null;
    this.agenciesDropDown = [];
    this.backUpDropDown.push({ 'AgencyID': res.id, 'AgencyName': res.name });
    let t = this;
    this.backUpDropDown.forEach(function (item: any) {
      if (item.AgencyID !== undefined) {
        t.agenciesDropDown.push({ AgencyID: item.AgencyID, AgencyName: item.AgencyName });
      }
    });
    this.backUpDropDown = null;
    this.viewAllAgencies = true;
    console.log('AgencyResponseMethod is being end here...');
  }
  // Synonym Response Method
  private SynonymResponseMethod(res: any) {
    console.log('SynonymResponseMethod is being called here...');
    this.backUpDropDown = [];
    this.backUpDropDown = this.FilteredSynonymList;
    this.FilteredSynonymList = null;
    this.FilteredSynonymList = [];
    this.backUpDropDown.push({ 'SynonymId': res.id, 'Synonym': res.name.Name });
    let t = this;
    this.backUpDropDown.forEach(function (item: any) {
      //console.log(item);
      if (item.SynonymId !== undefined) {
        t.FilteredSynonymList.push({ SynonymId: item.SynonymId, Synonym: item.Synonym });
      }
    });
    this.backUpDropDown = null;
    this.tempSynonymList = t.FilteredSynonymList;

    if (this.summaryFieldAndSynonyms.length > 0) {
      let getMatchingSummarySynonymArray = this.summaryFieldAndSynonyms.find(x => x.SummaryFieldId == res.name.SummaryFieldId);
      getMatchingSummarySynonymArray.SummarySynonym.push({ SummaryFieldId: res.name.SummaryFieldId, SummarySynonymId: res.id, Synonym: res.name.Name, Description: '', CreatedBy: '', ModifiedBy: 0, Assign: false });
      this.FilterSummarySynonymsArray();
    }
    console.log('SynonymResponseMethod is end here...');
  }
  // Industry Response Method
  private IndustryResponseMethod(res: any) {
    console.log('IndustryResponseMethod is called here...');
    this.backUpDropDown = [];
    this.backUpDropDown = this.industry;
    this.industry = null;
    this.industry = [];
    this.backUpDropDown.push({ 'IndustryID': res.id, 'IndustryName': res.name });
    let t = this;
    this.backUpDropDown.forEach(function (item: any) {
      //console.log(item);
      if (item.IndustryID !== undefined) {
        t.industry.push({ IndustryID: item.IndustryID, IndustryName: item.IndustryName });
      }
    });
    this.backUpDropDown = null;
    this.viewAllIndustries = true;
    console.log('IndustryResponseMethod is end here...');
  }
  // Contract Vehicle Response Method
  private ContractVehicleResponseMethod(res: any) {
    console.log('ContractVehicleResponseMethod is called here...');
    this.backUpDropDown = [];
    this.backUpDropDown = this.contractVehicle;
    this.contractVehicle = null;
    this.contractVehicle = [];
    this.backUpDropDown.push({ 'ContractVehicleId': res.id, 'ContractVehicleName': res.name });
    let t = this;
    this.backUpDropDown.forEach(function (item: any) {
      if (item.ContractVehicleId !== undefined) {
        t.contractVehicle.push({ ContractVehicleId: item.ContractVehicleId, ContractVehicleName: item.ContractVehicleName });
      }

    });
    this.backUpDropDown = null;
    this.viewAllVehicles = true;
    console.log('Contract Vehicle Response Method is end here...');
  }
  //
  // Delete Category Synonym Bridges

  deleteSummarySynonymBridges() {
    if (this.SelectedSynonymId > 0) {
      if (this.progressSpinnerService.isLoading == false)
        this.progressSpinnerService.isLoading = true;

      this.disAbleSaveButton = true;
      this.summarySynonymbridgesLookupService.DeleteSummarySynonymBridges(this.SelectedSynonymId).subscribe(response => {
        debugger;
        if (response.code == 1) {
          if (response.message !== undefined || response.message !== null) {
            this.notification.success(response.message);

            this.disableDeleteButton = true;
            this.showAddBtn = false;

            // Un- assign deleted summary synonym
            let tempSummarySynonymArray = this.summaryFieldAndSynonyms.find(x => x.SummaryFieldId == this.SelectedSummaryFieldId);
            let summarySynonymObject = tempSummarySynonymArray.SummarySynonym.find(s => s.SummarySynonymId == this.SelectedSynonymId);
            summarySynonymObject.Assign = false;
            if (this.selectedSummaryRadioButtonVal !== "1") {
              let tempData = this.tempSynonymList.findIndex(s => s.SynonymId == this.SelectedSynonymId);
              // remove summary synonym object from tempSynonymList
              if (tempData !== -1 && tempData != null && tempData !== undefined) {
                this.tempSynonymList.splice(tempData,1);
              }
            }
            // reset synonym dropdown list value
            this.SelectedSynonymId = 0;
            //
            this.opportunityTypeSectionShow = false;
            this.multiSelectDropdownSectionShow = false;
            // Un-check all check boxes
            this.opportunityTypeCheckBoxUnChecked();

            // Clear selected items from multi selected dropdown lists
            this.ClearSelectedDropdownItems();

            // hide view all buttons
            this.hideViewAllButtons();

            // Initialize Selected Dropdown Items Lists
            this.InitializeSelectedDropdownItemsLists();

            //  initialize bridge synonym array
            this.bridgeSynonymArrayInitialization();
            //  clear Arrays After Delete BridgeS ynonym
            this.clearArraysAfterSaveBridgeSynonym();
            //  initialize Arrays After Delete Bridge Synonym
            this.initializeSynonymArray();

            this.progressSpinnerService.isLoading = false;

          }
        }
      });


    } else {
      return "Please select synonym to delete";
    }
  }

  private hideViewAllButtons() {
    this.viewAllAgencies = false;
    this.viewAllStates = false;
    this.viewAllVehicles = false;
    this.viewAllIndustries = false;
  }

  private ClearSelectedDropdownItems() {
    this.selectedAgencyItems = null;
    this.selectedStateItems = null;
    this.selectedIndustryItems = null;
    this.selectedContractVehicleItems = null;
    this.selectedOpportunityTypeListItems = null;
  }
  private InitializeSelectedDropdownItemsLists() {
    this.selectedAgencyItems = [];
    this.selectedStateItems = [];
    this.selectedIndustryItems = [];
    this.selectedContractVehicleItems = [];
    this.selectedOpportunityTypeListItems = [];
  }
  onSelectionChange($event) {
    debugger;
    if ($event.value !== undefined && $event.value !== null) {
      this.selectedSummaryRadioButtonVal = $event.value;
      this.FilterSummarySynonymsArray();
    }
  }
  //
  saveSynonymBridges(groupForm: FormGroup) {
    if (this.federalCheck === false && this.stateCheck === false && this.commercialCheck === false) {
      return true;
    }
    if (groupForm.valid == true) {
      var userId = sessionStorage.getItem('userId');
      this.groupForm.value.userId = userId;
      if (this.progressSpinnerService.isLoading == false)
        this.progressSpinnerService.isLoading = true;
      this.groupForm.value.BridgeSummarySynonymAgencyList = this.bridgeSummarySynonymAgencyList;
      this.groupForm.value.BridgeSummarySynonymStatesList = this.bridgeSummarySynonymStatesList;
      this.groupForm.value.BridgeSummarySynonymContractVehicleList = this.bridgeSummarySynonymContractVehicleList;
      this.groupForm.value.BridgeSummarySynonymIndustryList = this.bridgeSummarySynonymIndustryList;
      debugger;
      this.groupForm.value.SummarySynonymId = this.SelectedSynonymId;
      this.groupForm.value.BridgeSummarySynonymOpportunityTypeList = this.bridgeSummarySynonymOpportunityTypeList;
      this.disAbleSaveButton = true;
      this.summarySynonymbridgesLookupService.SaveSummaryBridges(groupForm.value).subscribe(response => {
        if (response.code == 1) {
          if (response.response !== undefined || response.response !== null) {
            debugger;
            let tempSummarySynonymArray = this.summaryFieldAndSynonyms.find(x => x.SummaryFieldId == this.SelectedSummaryFieldId);
            let summarySynonymObject = tempSummarySynonymArray.SummarySynonym.find(s => s.SummarySynonymId == this.SelectedSynonymId);
            summarySynonymObject.Assign = true;

            if (this.selectedSummaryRadioButtonVal === "1" || (this.selectedSummaryRadioButtonVal === "2" && this.isModelUpdated === true)) {

              this.disableDeleteButton = false;
              this.multiSelectDropdownSectionShow = true;
              this.opportunityTypeSectionShow = true;

              if (response.response.BridgeSummarySynonymAgencyList.length > 0) {
                this.AgencyResponseMethod(response.response.BridgeSummarySynonymAgencyList);

              }
              if (response.response.BridgeSummarySynonymIndustryList.length > 0) {
                this.IndustryResponseMethod(response.response.BridgeSummarySynonymIndustryList);
              }

              if (response.response.BridgeSummarySynonymContractVehicleList.length > 0) {
                this.ContractVehicleResponseMethod(response.response.BridgeSummarySynonymContractVehicleList);
              }

              if (response.response.BridgeSummarySynonymStatesList.length > 0) {
                this.StatesResponseMethod(response.response.BridgeSummarySynonymStatesList);
              }
              if (response.response.BridgeSummarySynonymOpportunityTypeList.length > 0) {
                this.OpportunityTypeResponseMethod(response.response.BridgeSummarySynonymOpportunityTypeList);
              }
            } else {
              let tempData = this.tempSynonymList.findIndex(s => s.SynonymId == this.SelectedSynonymId);
              // remove summary synonym object from tempSynonymList
              if (tempData !== -1 && tempData != null && tempData !== undefined) {
                this.tempSynonymList.splice(tempData, 1);
              }

              // Un-check all check boxes
              this.opportunityTypeCheckBoxUnChecked();

              // Clear selected items from multi selected dropdown lists
              this.ClearSelectedDropdownItems();

              // hide view all buttons
              this.hideViewAllButtons();

              // Initialize Selected Dropdown Items Lists
              this.InitializeSelectedDropdownItemsLists();

              //  initialize bridge synonym array
              this.bridgeSynonymArrayInitialization();

              //  initialize Arrays After Delete Bridge Synonym
              this.initializeSynonymArray();
              this.showAddBtn = false;
              this.SelectedSynonymId = 0;
              this.multiSelectDropdownSectionShow = false;
              this.opportunityTypeSectionShow = false;
            }
            this.summarySynonymBridges = null;
            this.summarySynonymBridges = response.response;
            this.isModelUpdated = false;
            //  clear Arrays After Delete BridgeS ynonym
            this.clearArraysAfterSaveBridgeSynonym();
            this.notification.success('Data added successfully');
            this.progressSpinnerService.isLoading = false; 
          }
        }
        else {
          this.errorMessage = response.message;
          this.disAbleSaveButton = false;
          this.progressSpinnerService.isLoading = false;         
        }
      });
    }
  }
  // selected Agency Iteration
  private selectedAgencyIteration(selectedAgencyItems, id) {
    selectedAgencyItems.forEach((value, key) => {
      debugger;
      this.bridgeSummarySynonymAgencyList.push({ BridgeSummarySynonymAgencyId: 0, RfpsummarySynonymId: id, AgencyId: value.AgencyID, DBTransactionType: 1 });
    });
    this.groupForm.value.BridgeSummarySynonymAgencyList = this.bridgeSummarySynonymAgencyList;
  }
  //

  private selectedStateIteration(selectedItems, id) {
    selectedItems.forEach((value, key) => {
      debugger;
      this.bridgeSummarySynonymStatesList.push({ BridgeSummarySynonymStatesId: 0, RfpsummarySynonymId: id, StateId: value.StateId, DBTransactionType: 1 });
    });
    this.groupForm.value.BridgeSummarySynonymStatesList = this.bridgeSummarySynonymStatesList;
  }
  //
  private selectedIndustryIteration(selectedItems, id) {
    selectedItems.forEach((value, key) => {
      debugger;
      this.bridgeSummarySynonymIndustryList.push({ BridgeSummarySynonymIndustryId: 0, RfpsummarySynonymId: id, IndustryId: value.IndustryID, DBTransactionType: 1 });
    });
    this.groupForm.value.BridgeSummarySynonymIndustryList = this.bridgeSummarySynonymIndustryList;
  }
  //
  private selectedContractVehicleIteration(selectedItems, id) {
    selectedItems.forEach((value, key) => {
      debugger;
      this.bridgeSummarySynonymContractVehicleList.push({ BridgeSummarySynonymContractVehicleId: 0, RfpsummarySynonymId: id, ContractVehicleId: value.ContractVehicleId, DBTransactionType: 1 });
    });
    this.groupForm.value.BridgeSummarySynonymContractVehicleList = this.bridgeSummarySynonymContractVehicleList;
  }
  //
  onItemSelect(item: any) {
    this.disAbleSaveButton = false;
    this.isModelUpdated = true;
    if (this.summarySynonymBridges === null) {
      this.bridgeSynonymArrayInitialization();
    }
    if (item.StateId > 0) {
      this.addStates(item);
    } else if (item.AgencyID > 0) {
      this.addAgency(item);
    }
    else if (item.IndustryID > 0) {
      this.addIndustry(item);
    }
    else if (item.ContractVehicleId > 0) {
      this.addContractVehicle(item);
    }

  }
  private bridgeSynonymArrayInitialization() {
    this.summarySynonymBridges = new SummarySynonymBridges;
    this.summarySynonymBridges.BridgeSummarySynonymAgencyList = [];
    this.summarySynonymBridges.BridgeSummarySynonymContractVehicleList = [];
    this.summarySynonymBridges.BridgeSummarySynonymIndustryList = [];
    this.summarySynonymBridges.BridgeSummarySynonymOpportunityTypeList = [];
    this.summarySynonymBridges.BridgeSummarySynonymStatesList = [];
  }

  private initializeSynonymArray() {
    this.bridgeSummarySynonymStatesList = [];
    this.bridgeSummarySynonymIndustryList = [];
    this.bridgeSummarySynonymContractVehicleList = [];
    this.bridgeSummarySynonymOpportunityTypeList = [];
    this.bridgeSummarySynonymAgencyList = [];

  }
  private addAgency(item: any) {
    let dBBridgeSynonymAgencyLists;
    if (this.summarySynonymBridges.BridgeSummarySynonymAgencyList.length > 0) {
      dBBridgeSynonymAgencyLists = this.summarySynonymBridges.BridgeSummarySynonymAgencyList.find(a => a.AgencyId == item.AgencyID);
    }
    if (this.bridgeSummarySynonymAgencyList === null) {
      this.bridgeSummarySynonymAgencyList = [];
    }

    if (dBBridgeSynonymAgencyLists !== undefined) {
      let tempAgency = this.bridgeSummarySynonymAgencyList.findIndex(a => a.AgencyId == item.AgencyID);
      if (tempAgency !== -1 && tempAgency != null && tempAgency !== undefined) {
        this.bridgeSummarySynonymAgencyList.splice(tempAgency, 1);
      }
    }
    if (dBBridgeSynonymAgencyLists == null && dBBridgeSynonymAgencyLists == undefined) {
      console.log('Insert into an array.');
      if (this.bridgeSummarySynonymAgencyList.length > 0) {
        let isExistsAgency = this.bridgeSummarySynonymAgencyList.find(a => a.AgencyId == item.AgencyID && a.RfpsummarySynonymId == this.SelectedSynonymId && a.DBTransactionType === 1);

        if (isExistsAgency === undefined || isExistsAgency === null) {
          this.bridgeSummarySynonymAgencyList.push({ BridgeSummarySynonymAgencyId: 0, RfpsummarySynonymId: this.SelectedSynonymId, AgencyId: item.AgencyID, DBTransactionType: 1 });
        }
      } else {
        this.bridgeSummarySynonymAgencyList.push({ BridgeSummarySynonymAgencyId: 0, RfpsummarySynonymId: this.SelectedSynonymId, AgencyId: item.AgencyID, DBTransactionType: 1 });
      }
    }
    this.viewAllAgencies = true;
  }

  private addStates(items: any) {
    if (this.bridgeSummarySynonymStatesList === null) {
      this.bridgeSummarySynonymStatesList = [];
    }
    let dBBridgeSummarySynonymStatesList;
    if (this.summarySynonymBridges.BridgeSummarySynonymStatesList.length > 0) {
      dBBridgeSummarySynonymStatesList = this.summarySynonymBridges.BridgeSummarySynonymStatesList.find(a => a.StateId == items.StateId);
    }

    if (dBBridgeSummarySynonymStatesList !== null && dBBridgeSummarySynonymStatesList !== undefined) {
      let tempStates = this.bridgeSummarySynonymStatesList.findIndex(a => a.StateId == items.StateId);
      if (tempStates !== -1 && tempStates != null && tempStates !== undefined) {
        this.bridgeSummarySynonymStatesList.splice(tempStates, 1);
      }
    }
    if (dBBridgeSummarySynonymStatesList == null && dBBridgeSummarySynonymStatesList == undefined) {
      console.log('Insert into an array.');
      if (this.bridgeSummarySynonymStatesList.length > 0) {
        let isExistsState = this.bridgeSummarySynonymStatesList.find(a => a.StateId == items.StateId && a.RfpsummarySynonymId == this.SelectedSynonymId && a.DBTransactionType === 1);

        if (isExistsState === undefined || isExistsState === null) {
          this.bridgeSummarySynonymStatesList.push({ BridgeSummarySynonymStatesId: 0, RfpsummarySynonymId: this.SelectedSynonymId, StateId: items.StateId, DBTransactionType: 1 });
        }
      } else {
        this.bridgeSummarySynonymStatesList.push({ BridgeSummarySynonymStatesId: 0, RfpsummarySynonymId: this.SelectedSynonymId, StateId: items.StateId, DBTransactionType: 1 });
      }
    }
    this.viewAllStates = true;
  }

  private addIndustry(item: any) {
    let dBBridgeSynonymIndustryList;

    if (this.summarySynonymBridges.BridgeSummarySynonymIndustryList.length > 0) {
      dBBridgeSynonymIndustryList = this.summarySynonymBridges.BridgeSummarySynonymIndustryList.find(a => a.IndustryId == item.IndustryID);
    }
    if (this.bridgeSummarySynonymIndustryList === null) {
      this.bridgeSummarySynonymIndustryList = [];
    }
    if (dBBridgeSynonymIndustryList !== undefined) {
      let tempIndustry = this.bridgeSummarySynonymIndustryList.findIndex(a => a.IndustryId == item.IndustryID);
      if (tempIndustry !== -1 && tempIndustry != null && tempIndustry !== undefined) {
        this.bridgeSummarySynonymIndustryList.splice(tempIndustry, 1);
      }
    }
    if (dBBridgeSynonymIndustryList == null && dBBridgeSynonymIndustryList == undefined) {
      console.log('Insert into an array.');
      if (this.bridgeSummarySynonymIndustryList.length > 0) {
        let isExistsIndustry = this.bridgeSummarySynonymIndustryList.find(a => a.IndustryId == item.IndustryID && a.RfpsummarySynonymId == this.SelectedSynonymId && a.DBTransactionType === 1);

        if (isExistsIndustry === undefined || isExistsIndustry === null) {
          this.bridgeSummarySynonymIndustryList.push({ BridgeSummarySynonymIndustryId: 0, RfpsummarySynonymId: this.SelectedSynonymId, IndustryId: item.IndustryID, DBTransactionType: 1 });
        }
      } else {
        this.bridgeSummarySynonymIndustryList.push({ BridgeSummarySynonymIndustryId: 0, RfpsummarySynonymId: this.SelectedSynonymId, IndustryId: item.IndustryID, DBTransactionType: 1 });
      }
    }
    this.viewAllIndustries = true;
  }

  private addContractVehicle(item: any) {
    let dBBridgeSynonymContractVehicleList;
    if (this.summarySynonymBridges.BridgeSummarySynonymContractVehicleList.length > 0) {
      dBBridgeSynonymContractVehicleList = this.summarySynonymBridges.BridgeSummarySynonymContractVehicleList.find(a => a.ContractVehicleId == item.ContractVehicleId);
    }
    if (this.bridgeSummarySynonymContractVehicleList === null) {
      this.bridgeSummarySynonymContractVehicleList = [];
    }
    if (dBBridgeSynonymContractVehicleList !== undefined) {
      let tempContractVehicle = this.bridgeSummarySynonymContractVehicleList.findIndex(a => a.ContractVehicleId == item.ContractVehicleId);
      if (tempContractVehicle !== -1 && tempContractVehicle != null && tempContractVehicle !== undefined) {
        this.bridgeSummarySynonymContractVehicleList.splice(tempContractVehicle, 1);
      }
    }
    if (dBBridgeSynonymContractVehicleList == null && dBBridgeSynonymContractVehicleList == undefined) {
      if (this.bridgeSummarySynonymContractVehicleList.length > 0) {
        let isExistsContractVehicle = this.bridgeSummarySynonymContractVehicleList.find(a => a.ContractVehicleId == item.ContractVehicleId && a.RfpsummarySynonymId == this.SelectedSynonymId && a.DBTransactionType === 1);

        if (isExistsContractVehicle === undefined || isExistsContractVehicle === null) {
          this.bridgeSummarySynonymContractVehicleList.push({ BridgeSummarySynonymContractVehicleId: 0, RfpsummarySynonymId: this.SelectedSynonymId, ContractVehicleId: item.ContractVehicleId, DBTransactionType: 1 });
        }
      } else {
        console.log('Insert into an array.');
        this.bridgeSummarySynonymContractVehicleList.push({ BridgeSummarySynonymContractVehicleId: 0, RfpsummarySynonymId: this.SelectedSynonymId, ContractVehicleId: item.ContractVehicleId, DBTransactionType: 1 });

      }
    }
    this.viewAllVehicles = true;
  }
  private addOpportunityType(item: any) {
    if (this.bridgeSummarySynonymOpportunityTypeList === null) {
      this.bridgeSummarySynonymOpportunityTypeList = [];
    }
    let dBBridgeSynonymOpportunityTypeItem;
    if (this.summarySynonymBridges.BridgeSummarySynonymOpportunityTypeList.length > 0) {
      dBBridgeSynonymOpportunityTypeItem = this.summarySynonymBridges.BridgeSummarySynonymOpportunityTypeList.find(a => a.OpportunityTypeId == item);
    }

    if (dBBridgeSynonymOpportunityTypeItem !== undefined) {
      let tempOpportunityType = this.bridgeSummarySynonymOpportunityTypeList.findIndex(a => a.OpportunityTypeId == item);
      if (tempOpportunityType !== -1 && tempOpportunityType != null && tempOpportunityType !== undefined) {
        this.bridgeSummarySynonymOpportunityTypeList.splice(tempOpportunityType, 1);
      }
    }
    if (dBBridgeSynonymOpportunityTypeItem == null && dBBridgeSynonymOpportunityTypeItem == undefined) {
      console.log('Insert into an array.');
      this.bridgeSummarySynonymOpportunityTypeList.push({ BridgeSummarySynonymOpportunityTypeId: 0, RfpsummarySynonymId: this.SelectedSynonymId, OpportunityTypeId: item, DBTransactionType: 1 });
    }
  }
  onItemDeSelect(items: any) {
    this.disAbleSaveButton = false;
    this.isModelUpdated = true;
    if (this.summarySynonymBridges === null) {
      this.bridgeSynonymArrayInitialization();
    }
    if (items.StateId > 0) {
      this.bridgeSummarySynonymStatesList = this.summarySynonymbridgesLookupService.deleteState(items, this.summarySynonymBridges, this.bridgeSummarySynonymStatesList);

      if (this.selectedStateItems.length === 0 || this.summarySynonymBridges.BridgeSummarySynonymStatesList.length === this.bridgeSummarySynonymStatesList.length) {
        this.viewAllStates = false;
      }
    } else if (items.AgencyID > 0) {
      this.bridgeSummarySynonymAgencyList = this.summarySynonymbridgesLookupService.deleteAgency(items, this.summarySynonymBridges, this.bridgeSummarySynonymAgencyList);
      if (this.selectedAgencyItems.length === 0 || this.summarySynonymBridges.BridgeSummarySynonymAgencyList.length === this.bridgeSummarySynonymAgencyList.length) {
        this.viewAllAgencies = false;
      }
    }
    else if (items.IndustryID > 0) {
      this.bridgeSummarySynonymIndustryList = this.summarySynonymbridgesLookupService.deleteIndustry(items, this.summarySynonymBridges, this.bridgeSummarySynonymIndustryList);
      if (this.selectedIndustryItems.length === 0 || this.summarySynonymBridges.BridgeSummarySynonymIndustryList.length === this.bridgeSummarySynonymIndustryList.length) {
        this.viewAllIndustries = false;
      }
    }
    else if (items.ContractVehicleId > 0) {
      this.bridgeSummarySynonymContractVehicleList = this.summarySynonymbridgesLookupService.deleteContractVehicle(items, this.summarySynonymBridges, this.bridgeSummarySynonymContractVehicleList);
      if (this.selectedContractVehicleItems.length === 0 || this.summarySynonymBridges.BridgeSummarySynonymContractVehicleList.length === this.bridgeSummarySynonymContractVehicleList.length) {
        this.viewAllVehicles = false;
      }
    }
  }

  onSelectAll(items: any, parm: string) {
    // console.log(items);
    debugger;
    this.disAbleSaveButton = false;
    this.isModelUpdated = true;
    if (this.summarySynonymBridges === null) {
      this.bridgeSynonymArrayInitialization();
    }
    if (items.length === 0) {
      if (parm === 'State') {
        this.deleteExistingStates();
        this.selectedStateItems = null;
        this.viewAllStates = false;
      }
      else if (parm === 'Agency') {
        this.deleteExistingAgencies();
        this.selectedAgencyItems = null;
        this.viewAllAgencies = false;
      }
      else if (parm === 'Industry') {
        this.deleteExistingIndustries();
        this.selectedIndustryItems = null;
        this.viewAllIndustries = false;
      }
      else if (parm === 'Vehicle') {
        this.deleteExistingContractVehicle();
        this.selectedContractVehicleItems = null;
        this.viewAllVehicles = false;
      }
    }
    else {

      items.forEach((value, key) => {
        if (value.StateId > 0) {
          if (this.selectedStateItems.length > 0) {
            this.bridgeSummarySynonymStatesList = this.summarySynonymbridgesLookupService.deleteState(value, this.summarySynonymBridges, this.bridgeSummarySynonymStatesList);
            // this.deleteExistingStates();
          }
          this.addStates(value);
        } else if (value.AgencyID > 0) {
          if (this.selectedAgencyItems.length > 0) {
            this.bridgeSummarySynonymAgencyList = this.summarySynonymbridgesLookupService.deleteAgency(value, this.summarySynonymBridges, this.bridgeSummarySynonymAgencyList);
            // this.deleteExistingAgencies();
          }
          this.addAgency(value);
        }
        else if (value.IndustryID > 0) {
          if (this.selectedIndustryItems.length > 0) {
            this.bridgeSummarySynonymIndustryList = this.summarySynonymbridgesLookupService.deleteIndustry(value, this.summarySynonymBridges, this.bridgeSummarySynonymIndustryList);
            //this.deleteExistingIndustries();
          }
          this.addIndustry(value);
        }
        else if (value.ContractVehicleId > 0) {
          if (this.selectedContractVehicleItems.length > 0) {
            this.bridgeSummarySynonymContractVehicleList = this.summarySynonymbridgesLookupService.deleteContractVehicle(value, this.summarySynonymBridges, this.bridgeSummarySynonymContractVehicleList);
            // this.deleteExistingContractVehicle();
          }
          this.addContractVehicle(value);
        }
      });
    }
  }


  private deleteExistingContractVehicle() {
    this.selectedContractVehicleItems.forEach((contract, index) => {
      this.bridgeSummarySynonymContractVehicleList = this.summarySynonymbridgesLookupService.deleteContractVehicle(contract, this.summarySynonymBridges, this.bridgeSummarySynonymContractVehicleList);
      // let tempContract = this.selectedContractVehicleItems.findIndex(a => a.ContractVehicleId === contract.ContractVehicleId);
      // if (tempContract !== -1 && tempContract != null && tempContract !== undefined) {
      //   this.selectedContractVehicleItems.splice(tempContract, 1);
      // }
    });
  }

  private deleteExistingIndustries() {
    this.selectedIndustryItems.forEach((industry, index) => {
      this.bridgeSummarySynonymIndustryList = this.summarySynonymbridgesLookupService.deleteIndustry(industry, this.summarySynonymBridges, this.bridgeSummarySynonymIndustryList);
      // let tempIndustry = this.selectedIndustryItems.findIndex(a => a.IndustryID === industry.IndustryID);
      // if (tempIndustry !== -1 && tempIndustry != null && tempIndustry !== undefined) {
      //   this.selectedIndustryItems.splice(tempIndustry, 1);
      // }
    });
  }

  private deleteExistingAgencies() {
    this.selectedAgencyItems.forEach((agency, index) => {
      this.bridgeSummarySynonymAgencyList = this.summarySynonymbridgesLookupService.deleteAgency(agency, this.summarySynonymBridges, this.bridgeSummarySynonymAgencyList);
      // let tempAgency = this.selectedAgencyItems.findIndex(a => a.AgencyID === agency.AgencyID);
      // if (tempAgency !== -1 && tempAgency != null && tempAgency !== undefined) {
      //   this.selectedAgencyItems.splice(tempAgency, 1);
      // }
    });
  }

  private deleteExistingStates() {
    this.selectedStateItems.forEach((state, index) => {
      this.bridgeSummarySynonymStatesList = this.summarySynonymbridgesLookupService.deleteState(state, this.summarySynonymBridges, this.bridgeSummarySynonymStatesList);
    });
  }

  onDeSelectAll(items: any) {
    this.disAbleSaveButton = false;
    this.isModelUpdated = true;
    if (this.summarySynonymBridges === null) {
      this.bridgeSynonymArrayInitialization();
    }
    items.forEach((value, key) => {
      if (value.StateId > 0) {
        this.bridgeSummarySynonymStatesList = this.summarySynonymbridgesLookupService.deleteState(value, this.summarySynonymBridges, this.bridgeSummarySynonymStatesList);
        let tempState = this.selectedStateItems.findIndex(a => a.StateId === value.StateId);
        if (tempState !== -1 && tempState != null && tempState !== undefined) {
          this.selectedStateItems.splice(tempState, 1);
        }

        if (this.selectedStateItems.length === 0 || this.summarySynonymBridges.BridgeSummarySynonymStatesList.length === this.bridgeSummarySynonymStatesList.length) {
          this.viewAllStates = false;
        }
      } else if (value.AgencyID > 0) {
        this.bridgeSummarySynonymAgencyList = this.summarySynonymbridgesLookupService.deleteAgency(value, this.summarySynonymBridges, this.bridgeSummarySynonymAgencyList);

        let tempAgency = this.selectedAgencyItems.findIndex(a => a.AgencyID === value.AgencyID);
        if (tempAgency !== -1 && tempAgency != null && tempAgency !== undefined) {
          this.selectedAgencyItems.splice(tempAgency, 1);
        }
        if (this.selectedAgencyItems.length === 0 || this.summarySynonymBridges.BridgeSummarySynonymAgencyList.length === this.bridgeSummarySynonymAgencyList.length) {
          this.viewAllAgencies = false;
        }
      }
      else if (value.IndustryID > 0) {
        this.bridgeSummarySynonymIndustryList = this.summarySynonymbridgesLookupService.deleteIndustry(value, this.summarySynonymBridges, this.bridgeSummarySynonymIndustryList);

        let tempIndustry = this.selectedIndustryItems.findIndex(a => a.IndustryID === value.IndustryID);
        if (tempIndustry !== -1 && tempIndustry != null && tempIndustry !== undefined) {
          this.selectedIndustryItems.splice(tempIndustry, 1);
        }
        if (this.selectedIndustryItems.length === 0 || this.summarySynonymBridges.BridgeSummarySynonymIndustryList.length === this.bridgeSummarySynonymIndustryList.length) {
          this.viewAllIndustries = false;
        }
      }
      else if (value.ContractVehicleId > 0) {
        debugger;
        this.bridgeSummarySynonymContractVehicleList = this.summarySynonymbridgesLookupService.deleteContractVehicle(value, this.summarySynonymBridges, this.bridgeSummarySynonymContractVehicleList);

        let tempContract = this.selectedContractVehicleItems.findIndex(a => a.ContractVehicleId === value.ContractVehicleId);
        if (tempContract !== -1 && tempContract != null && tempContract !== undefined) {
          this.selectedContractVehicleItems.splice(tempContract, 1);
        }

        if (this.selectedContractVehicleItems.length === 0 || this.summarySynonymBridges.BridgeSummarySynonymContractVehicleList.length === this.bridgeSummarySynonymContractVehicleList.length) {
          this.viewAllVehicles = false;
        }
      }
    });
    //console.log(items);
  }
  onChange(OpportunityTypeCode: Number, $event) {
    debugger;
    this.multiSelectDropdownSectionShow = true;
    if (this.federalCheck === true || this.stateCheck === true || this.commercialCheck === true) {
      this.disAbleSaveButton = false;
      this.isModelUpdated = true;
      this.ShowErrorMessage = '';
      this.showAddBtn = true;

      if (this.selectedStateItems.length > 0) {
        this.viewAllStates = true;
      }
      if (this.selectedAgencyItems.length > 0) {
        this.viewAllAgencies = true;
      }
      if (this.selectedIndustryItems.length > 0) {
        this.viewAllIndustries = true;
      }
      if (this.selectedContractVehicleItems.length > 0) {
        this.viewAllVehicles = true;
      }

    } else {
      this.disAbleSaveButton = true;
      this.isModelUpdated = false;
      this.ShowErrorMessage = this.opportunityTypeErrorMessage;
      this.showAddBtn = false;

      this.hideViewAllButtons();
    }

    if (this.summarySynonymBridges === null) {
      this.bridgeSynonymArrayInitialization();
    }
    if ($event.checked) {
      this.addOpportunityType(OpportunityTypeCode);
    } else {
      this.bridgeSummarySynonymOpportunityTypeList = this.summarySynonymbridgesLookupService.deleteOpportunityType(OpportunityTypeCode, this.summarySynonymBridges, this.bridgeSummarySynonymOpportunityTypeList);
    }
  }
  public viewAll(selectedList, selectedDropDownName) {
    this.compareArraysBeforeAndAfterPopUpClose = selectedList.length;
    let data = { selectedList: selectedList, selectedDDLName: selectedDropDownName, summarySynonymBridges: this.summarySynonymBridges, bridgeSummarySynonymStatesList: this.bridgeSummarySynonymStatesList, bridgeSummarySynonymAgencyList: this.bridgeSummarySynonymAgencyList, bridgeSummarySynonymIndustryList: this.bridgeSummarySynonymIndustryList, bridgeSummarySynonymContractVehicleList: this.bridgeSummarySynonymContractVehicleList, bridgeSummarySynonymOpportunityTypeList: this.bridgeSummarySynonymOpportunityTypeList };

    let matDialogRef = this.dialogService.openDialog(
      {
        width: '81%',
        data: data,
        dailogComponent: ViewAllSummarySynonymComponent
      });
    matDialogRef.afterClosed().subscribe(res => {
      this.responseAfterPopUpClose = []; 
      if (res !== undefined && res !== null) {
        // this.bridgeSummarySynonymAgencyList = res.bridgeSummarySynonymAgencyList;
        // this.bridgeSummarySynonymStatesList = res.bridgeSummarySynonymStatesList;
        // this.bridgeSummarySynonymIndustryList = res.bridgeSummarySynonymIndustryList;
        // this.bridgeSummarySynonymContractVehicleList = res.bridgeSummarySynonymContractVehicleList;


      if (res.name === "States") {

        this.responseAfterPopUpClose = res.stateArray; 

        this.selectedStateItems = null;
        this.selectedStateItems = [];

        if (res.stateArray.length > 0) {
          res.stateArray.forEach((value, key) => {
            console.log('console log for element= ' + value);
            this.selectedStateItems.push({ StateId: value.StateId, StateName: value.StateName });
          });
        } else {
          this.viewAllStates = false;
        }

      } else if (res.name === "Agencies") {

        this.responseAfterPopUpClose = res.agencyArray; 

        this.selectedAgencyItems = null;
        this.selectedAgencyItems = [];

        if (res.agencyArray.length > 0) {
          res.agencyArray.forEach((value, key) => {
            console.log('console log for element= ' + value);
            this.selectedAgencyItems.push({ AgencyID: value.AgencyID, AgencyName: value.AgencyName });
          });

        } else {
          this.viewAllAgencies = false;
        }

      } else if (res.name === "Industries") {

        this.responseAfterPopUpClose = res.industryArray; 

        this.selectedIndustryItems = null;
        this.selectedIndustryItems = [];

        if (res.industryArray.length > 0) {
          res.industryArray.forEach((value, key) => {
            console.log('console log for element= ' + value);
            this.selectedIndustryItems.push({ IndustryID: value.IndustryID, IndustryName: value.IndustryName });
          });
        } else {
          this.viewAllIndustries = false;
        }

      } else if (res.name === "Contract Vehicles") {

        this.responseAfterPopUpClose = res.contractVehicle; 
        
        this.selectedContractVehicleItems = null;
        this.selectedContractVehicleItems = [];

        if (res.contractVehicle.length > 0) {
          res.contractVehicle.forEach((value, key) => {
            console.log('console log for element= ' + value);
            this.selectedContractVehicleItems.push({ ContractVehicleId: value.ContractVehicleId, ContractVehicleName: value.ContractVehicleName });
          });
        } else {
          this.viewAllVehicles = false;
        }
      }
    }      
      // Enable and disable save button after popup is closed
      debugger;
      if (this.responseAfterPopUpClose.length === this.compareArraysBeforeAndAfterPopUpClose && this.isModelUpdated === false) {
        this.disAbleSaveButton = true;
      } else {
        this.disAbleSaveButton = false;
      }
    });

  }

}
