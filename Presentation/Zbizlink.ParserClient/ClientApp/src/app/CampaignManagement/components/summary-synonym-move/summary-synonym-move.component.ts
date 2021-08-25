import { Component, OnInit } from '@angular/core';
import { escapeSelector } from 'jquery';
import { WebResponse } from 'src/app/shared/models/WebResponse';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ProgressSpinnerService } from 'src/app/shared/services/progress-spinner.service';
import { SummarySynonym } from '../../models/summary-synonym';
import { SummaryFieldAndSynonymRes } from '../../models/Summary/summary-field-and-synonym-res';
import { SummaryFieldSynonym } from '../../models/Summary/summary-field-synonym';
import { CampaignLookupDataService } from '../../services/campaign-lookup-data.service';
import { SummarySynonymMoveService } from '../../services/summary-synonym-move.service';


@Component({
  selector: 'app-summary-synonym-move',
  templateUrl: './summary-synonym-move.component.html',
  styleUrls: ['./summary-synonym-move.component.css']
})
export class SummarySynonymMoveComponent implements OnInit {

  movedSummaryFieldSynonym: SummaryFieldSynonym[] = [];

  // this collection will be user after save to remove htm control
  //attached sysnonym list.
  deletedSummaryFieldAndSynonymLeft: Array<SummaryFieldAndSynonymRes> = [];

  selectedOptionsLeft: string[] = [];
  selectedOptionsRight: string[] = [];

  selectedValueDropDownLeft: SummaryFieldAndSynonymRes;
  selectedValueDropDownRight: SummaryFieldAndSynonymRes;

  public summaryFieldAndSynonymRes: Array<SummaryFieldAndSynonymRes>;

  public summaryFieldAndSynonymLeft: Array<SummaryFieldAndSynonymRes> = [];
  public summaryFieldSynonymLeft: Array<SummaryFieldSynonym>;
  public summaryFieldAndSynonymRight: Array<SummaryFieldAndSynonymRes> = [];
  public summaryFieldSynonymRight: Array<SummaryFieldSynonym>;


  constructor(private summarySynonymMoveService: SummarySynonymMoveService,
    private campaignLookupDataService: CampaignLookupDataService,
    private notification: NotificationService,
    public progressSpinnerService: ProgressSpinnerService) { }

  ngOnInit(): void {
   this.progressSpinnerService.isLoading =true;
    this.GetSummaryFieldAndSynonym();
  }

  GetSummaryFieldAndSynonym() {
    this.campaignLookupDataService.GetSummaryFieldAndSynonym().subscribe(
      res => this.SummaryFieldAndSynonymResponse(res),
      err => this.UploadError(err)
    );
  }

  SummaryFieldAndSynonymResponse(webResponse: WebResponse<SummaryFieldAndSynonymRes[]>) {

    if (webResponse.code == '1') {
      this.progressSpinnerService.isLoading = false;
      this.summaryFieldAndSynonymRes = webResponse.response;

      if (this.summaryFieldAndSynonymRes !== undefined && this.summaryFieldAndSynonymRes !== null && this.summaryFieldAndSynonymRes.length > 0) {

        this.PopulateSummaryFieldAndSynonymLeft();
        this.PopulateSummaryFieldAndSynonymRight();
      }
    } else {
      this.progressSpinnerService.isLoading = false;
    }
  }

  onSelectionChangeSummaryFieldLeft(selectedSummaryFieldId: any) {

    if (selectedSummaryFieldId !== undefined && selectedSummaryFieldId !== null && selectedSummaryFieldId > 0) {
      this.PopulateSummaryFieldDropdownLeft(selectedSummaryFieldId);

    }

  }

  onSelectionChangeSummaryFieldRight(selectedSummaryFieldId: any) {

    if (selectedSummaryFieldId !== undefined && selectedSummaryFieldId !== null && selectedSummaryFieldId > 0) {
      this.PopulateSummaryFieldDropdownRight(selectedSummaryFieldId);
    }

  }

  PopulateSummaryFieldDropdownLeft(selectedSummaryFieldId: any) {
    let SummaryFieldAndSynonym: SummaryFieldAndSynonymRes = this.summaryFieldAndSynonymLeft.find(v => v.SummaryFieldId == selectedSummaryFieldId);
    this.selectedValueDropDownLeft = SummaryFieldAndSynonym;
    if (SummaryFieldAndSynonym !== undefined && SummaryFieldAndSynonym !== null) {
      this.summaryFieldSynonymLeft = SummaryFieldAndSynonym.SummarySynonym;

    }
  }

  PopulateSummaryFieldAndSynonymLeft() {
    this.summaryFieldAndSynonymRes.forEach((element) => {

      let summaryFieldAndSynonym: SummaryFieldAndSynonymRes = new SummaryFieldAndSynonymRes();
      summaryFieldAndSynonym.SummaryFieldId = element.SummaryFieldId;
      summaryFieldAndSynonym.FieldName = element.FieldName;
      summaryFieldAndSynonym.SummarySynonym = [];


      element.SummarySynonym.forEach((element) => {
        let summaryFieldSynonym: SummaryFieldSynonym = new SummaryFieldSynonym();
        summaryFieldSynonym.SummarySynonymId = element.SummarySynonymId;
        summaryFieldSynonym.Synonym = element.Synonym;
        summaryFieldAndSynonym.SummarySynonym.push(summaryFieldSynonym);
      });

      this.summaryFieldAndSynonymLeft.push(summaryFieldAndSynonym);
      this.summaryFieldAndSynonymLeft = this.summaryFieldAndSynonymLeft.sort((a, b) => (a.FieldName < b.FieldName ? -1 : 1));
    });

    if (this.summaryFieldAndSynonymLeft !== undefined && this.summaryFieldAndSynonymLeft !== null && this.summaryFieldAndSynonymLeft.length > 0) {
      let SummaryFieldAndSynonym: SummaryFieldAndSynonymRes = this.summaryFieldAndSynonymLeft[0];
      if (SummaryFieldAndSynonym !== undefined && SummaryFieldAndSynonym !== null)

        this.PopulateSummaryFieldDropdownLeft(SummaryFieldAndSynonym.SummaryFieldId);

    }


  }

  PopulateSummaryFieldAndSynonymRight() {

    this.summaryFieldAndSynonymRes.forEach((element) => {

      let summaryFieldAndSynonym: SummaryFieldAndSynonymRes = new SummaryFieldAndSynonymRes();
      summaryFieldAndSynonym.SummaryFieldId = element.SummaryFieldId;
      summaryFieldAndSynonym.FieldName = element.FieldName;
      summaryFieldAndSynonym.SummarySynonym = [];


      element.SummarySynonym.forEach((element) => {
        let summaryFieldSynonym: SummaryFieldSynonym = new SummaryFieldSynonym();
        summaryFieldSynonym.SummarySynonymId = element.SummarySynonymId;
        summaryFieldSynonym.Synonym = element.Synonym;
        summaryFieldAndSynonym.SummarySynonym.push(summaryFieldSynonym);
      });

      this.summaryFieldAndSynonymRight.push(summaryFieldAndSynonym);
      this.summaryFieldAndSynonymRight = this.summaryFieldAndSynonymRight.sort((a, b) => (a.FieldName < b.FieldName ? -1 : 1));
    });

    if (this.summaryFieldAndSynonymLeft.length > 0) {
      let SummaryFieldAndSynonym: SummaryFieldAndSynonymRes = this.summaryFieldAndSynonymLeft[0];
      if (SummaryFieldAndSynonym !== undefined && SummaryFieldAndSynonym !== null)

        this.PopulateSummaryFieldDropdownRight(SummaryFieldAndSynonym.SummaryFieldId);
    }
  }

  PopulateSummaryFieldDropdownRight(selectedSummaryFieldId: any) {
    let SummaryFieldAndSynonym: SummaryFieldAndSynonymRes = this.summaryFieldAndSynonymRight.find(v => v.SummaryFieldId == selectedSummaryFieldId);
    this.selectedValueDropDownRight = SummaryFieldAndSynonym;
    if (SummaryFieldAndSynonym !== undefined && SummaryFieldAndSynonym !== null) {
      this.summaryFieldSynonymRight = SummaryFieldAndSynonym.SummarySynonym;

    }
  }



  UploadError(parm: any): void {

    this.progressSpinnerService.isLoading = false;

    this.notification.error(parm);
  }

  onMoveLeftToRight() {

    if (this.selectedOptionsLeft !== undefined && this.selectedOptionsLeft !== null && this.selectedOptionsLeft.length == 0) {

      this.notification.warning('No item selected');

    }
    else if (this.selectedValueDropDownLeft.SummaryFieldId === this.selectedValueDropDownRight.SummaryFieldId) {
      this.notification.warning('Both categories are same, categories must not be same');

    } else {
      this.SelectedSynonymMoveLeftToRight();
    }
  }

  onMoveRightToLeft() {

    if (this.selectedOptionsRight !== undefined && this.selectedOptionsRight !== null && this.selectedOptionsRight.length == 0) {
      this.notification.warning('No item selected');
    } else if (this.selectedValueDropDownLeft.SummaryFieldId === this.selectedValueDropDownRight.SummaryFieldId) {
      this.notification.warning('Both categories are same, categories must not be same');
    }
    else {
      this.SelectedSynonymMoveRightToLeft();
    }
  }

  SelectedSynonymMoveLeftToRight() {


    let DeleteSummaryFieldSynonymList: Array<SummaryFieldSynonym> = [];

    this.selectedOptionsLeft.forEach((element) => {

      let summaryFieldSynonym: SummaryFieldSynonym = this.summaryFieldSynonymLeft.find(s => s.SummarySynonymId == parseInt(element));

      DeleteSummaryFieldSynonymList.push(summaryFieldSynonym);
    });

    debugger;
     DeleteSummaryFieldSynonymList.forEach((element) => {
      let index = this.summaryFieldSynonymLeft.findIndex(s => s.SummarySynonymId == element.SummarySynonymId);

      this.summaryFieldSynonymLeft.splice(index, 1);

      let summaryFieldAndSynonymRight =  this.summaryFieldAndSynonymRight.find(s => s.SummaryFieldId === this.selectedValueDropDownLeft.SummaryFieldId);
      let rightListIndex = summaryFieldAndSynonymRight.SummarySynonym.findIndex(s => s.SummarySynonymId == element.SummarySynonymId);
      summaryFieldAndSynonymRight.SummarySynonym.splice(rightListIndex, 1);

      let summaryFieldAndSynonymLeft =  this.summaryFieldAndSynonymLeft.find(s => s.SummaryFieldId === this.selectedValueDropDownRight.SummaryFieldId);
      summaryFieldAndSynonymLeft.SummarySynonym.push(element);

      element.SummaryFieldId = this.selectedValueDropDownRight.SummaryFieldId;
      this.movedSummaryFieldSynonym.push(element);
      this.summaryFieldSynonymRight.push(element);

     

      this.movedSummaryFieldSynonym
      this.summaryFieldSynonymRight = this.summaryFieldSynonymRight.sort((a, b) => (a.Synonym < b.Synonym ? -1 : 1));
    });


  }



  SelectedSynonymMoveRightToLeft() {


    let DeleteSummaryFieldSynonymList: Array<SummaryFieldSynonym> = [];

    this.selectedOptionsRight.forEach((element) => {

      let summaryFieldSynonym: SummaryFieldSynonym = this.summaryFieldSynonymRight.find(s => s.SummarySynonymId == parseInt(element));

      DeleteSummaryFieldSynonymList.push(summaryFieldSynonym);
    });

debugger;
      DeleteSummaryFieldSynonymList.forEach((element) => {
      let index = this.summaryFieldSynonymRight.findIndex(s => s.SummarySynonymId == element.SummarySynonymId);

      this.summaryFieldSynonymRight.splice(index, 1);

      let summaryFieldAndSynonymLeft =  this.summaryFieldAndSynonymLeft.find(s => s.SummaryFieldId === this.selectedValueDropDownRight.SummaryFieldId);
      let leftListIndex = summaryFieldAndSynonymLeft.SummarySynonym.findIndex(s => s.SummarySynonymId == element.SummarySynonymId);
      summaryFieldAndSynonymLeft.SummarySynonym.splice(leftListIndex, 1);
      
      let summaryFieldAndSynonymRight =  this.summaryFieldAndSynonymRight.find(s => s.SummaryFieldId === this.selectedValueDropDownLeft.SummaryFieldId);
      summaryFieldAndSynonymRight.SummarySynonym.push(element);

      element.SummaryFieldId = this.selectedValueDropDownLeft.SummaryFieldId;
      this.movedSummaryFieldSynonym.push(element);
      this.summaryFieldSynonymLeft.push(element);

      


      this.summaryFieldSynonymLeft = this.summaryFieldSynonymLeft.sort((a, b) => (a.Synonym < b.Synonym ? -1 : 1));
    });
  }

  save() {
    debugger;
    if (this.movedSummaryFieldSynonym !== undefined && this.movedSummaryFieldSynonym !== null && this.movedSummaryFieldSynonym.length > 0) {
      this.progressSpinnerService.isLoading = true;
      this.campaignLookupDataService.movedSummaryFieldSynonymEdit(this.movedSummaryFieldSynonym).subscribe(
        res => this.movedSummaryFieldSynonymEditResponse(res),
        err => this.UploadError(err)
      );
    }


  }

  movedSummaryFieldSynonymEditResponse(webResponse: WebResponse<string>) {
    debugger;
    if (webResponse.code.toString() === '1') {
      this.progressSpinnerService.isLoading = false;
      this.notification.success('Record successfully saved');
     
      
    }else{
      this.progressSpinnerService.isLoading = false;
      this.notification.error('Record could not be saved');
    }
    
  }
  // onNgModelChange(event){
  //   console.log('on ng model change', event);
  //   let test = this.selectedOptions;
  // }


  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

}
