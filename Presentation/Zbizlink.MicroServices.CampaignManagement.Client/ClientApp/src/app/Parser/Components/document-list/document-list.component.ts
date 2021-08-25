import { Component, OnInit, ViewChild, Inject, Optional, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import {WebResponse} from '../../../shared/models/WebResponse'


import { DocumentParserFormComponent } from '../document-parser-form/document-parser-form.component'

import { NotificationService } from 'src/app/shared/services/notification.service';

import { Router, Data } from '@angular/router';

import { RFPManipulationWebApiService } from 'src/app/parser/services/rfpmanipulation-web-api.service';
import { OpportunityName } from 'src/app/parser/models/OpportunityName';



export class PendingDocsList {
  opportunityId: number;
  OpportunityName: string;
  DueDate: Date;
  RemainingDays: number;
  Agency: string;

}

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {



  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  oppertunityList: MatTableDataSource<any>;
  dataList: MatTableDataSource<any>;
  columnsToDisplay: string[] = ['OpportunityName', 'DueDate', 'RemainingDays', 'Agency', 'action'];
  searchKey: string;
  popUpHeaderFlag: boolean;
  publishFlag: boolean = true;
  DocumentParserFormComponent: DocumentParserFormComponent;

  constructor(private router: Router,
    private notification: NotificationService, private RFPManipulationWebApiService: RFPManipulationWebApiService,
    @Optional()
    public dialogRef: MatDialogRef<any>,
    @Optional()
    @Inject(MAT_DIALOG_DATA) data) {
    if (data) {
      this.popUpHeaderFlag = data.headerFlag;
      this.DocumentParserFormComponent = data.opportunityComponent;
      this.publishFlag = data.publish
    }
  }
  ngOnInit() {
    this.getCompanyOppertunityList();
  }

  closeDialogOpp(): void {
    this.dialogRef.close();
  }

  remainingDays(value: string) {

    var todayDate = new Date();
    var diff = null;
    var diffDays = null;

    if (value != "") {
      if (new Date(value) > todayDate) {
        diff = Math.abs(new Date(value).getTime() - todayDate.getTime());
        diffDays = Math.ceil(diff / (1000 * 3600 * 24));
        return diffDays;
      }
      else {
        diff = Math.abs(new Date(value).getTime() - todayDate.getTime());
        diffDays = Math.ceil(diff / (1000 * 3600 * 24) - 365);
        return "-" + diffDays;
      }
    }
    else {
      return 0;
    }
  }
  actionHandler(id: number, actionName: string) {
  
    alert("Id:" + id + " , Action Name:" + actionName);
  }
  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }
  applyFilter() {
    this.oppertunityList.filter = this.searchKey.trim().toLowerCase();
  }
  getCompanyOppertunityList() {
   
    this.RFPManipulationWebApiService.getCompanyOppertunityList(this.publishFlag, localStorage.getItem('compId')).subscribe(
      (response) => {
       this.CompanyOppertunityListReponse(response);
        
      },
      (error: any) => {
        console.log(error);
        this.notification.error(error);
      }
    )
  }

  // ExtractSummaryField(response: any): Array<PendingDocsList> {
  //   var docList: Array<PendingDocsList> = [];
  //   for (var dList in response.documentNameList) {
  //     var pp = new PendingDocsList();

  //     if (response.documentNameList[dList].Rfpsummary !== null && response.documentNameList[dList].Rfpsummary.length > 0) {

  //       pp.DueDate = Object.keys(response.documentNameList[dList].Rfpsummary).length > 0 ? response.documentNameList[dList].Rfpsummary[0].FieldValue : null;
  //       if (Object.keys(response.documentNameList[dList].Rfpsummary).length === 0) {
  //         pp.RemainingDays = 0;
  //       }
  //       else {
  //         pp.RemainingDays = this.remainingDays(response.documentNameList[dList].Rfpsummary[0].FieldValue) > -1 ? this.remainingDays(response.documentNameList[dList].Rfpsummary[0].FieldValue) : 0;
  //       }
  //       pp.Agency = typeof response.documentNameList[dList].Rfpsummary[1].FieldValue === 'undefined' ? null : response.documentNameList[dList].Rfpsummary[1].FieldValue;
  //     }
  //     pp.DocName = response.documentNameList[dList].DocName;
  //     pp.RfpdocumentId = typeof response.documentNameList[dList].RfpdocumentId === 'undefined' ? null : response.documentNameList[dList].RfpdocumentId;
  //     docList.push(pp);
  //   }

  //   return docList;
  // }

  CompanyOppertunityListReponse(webResponse: WebResponse<Array<OpportunityName>>) {

    if (webResponse.code == "1") {
      var docList: Array<PendingDocsList> = [];
      docList = this.ExtractSummaryField(webResponse.response);
      docList.sort(d => d.RemainingDays)
      this.oppertunityList = new MatTableDataSource(docList);
      this.oppertunityList.sort = this.sort;
    
      this.oppertunityList.paginator = this.paginator;

    }
  }
  ExtractSummaryField(opportunityNameList: Array<OpportunityName>): Array<PendingDocsList> {

    //let opportunityNameList: Array<OpportunityName> = companyOppertunityListReponse.opportunityNameList;

    var docList: Array<PendingDocsList> = [];
    //for (var dList in response.documentNameList) {
    for (var dList in opportunityNameList) {
      var pp = new PendingDocsList();

      if (opportunityNameList[dList].ClosingDateAndTime !== null && opportunityNameList[dList].ClosingDateAndTime.length > 0) {

        pp.DueDate = opportunityNameList[dList].ClosingDateAndTime.length > 0 ? opportunityNameList[dList].ClosingDateAndTime : null;
        if (opportunityNameList[dList].ClosingDateAndTime.length === 0) {
          pp.RemainingDays = 0;
        }
        else {
          pp.RemainingDays = this.remainingDays(opportunityNameList[dList].ClosingDateAndTime) > -1 ? this.remainingDays(opportunityNameList[dList].ClosingDateAndTime) : 0;
        }
        pp.Agency = typeof opportunityNameList[dList].RequestingAgency === 'undefined' ? null : opportunityNameList[dList].RequestingAgency;
      }
      pp.OpportunityName = opportunityNameList[dList].OpportunityName;
      pp.opportunityId = typeof opportunityNameList[dList].OpportunityId === 'undefined' ? null : opportunityNameList[dList].OpportunityId;
      docList.push(pp);
    }

    return docList;
  }

  loadOppertunity(opportunityId: any) {
   
    console.log('>>>>>loadOppertunity<<<<<');
    this.dialogRef.close(opportunityId);

    //this.DocumentParserFormComponent.getSavedDocInfo(null, null, RfpdocumentId);
    //const queryParams = { 'category': 'summary' };
    //this.router.navigate(['/'], { queryParams })
  }


}
