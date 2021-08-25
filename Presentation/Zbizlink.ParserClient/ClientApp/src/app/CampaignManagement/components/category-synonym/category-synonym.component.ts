import { Component, OnInit, ElementRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { DialogService } from '../../../shared/services/dialog.service';
import { AddCategoryFieldComponent } from '../../shared/add-category-field/add-category-field.component';
import { ProgressSpinnerService } from '../../../shared/services/progress-spinner.service';
import { WebApiResponse } from '../../../shared/models/WebApiResponse';
import { CampaignLookupDataService } from '../../services/campaign-lookup-data.service';
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
import { BridgeSynonymOpportunityTypeList } from 'src/app/CampaignManagement/models/bridge-synonym-opportunity-type-list';
import { SynonymBridges } from 'src/app/CampaignManagement/models/synonym-bridges';
import { BridgeSynonymAgencyList } from 'src/app/CampaignManagement/models/bridge-synonym-agency-list';
import { BridgeSynonymContractVehicleList } from 'src/app/CampaignManagement/models/bridge-synonym-contract-vehicle-list';
import { BridgeSynonymIndustryList } from 'src/app/CampaignManagement/models/bridge-synonym-industry-list';
import { BridgeSynonymStatesList } from 'src/app/CampaignManagement/models/bridge-synonym-states-list';
import { SaveChangesBeforeMoveComponent } from '../../shared/save-changes-before-move/save-changes-before-move.component';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';


@Component({
  selector: 'app-category-synonym',
  templateUrl: './category-synonym.component.html',
  styleUrls: ['./category-synonym.component.css']
})
export class CategorySynonymComponent implements OnInit {


  search: string = 'Search....';
  federalCheck = false;
  stateCheck = false;
  commercialCheck = false;
  groupForm: FormGroup;

  selectedCategoryRadioButtonVal: string = "1";
  isSelected: boolean = true;
  agenciesDropDownSettings: any = {};
  statesDropdownSettings: any = {};
  industryDropdownSettings: any = {};
  contractVehicleDropdownSettings: any = {};
  synonymDropdownSettings: any = {};

  CategoryAndSynonymList: any[] = [];
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
  selectedOpportunityTypeListItems: BridgeSynonymOpportunityTypeList[] = [];

  synonymBridges = new SynonymBridges;

  //for save
  bridgeSynonymAgencyList: BridgeSynonymAgencyList[] = [];
  bridgeSynonymContractVehicleList: BridgeSynonymContractVehicleList[] = [];
  bridgeSynonymIndustryList: BridgeSynonymIndustryList[] = [];
  bridgeSynonymStatesList: BridgeSynonymStatesList[] = [];
  bridgeSynonymOpportunityTypeList: BridgeSynonymOpportunityTypeList[] = [];

  SelectedSynonymId: Number = 0;
  backUpDropDown: any[] = [];
  isChecked: false;
  category_Id: Number = 0;
  errorMessage: string = '';
  ShowErrorMessage: string = '';
  opportunityTypeErrorMessage: string = 'Please select at least one opportunity type';

  opportunityTypeSectionShow: boolean = false;
  multiSelectDropdownSectionShow: boolean = false;

  isDisabled: boolean = true;
  disAbleSaveButton: boolean = true;
  showAddBtn: boolean = false;
  showSynonymAddBtn: boolean = false;
  isModelUpdated: boolean = false;

  viewAllStates: boolean = false;
  viewAllAgencies: boolean = false;
  viewAllIndustries: boolean = false;
  viewAllVehicles: boolean = false;

  synonymSectionShow: boolean = false;

  disableDeleteButton: boolean = true;

  compareArraysBeforeAndAfterPopUpClose: Number = 0;
  responseAfterPopUpClose: any[] = [];
  constructor(private dialogService: DialogService, public progressSpinnerService: ProgressSpinnerService,
    public campaignLookupDataService: CampaignLookupDataService, private router: Router, private formBuilder: FormBuilder,
    private notification: NotificationService, private el: ElementRef

  ) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('CampaignUser')) {
      this.redirect();
      var response = this.GetCampaignOpportunities();
      console.log(response);

    }
    debugger;
    this.dropdownSettings();
    this.groupForm = this.formBuilder.group({
      CategoryId: [''],
      SynonymId: [''],
      FederalOpportunityTypeCode: [''],
      StateOpportunityTypeCode: [''],
      CommercialOpportunityTypeCode: [''],
      State: [''],
      Agency: [''],
      Industry: [''],
      Vehicle: ['']
    })
  }
  private redirect(): void {
    this.router.navigateByUrl('category-synonym'); //use the stored url here
  }



  // Get campaign opportunity list
  public GetCampaignOpportunities() {
    if (this.progressSpinnerService.isLoading == false)
      this.progressSpinnerService.isLoading = true;
    this.campaignLookupDataService.GetOpportunityCategoryLookupData().subscribe((res: WebApiResponse) => {
      console.log("response is = " + res);
      debugger;
      if (res.code == '1') {
        this.agenciesDropDown = res.response.AgencyList;
        this.CategoryAndSynonymList = res.response.CategoryAndSynonymList;
        this.categoryList(res.response.CategoryAndSynonymList);
        this.contractVehicle = res.response.ContractVehicleList;
        this.industry = res.response.IndustryList;
        this.OpportunityTypeList = res.response.OpportunityTypeList;
        this.states = res.response.StatesList;
        this.progressSpinnerService.isLoading = false;
      } else {
        console.log("Error log !");
      }

    },
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

  categoryList(category: any) {
    category.forEach((value, key) => {
      if (value.CategoryId > 0) {
        this.categories.push({ 'CategoryId': value.CategoryId, 'Name': value.Name });
      }
    });
  }

  selectCategory($event) {
    this.category_Id = $event.value;
    this.ShowErrorMessage = '';
    this.disableDeleteButton = true;
    // On Category seletion reset already checked radio button to All
    this.selectedCategoryRadioButtonVal = "1";
    this.isSelected = true;
    // Multi dropdown values clear selection
    this.ClearSelectedDropdownItems();
    // hiding view all buttons

    this.hideViewAllButtons();

    this.showSynonymAddBtn = true;

    this.showAddBtn = false;
    this.disAbleSaveButton = true;
    this.isDisabled = true;
    this.isModelUpdated = false;

    this.FilterCategorySynonymsArray();
  }



  private FilterCategorySynonymsArray() {

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
    this.isModelUpdated = false;

    this.CategoryAndSynonymList.forEach((value, key) => {
      if (value.CategoryId === this.category_Id) {
        debugger;
        value.CategorySynonym.forEach((categoryVal, Index) => {
          if (this.selectedCategoryRadioButtonVal === "1") {
            this.FilteredSynonymList.push({ SynonymId: categoryVal.SynonymId, Synonym: categoryVal.Synonym, CategoryId: categoryVal.CategoryId, Assign: categoryVal.Assign });
          }
          else if (this.selectedCategoryRadioButtonVal === "2" && categoryVal.Assign === true) {
            this.FilteredSynonymList.push({ SynonymId: categoryVal.SynonymId, Synonym: categoryVal.Synonym, CategoryId: categoryVal.CategoryId, Assign: categoryVal.Assign });
            this.isSelected = false;
          }
          else if (this.selectedCategoryRadioButtonVal === "3" && categoryVal.Assign === false) {
            this.FilteredSynonymList.push({ SynonymId: categoryVal.SynonymId, Synonym: categoryVal.Synonym, CategoryId: categoryVal.CategoryId, Assign: categoryVal.Assign });
            this.isSelected = false;
          }
        });
      }
    });
    this.tempSynonymList = this.FilteredSynonymList.slice();
  }

  onMovingWithoutSavingChanges() {
    let matDialogRef = this.dialogService.openDialog(
      {
        width: '395px',
        data: '',
        dailogComponent: SaveChangesBeforeMoveComponent
      });
    matDialogRef.afterClosed().subscribe(res => {
      if (res !== undefined || res !== null || res !== "") {
        if (res === "Save") {

        } else {

        }
      }

    });
  }



  selectSynonym($event) {
    debugger;
    if ($event.value === undefined || $event.value === null || $event.value === "") {
      return true;
    } else {
      this.SelectedSynonymId = $event.value;
    }
    this.hideViewAllButtons();

    this.opportunityTypeSectionShow = true;

    this.isDisabled = false;
    this.showAddBtn = true;
    this.disAbleSaveButton = true;
    this.isModelUpdated = false;

    this.disableDeleteButton = true;
    this.opportunityTypeCheckBoxUnChecked();

    if (this.progressSpinnerService.isLoading == false)
      this.progressSpinnerService.isLoading = true;
    this.initializeSynonymArray();
    this.campaignLookupDataService.GetSynonymBridgesLookupData(this.SelectedSynonymId).subscribe((res: WebApiResponse) => {
      console.log("response is = " + res);
      if (res.code == '1') {
        debugger;
        if (res.response.BridgeSynonymAgencyList.length > 0 || res.response.BridgeSynonymContractVehicleList.length > 0 || res.response.BridgeSynonymIndustryList.length > 0 || res.response.BridgeSynonymOpportunityTypeList.length > 0 || res.response.BridgeSynonymStatesList.length > 0) {
          this.disableDeleteButton = false;
          this.multiSelectDropdownSectionShow = true;
        } else {
          this.multiSelectDropdownSectionShow = false;
        }

        this.synonymBridges = null;

        this.synonymBridges = res.response;
        this.ClearSelectedDropdownItems();
        this.InitializeSelectedDropdownItemsLists();

        res.response.BridgeSynonymContractVehicleList.forEach((value, key) => {
          const getContractVehicle = this.contractVehicle.find(x => x.ContractVehicleId == value.ContractVehicleId);
          if (getContractVehicle !== undefined) {
            this.selectedContractVehicleItems.push(getContractVehicle);
            this.viewAllVehicles = true;
          }
        });
        //
        res.response.BridgeSynonymStatesList.forEach((value, key) => {
          const getStatesListItem = this.states.find(x => x.StateId == value.StateId);
          if (getStatesListItem !== undefined) {
            this.selectedStateItems.push(getStatesListItem);
            this.viewAllStates = true;
          }
        });
        //
        res.response.BridgeSynonymIndustryList.forEach((value, key) => {
          const getIndustryListItem = this.industry.find(x => x.IndustryID == value.IndustryId);
          if (getIndustryListItem !== undefined) {
            this.selectedIndustryItems.push(getIndustryListItem);
            this.viewAllIndustries = true;
          }
        });
        //
        res.response.BridgeSynonymAgencyList.forEach((value, key) => {
          const getAgencyListItem = this.agenciesDropDown.find(x => x.AgencyID == value.AgencyId);
          if (getAgencyListItem !== undefined) {
            this.selectedAgencyItems.push(getAgencyListItem);
            this.viewAllAgencies = true;
          }
        });
        res.response.BridgeSynonymOpportunityTypeList.forEach((item, key) => {
          debugger;
          this.opportunityTypeCheckBoxChecked(item);
        });
        //
        if (res.response.BridgeSynonymOpportunityTypeList.length <= 0) {
          this.ShowErrorMessage = this.opportunityTypeErrorMessage;
          this.showAddBtn = false;

          this.hideViewAllButtons();
        }

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

  private opportunityTypeCheckBoxChecked(item: any) {
    debugger;
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
    let data = { id: obj, categoryID: this.category_Id };

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
    this.bridgeSynonymAgencyList = null;
    this.bridgeSynonymStatesList = null;
    this.bridgeSynonymContractVehicleList = null;
    this.bridgeSynonymIndustryList = null;
    this.bridgeSynonymOpportunityTypeList = null;

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

      if (item.SynonymId !== undefined) {
        t.FilteredSynonymList.push({ SynonymId: item.SynonymId, Synonym: item.Synonym });
      }
    });
    this.backUpDropDown = null;
    this.tempSynonymList = this.FilteredSynonymList;

    if (this.CategoryAndSynonymList.length > 0) {
      let getMatchingCategorySynonymArray = this.CategoryAndSynonymList.find(x => x.CategoryId == this.category_Id);
      getMatchingCategorySynonymArray.CategorySynonym.push({ SynonymId: res.id, Synonym: res.name.Name, CategoryId: this.category_Id, Assign: false });
      this.FilterCategorySynonymsArray();
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
    console.log('ContractVehicleResponseMethod is end here...');
  }
  // Delete Category Synonym Bridges

  deleteSynonymBridges() {
    if (this.SelectedSynonymId > 0) {
      if (this.progressSpinnerService.isLoading == false)
        this.progressSpinnerService.isLoading = true;

      this.disAbleSaveButton = true;
      this.campaignLookupDataService.DeleteCategorySynonymBridges(this.SelectedSynonymId).subscribe(response => {
        debugger;
        if (response.code == 1) {
          if (response.message !== undefined || response.message !== null) {
            this.notification.success(response.message);

            this.disableDeleteButton = true;
            this.showAddBtn = false;

            // Un- assign deleted summary synonym
            let tempCategorySynonymArray = this.CategoryAndSynonymList.find(x => x.CategoryId == this.category_Id);
            let categorySynonymObject = tempCategorySynonymArray.CategorySynonym.find(s => s.SynonymId == this.SelectedSynonymId);
            categorySynonymObject.Assign = false;
            if (this.selectedCategoryRadioButtonVal !== "1") {
              let tempData = this.tempSynonymList.findIndex(s => s.SynonymId == this.SelectedSynonymId);
              // remove summary synonym object from tempSynonymList
              if (tempData !== -1 && tempData != null && tempData !== undefined) {
                this.tempSynonymList.splice(tempData, 1);
              }
            }
            // reset synonym dropdown list value
            this.SelectedSynonymId = 0;
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
  //
  saveSynonymBridges(groupForm: FormGroup) {
    if (this.federalCheck === false && this.stateCheck === false && this.commercialCheck === false) {
      return true;
    }
    if (groupForm.valid == true) {
      var userId = sessionStorage.getItem('userId');
      this.groupForm.value.userId = userId;
      this.groupForm.value.SynonymId = this.SelectedSynonymId;

      if (this.progressSpinnerService.isLoading == false)
        this.progressSpinnerService.isLoading = true;
      this.groupForm.value.BridgeSynonymAgencyList = this.bridgeSynonymAgencyList;
      this.groupForm.value.BridgeSynonymStatesList = this.bridgeSynonymStatesList;
      this.groupForm.value.BridgeSynonymContractVehicleList = this.bridgeSynonymContractVehicleList;
      this.groupForm.value.BridgeSynonymIndustryList = this.bridgeSynonymIndustryList;
      debugger;
      this.groupForm.value.BridgeSynonymOpportunityTypeList = this.bridgeSynonymOpportunityTypeList;
      this.disAbleSaveButton = true;
      this.campaignLookupDataService.SaveSynonymBridges(groupForm.value).subscribe(response => {
        if (response.code == 1) {
          if (response.response !== undefined || response.response !== null) {
            debugger;
            let tempCategorySynonymArray = this.CategoryAndSynonymList.find(x => x.CategoryId == this.category_Id);
            let categorySynonymObject = tempCategorySynonymArray.CategorySynonym.find(s => s.SynonymId == this.SelectedSynonymId);
            categorySynonymObject.Assign = true;
            if (this.selectedCategoryRadioButtonVal === "1" || (this.selectedCategoryRadioButtonVal === "2" && this.isModelUpdated === true)) {

              this.disableDeleteButton = false;
              this.multiSelectDropdownSectionShow = true;
              this.opportunityTypeSectionShow = true;

              if (response.response.BridgeSynonymAgencyList.length > 0) {
                this.AgencyResponseMethod(response.response.BridgeSynonymAgencyList);

              }
              if (response.response.BridgeSynonymIndustryList.length > 0) {
                this.IndustryResponseMethod(response.response.BridgeSynonymIndustryList);
              }

              if (response.response.BridgeSynonymContractVehicleList.length > 0) {
                this.ContractVehicleResponseMethod(response.response.BridgeSynonymContractVehicleList);
              }

              if (response.response.BridgeSynonymStatesList.length > 0) {
                this.StatesResponseMethod(response.response.BridgeSynonymStatesList);
              }
              if (response.response.BridgeSynonymOpportunityTypeList.length > 0) {
                this.OpportunityTypeResponseMethod(response.response.BridgeSynonymOpportunityTypeList);
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
            this.synonymBridges = null;
            this.synonymBridges = response.response;
            this.isModelUpdated = false;
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

  //
  onSelectionChange($event) {
    if ($event.value !== undefined && $event.value !== null) {
      this.selectedCategoryRadioButtonVal = $event.value;
      this.FilterCategorySynonymsArray();
    }
  }

  // selected Agency Iteration
  private selectedAgencyIteration(selectedAgencyItems, id) {
    selectedAgencyItems.forEach((value, key) => {
      debugger;
      this.bridgeSynonymAgencyList.push({ BridgeSynonymAgencyId: 0, SynonymId: id, AgencyId: value.AgencyID, DBTransactionType: 1 });
    });
    this.groupForm.value.BridgeSynonymAgencyList = this.bridgeSynonymAgencyList;
  }
  //

  private selectedStateIteration(selectedItems, id) {
    selectedItems.forEach((value, key) => {
      debugger;
      this.bridgeSynonymStatesList.push({ BridgeSynonymStatesId: 0, SynonymId: id, StateId: value.StateId, DBTransactionType: 1 });
    });
    this.groupForm.value.BridgeSynonymStatesList = this.bridgeSynonymStatesList;
  }
  //
  private selectedIndustryIteration(selectedItems, id) {
    selectedItems.forEach((value, key) => {
      debugger;
      this.bridgeSynonymIndustryList.push({ BridgeSynonymIndustryId: 0, SynonymId: id, IndustryId: value.IndustryID, DBTransactionType: 1 });
    });
    this.groupForm.value.BridgeSynonymIndustryList = this.bridgeSynonymIndustryList;
  }
  //
  private selectedContractVehicleIteration(selectedItems, id) {
    selectedItems.forEach((value, key) => {
      debugger;
      this.bridgeSynonymContractVehicleList.push({ BridgeSynonymContractVehicleId: 0, SynonymId: id, ContractVehicleId: value.ContractVehicleId, DBTransactionType: 1 });
    });
    this.groupForm.value.BridgeSynonymContractVehicleList = this.bridgeSynonymContractVehicleList;
  }
  //
  onItemSelect(item: any) {
    this.disAbleSaveButton = false;
    this.isModelUpdated = true;
    if (this.synonymBridges === null) {
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
    this.synonymBridges = new SynonymBridges;
    this.synonymBridges.BridgeSynonymAgencyList = [];
    this.synonymBridges.BridgeSynonymContractVehicleList = [];
    this.synonymBridges.BridgeSynonymIndustryList = [];
    this.synonymBridges.BridgeSynonymOpportunityTypeList = [];
    this.synonymBridges.BridgeSynonymStatesList = [];
  }

  private initializeSynonymArray() {
    this.bridgeSynonymStatesList = [];
    this.bridgeSynonymIndustryList = [];
    this.bridgeSynonymContractVehicleList = [];
    this.bridgeSynonymOpportunityTypeList = [];
    this.bridgeSynonymAgencyList = [];
    //this.backUpDropDown = [];
  }
  private addAgency(item: any) {
    let dBBridgeSynonymAgencyLists;
    if (this.synonymBridges.BridgeSynonymAgencyList.length > 0) {
      dBBridgeSynonymAgencyLists = this.synonymBridges.BridgeSynonymAgencyList.find(a => a.AgencyId == item.AgencyID);
    }
    if (this.bridgeSynonymAgencyList === null) {
      this.bridgeSynonymAgencyList = [];
    }

    if (dBBridgeSynonymAgencyLists !== undefined) {
      let tempAgency = this.bridgeSynonymAgencyList.findIndex(a => a.AgencyId == item.AgencyID);
      if (tempAgency !== -1 && tempAgency != null && tempAgency !== undefined) {
        this.bridgeSynonymAgencyList.splice(tempAgency, 1);
      }
    }
    if (dBBridgeSynonymAgencyLists == null && dBBridgeSynonymAgencyLists == undefined) {
      console.log('Insert into an array.');
      if (this.bridgeSynonymAgencyList.length > 0) {
        let isExistsAgency = this.bridgeSynonymAgencyList.find(a => a.AgencyId == item.AgencyID && a.SynonymId == this.SelectedSynonymId && a.DBTransactionType === 1);

        if (isExistsAgency === undefined || isExistsAgency === null) {
          this.bridgeSynonymAgencyList.push({ BridgeSynonymAgencyId: 0, SynonymId: this.SelectedSynonymId, AgencyId: item.AgencyID, DBTransactionType: 1 });
        }
      } else {
        this.bridgeSynonymAgencyList.push({ BridgeSynonymAgencyId: 0, SynonymId: this.SelectedSynonymId, AgencyId: item.AgencyID, DBTransactionType: 1 });
      }
    }
    this.viewAllAgencies = true;
  }

  private addStates(items: any) {
    if (this.bridgeSynonymStatesList === null) {
      this.bridgeSynonymStatesList = [];
    }
    let dBBridgeSynonymStatesList;
    if (this.synonymBridges.BridgeSynonymStatesList.length > 0) {
      dBBridgeSynonymStatesList = this.synonymBridges.BridgeSynonymStatesList.find(a => a.StateId == items.StateId);
    }

    if (dBBridgeSynonymStatesList !== null && dBBridgeSynonymStatesList !== undefined) {
      let tempStates = this.bridgeSynonymStatesList.findIndex(a => a.StateId == items.StateId);
      if (tempStates !== -1 && tempStates != null && tempStates !== undefined) {
        this.bridgeSynonymStatesList.splice(tempStates, 1);
      }
    }
    if (dBBridgeSynonymStatesList == null && dBBridgeSynonymStatesList == undefined) {
      console.log('Insert into an array.');
      if (this.bridgeSynonymStatesList.length > 0) {
        let isExistsState = this.bridgeSynonymStatesList.find(a => a.StateId == items.StateId && a.SynonymId == this.SelectedSynonymId && a.DBTransactionType === 1);

        if (isExistsState === undefined || isExistsState === null) {
          this.bridgeSynonymStatesList.push({ BridgeSynonymStatesId: 0, SynonymId: this.SelectedSynonymId, StateId: items.StateId, DBTransactionType: 1 });
        }
      } else {
        this.bridgeSynonymStatesList.push({ BridgeSynonymStatesId: 0, SynonymId: this.SelectedSynonymId, StateId: items.StateId, DBTransactionType: 1 });
      }
    }
    this.viewAllStates = true;
  }

  private addIndustry(item: any) {
    let dBBridgeSynonymIndustryList;

    if (this.synonymBridges.BridgeSynonymIndustryList.length > 0) {
      dBBridgeSynonymIndustryList = this.synonymBridges.BridgeSynonymIndustryList.find(a => a.IndustryId == item.IndustryID);
    }
    if (this.bridgeSynonymIndustryList === null) {
      this.bridgeSynonymIndustryList = [];
    }
    if (dBBridgeSynonymIndustryList !== undefined) {
      let tempIndustry = this.bridgeSynonymIndustryList.findIndex(a => a.IndustryId == item.IndustryID);
      if (tempIndustry !== -1 && tempIndustry != null && tempIndustry !== undefined) {
        this.bridgeSynonymIndustryList.splice(tempIndustry, 1);
      }
    }
    if (dBBridgeSynonymIndustryList == null && dBBridgeSynonymIndustryList == undefined) {
      console.log('Insert into an array.');
      if (this.bridgeSynonymIndustryList.length > 0) {
        let isExistsIndustry = this.bridgeSynonymIndustryList.find(a => a.IndustryId == item.IndustryID && a.SynonymId == this.SelectedSynonymId && a.DBTransactionType === 1);

        if (isExistsIndustry === undefined || isExistsIndustry === null) {
          this.bridgeSynonymIndustryList.push({ BridgeSynonymIndustryId: 0, SynonymId: this.SelectedSynonymId, IndustryId: item.IndustryID, DBTransactionType: 1 });
        }
      } else {
        this.bridgeSynonymIndustryList.push({ BridgeSynonymIndustryId: 0, SynonymId: this.SelectedSynonymId, IndustryId: item.IndustryID, DBTransactionType: 1 });
      }
    }
    this.viewAllIndustries = true;
  }

  private addContractVehicle(item: any) {
    let dBBridgeSynonymContractVehicleList;
    if (this.synonymBridges.BridgeSynonymContractVehicleList.length > 0) {
      dBBridgeSynonymContractVehicleList = this.synonymBridges.BridgeSynonymContractVehicleList.find(a => a.ContractVehicleId == item.ContractVehicleId);
    }
    if (this.bridgeSynonymContractVehicleList === null) {
      this.bridgeSynonymContractVehicleList = [];
    }
    if (dBBridgeSynonymContractVehicleList !== undefined) {
      let tempContractVehicle = this.bridgeSynonymContractVehicleList.findIndex(a => a.ContractVehicleId == item.ContractVehicleId);
      if (tempContractVehicle !== -1 && tempContractVehicle != null && tempContractVehicle !== undefined) {
        this.bridgeSynonymContractVehicleList.splice(tempContractVehicle, 1);
      }
    }
    if (dBBridgeSynonymContractVehicleList == null && dBBridgeSynonymContractVehicleList == undefined) {
      if (this.bridgeSynonymContractVehicleList.length > 0) {
        let isExistsContractVehicle = this.bridgeSynonymContractVehicleList.find(a => a.ContractVehicleId == item.ContractVehicleId && a.SynonymId == this.SelectedSynonymId && a.DBTransactionType === 1);

        if (isExistsContractVehicle === undefined || isExistsContractVehicle === null) {
          this.bridgeSynonymContractVehicleList.push({ BridgeSynonymContractVehicleId: 0, SynonymId: this.SelectedSynonymId, ContractVehicleId: item.ContractVehicleId, DBTransactionType: 1 });
        }
      } else {
        console.log('Insert into an array.');
        this.bridgeSynonymContractVehicleList.push({ BridgeSynonymContractVehicleId: 0, SynonymId: this.SelectedSynonymId, ContractVehicleId: item.ContractVehicleId, DBTransactionType: 1 });

      }
    }
    this.viewAllVehicles = true;
  }
  private addOpportunityType(item: any) {
    if (this.bridgeSynonymOpportunityTypeList === null) {
      this.bridgeSynonymOpportunityTypeList = [];
    }
    let dBBridgeSynonymOpportunityTypeItem;
    if (this.synonymBridges.BridgeSynonymOpportunityTypeList.length > 0) {
      dBBridgeSynonymOpportunityTypeItem = this.synonymBridges.BridgeSynonymOpportunityTypeList.find(a => a.OpportunityTypeId == item);
    }

    if (dBBridgeSynonymOpportunityTypeItem !== undefined) {
      let tempOpportunityType = this.bridgeSynonymOpportunityTypeList.findIndex(a => a.OpportunityTypeId == item);
      if (tempOpportunityType !== -1 && tempOpportunityType != null && tempOpportunityType !== undefined) {
        this.bridgeSynonymOpportunityTypeList.splice(tempOpportunityType, 1);
      }
    }
    if (dBBridgeSynonymOpportunityTypeItem == null && dBBridgeSynonymOpportunityTypeItem == undefined) {
      console.log('Insert into an array.');
      this.bridgeSynonymOpportunityTypeList.push({ BridgeSynonymOpportunityTypeId: 0, SynonymId: this.SelectedSynonymId, OpportunityTypeId: item, DBTransactionType: 1 });
    }
  }
  onItemDeSelect(items: any) {
    this.disAbleSaveButton = false;
    this.isModelUpdated = true;
    if (this.synonymBridges === null) {
      this.bridgeSynonymArrayInitialization();
    }
    if (items.StateId > 0) {
      this.bridgeSynonymStatesList = this.campaignLookupDataService.deleteState(items, this.synonymBridges, this.bridgeSynonymStatesList);

      if (this.selectedStateItems.length === 0 || this.synonymBridges.BridgeSynonymStatesList.length === this.bridgeSynonymStatesList.length) {
        this.viewAllStates = false;
      }
    } else if (items.AgencyID > 0) {
      this.bridgeSynonymAgencyList = this.campaignLookupDataService.deleteAgency(items, this.synonymBridges, this.bridgeSynonymAgencyList);
      if (this.selectedAgencyItems.length === 0 || this.synonymBridges.BridgeSynonymAgencyList.length === this.bridgeSynonymAgencyList.length) {
        this.viewAllAgencies = false;
      }
    }
    else if (items.IndustryID > 0) {
      this.bridgeSynonymIndustryList = this.campaignLookupDataService.deleteIndustry(items, this.synonymBridges, this.bridgeSynonymIndustryList);
      if (this.selectedIndustryItems.length === 0 || this.synonymBridges.BridgeSynonymIndustryList.length === this.bridgeSynonymIndustryList.length) {
        this.viewAllIndustries = false;
      }
    }
    else if (items.ContractVehicleId > 0) {
      this.bridgeSynonymContractVehicleList = this.campaignLookupDataService.deleteContractVehicle(items, this.synonymBridges, this.bridgeSynonymContractVehicleList);
      if (this.selectedContractVehicleItems.length === 0 || this.synonymBridges.BridgeSynonymContractVehicleList.length === this.bridgeSynonymContractVehicleList.length) {
        this.viewAllVehicles = false;
      }
    }
  }

  onSelectAll(items: any, parm: string) {
    // console.log(items);
    debugger;
    this.disAbleSaveButton = false;
    this.isModelUpdated = true;
    if (this.synonymBridges === null) {
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
            this.bridgeSynonymStatesList = this.campaignLookupDataService.deleteState(value, this.synonymBridges, this.bridgeSynonymStatesList);
            // this.deleteExistingStates();
          }
          this.addStates(value);
        } else if (value.AgencyID > 0) {
          if (this.selectedAgencyItems.length > 0) {
            this.bridgeSynonymAgencyList = this.campaignLookupDataService.deleteAgency(value, this.synonymBridges, this.bridgeSynonymAgencyList);
            // this.deleteExistingAgencies();
          }
          this.addAgency(value);
        }
        else if (value.IndustryID > 0) {
          if (this.selectedIndustryItems.length > 0) {
            this.bridgeSynonymIndustryList = this.campaignLookupDataService.deleteIndustry(value, this.synonymBridges, this.bridgeSynonymIndustryList);
            //this.deleteExistingIndustries();
          }
          this.addIndustry(value);
        }
        else if (value.ContractVehicleId > 0) {
          if (this.selectedContractVehicleItems.length > 0) {
            this.bridgeSynonymContractVehicleList = this.campaignLookupDataService.deleteContractVehicle(value, this.synonymBridges, this.bridgeSynonymContractVehicleList);
            // this.deleteExistingContractVehicle();
          }
          this.addContractVehicle(value);
        }
      });
    }
  }


  private deleteExistingContractVehicle() {
    this.selectedContractVehicleItems.forEach((contract, index) => {
      this.bridgeSynonymContractVehicleList = this.campaignLookupDataService.deleteContractVehicle(contract, this.synonymBridges, this.bridgeSynonymContractVehicleList);
      // let tempContract = this.selectedContractVehicleItems.findIndex(a => a.ContractVehicleId === contract.ContractVehicleId);
      // if (tempContract !== -1 && tempContract != null && tempContract !== undefined) {
      //   this.selectedContractVehicleItems.splice(tempContract, 1);
      // }
    });
  }

  private deleteExistingIndustries() {
    this.selectedIndustryItems.forEach((industry, index) => {
      this.bridgeSynonymIndustryList = this.campaignLookupDataService.deleteIndustry(industry, this.synonymBridges, this.bridgeSynonymIndustryList);
      // let tempIndustry = this.selectedIndustryItems.findIndex(a => a.IndustryID === industry.IndustryID);
      // if (tempIndustry !== -1 && tempIndustry != null && tempIndustry !== undefined) {
      //   this.selectedIndustryItems.splice(tempIndustry, 1);
      // }
    });
  }

  private deleteExistingAgencies() {
    this.selectedAgencyItems.forEach((agency, index) => {
      this.bridgeSynonymAgencyList = this.campaignLookupDataService.deleteAgency(agency, this.synonymBridges, this.bridgeSynonymAgencyList);
      // let tempAgency = this.selectedAgencyItems.findIndex(a => a.AgencyID === agency.AgencyID);
      // if (tempAgency !== -1 && tempAgency != null && tempAgency !== undefined) {
      //   this.selectedAgencyItems.splice(tempAgency, 1);
      // }
    });
  }

  private deleteExistingStates() {
    this.selectedStateItems.forEach((state, index) => {
      this.bridgeSynonymStatesList = this.campaignLookupDataService.deleteState(state, this.synonymBridges, this.bridgeSynonymStatesList);
    });
  }

  onDeSelectAll(items: any) {
    this.disAbleSaveButton = false;
    this.isModelUpdated = true;
    if (this.synonymBridges === null) {
      this.bridgeSynonymArrayInitialization();
    }
    items.forEach((value, key) => {
      if (value.StateId > 0) {
        this.bridgeSynonymStatesList = this.campaignLookupDataService.deleteState(value, this.synonymBridges, this.bridgeSynonymStatesList);
        let tempState = this.selectedStateItems.findIndex(a => a.StateId === value.StateId);
        if (tempState !== -1 && tempState != null && tempState !== undefined) {
          this.selectedStateItems.splice(tempState, 1);
        }

        if (this.selectedStateItems.length === 0 || this.synonymBridges.BridgeSynonymStatesList.length === this.bridgeSynonymStatesList.length) {
          this.viewAllStates = false;
        }
      } else if (value.AgencyID > 0) {
        this.bridgeSynonymAgencyList = this.campaignLookupDataService.deleteAgency(value, this.synonymBridges, this.bridgeSynonymAgencyList);

        let tempAgency = this.selectedAgencyItems.findIndex(a => a.AgencyID === value.AgencyID);
        if (tempAgency !== -1 && tempAgency != null && tempAgency !== undefined) {
          this.selectedAgencyItems.splice(tempAgency, 1);
        }
        if (this.selectedAgencyItems.length === 0 || this.synonymBridges.BridgeSynonymAgencyList.length === this.bridgeSynonymAgencyList.length) {
          this.viewAllAgencies = false;
        }
      }
      else if (value.IndustryID > 0) {
        this.bridgeSynonymIndustryList = this.campaignLookupDataService.deleteIndustry(value, this.synonymBridges, this.bridgeSynonymIndustryList);

        let tempIndustry = this.selectedIndustryItems.findIndex(a => a.IndustryID === value.IndustryID);
        if (tempIndustry !== -1 && tempIndustry != null && tempIndustry !== undefined) {
          this.selectedIndustryItems.splice(tempIndustry, 1);
        }
        if (this.selectedIndustryItems.length === 0 || this.synonymBridges.BridgeSynonymIndustryList.length === this.bridgeSynonymIndustryList.length) {
          this.viewAllIndustries = false;
        }
      }
      else if (value.ContractVehicleId > 0) {
        debugger;
        this.bridgeSynonymContractVehicleList = this.campaignLookupDataService.deleteContractVehicle(value, this.synonymBridges, this.bridgeSynonymContractVehicleList);

        let tempContract = this.selectedContractVehicleItems.findIndex(a => a.ContractVehicleId === value.ContractVehicleId);
        if (tempContract !== -1 && tempContract != null && tempContract !== undefined) {
          this.selectedContractVehicleItems.splice(tempContract, 1);
        }

        if (this.selectedContractVehicleItems.length === 0 || this.synonymBridges.BridgeSynonymContractVehicleList.length === this.bridgeSynonymContractVehicleList.length) {
          this.viewAllVehicles = false;
        }
      }
    });
    //console.log(items);
  }
  onChange(OpportunityTypeCode: Number, $event) {
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
    if (this.synonymBridges === null) {
      this.bridgeSynonymArrayInitialization();
    }
    if ($event.checked) {
      this.addOpportunityType(OpportunityTypeCode);
    } else {
      this.bridgeSynonymOpportunityTypeList = this.campaignLookupDataService.deleteOpportunityType(OpportunityTypeCode, this.synonymBridges, this.bridgeSynonymOpportunityTypeList);
    }
  }
  public viewAll(selectedList, selectedDropDownName) {
    this.compareArraysBeforeAndAfterPopUpClose = selectedList.length;
    let data = { selectedList: selectedList, selectedDDLName: selectedDropDownName, synonymBridges: this.synonymBridges, bridgeSynonymStatesList: this.bridgeSynonymStatesList, bridgeSynonymAgencyList: this.bridgeSynonymAgencyList, bridgeSynonymIndustryList: this.bridgeSynonymIndustryList, bridgeSynonymContractVehicleList: this.bridgeSynonymContractVehicleList, bridgeSynonymOpportunityTypeList: this.bridgeSynonymOpportunityTypeList };

    let matDialogRef = this.dialogService.openDialog(
      {
        width: '81%',
        data: data,
        dailogComponent: ViewAllSynonymListsComponent
      });
    matDialogRef.afterClosed().subscribe(res => {
      this.responseAfterPopUpClose = [];
      debugger;
      if (res !== undefined && res !== null) {  
      if (res.name === "States") {

        this.responseAfterPopUpClose = res.stateArray;

        // if(this.responseAfterPopUpClose.length !== this.compareArraysBeforeAndAfterPopUpClose){ 
        //   this.bridgeSynonymStatesList = res.bridgeSynonymStatesList; 
        // } 
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

        // if(this.responseAfterPopUpClose.length !== this.compareArraysBeforeAndAfterPopUpClose){
        //   this.bridgeSynonymAgencyList = res.bridgeSynonymAgencyList; 
        // } 
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

        // if(this.responseAfterPopUpClose.length !== this.compareArraysBeforeAndAfterPopUpClose){ 
        //   this.bridgeSynonymIndustryList = res.bridgeSynonymIndustryList; 
        // } 
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
        // if(this.responseAfterPopUpClose.length !== this.compareArraysBeforeAndAfterPopUpClose){ 
        //   this.bridgeSynonymContractVehicleList = res.bridgeSynonymContractVehicleList;
        // } 
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
