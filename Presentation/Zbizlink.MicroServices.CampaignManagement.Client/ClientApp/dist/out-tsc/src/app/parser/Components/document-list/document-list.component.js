import { __decorate, __param } from "tslib";
import { Component, ViewChild, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
export class PendingDocsList {
}
let DocumentListComponent = class DocumentListComponent {
    constructor(router, notification, RFPManipulationWebApiService, dialogRef, data) {
        this.router = router;
        this.notification = notification;
        this.RFPManipulationWebApiService = RFPManipulationWebApiService;
        this.dialogRef = dialogRef;
        this.columnsToDisplay = ['OpportunityName', 'DueDate', 'RemainingDays', 'Agency', 'action'];
        this.publishFlag = true;
        if (data) {
            this.popUpHeaderFlag = data.headerFlag;
            this.DocumentParserFormComponent = data.opportunityComponent;
            this.publishFlag = data.publish;
        }
    }
    ngOnInit() {
        this.getCompanyOppertunityList();
    }
    closeDialogOpp() {
        this.dialogRef.close();
    }
    remainingDays(value) {
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
    actionHandler(id, actionName) {
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
        this.RFPManipulationWebApiService.getCompanyOppertunityList(this.publishFlag, localStorage.getItem('compId')).subscribe((response) => {
            this.CompanyOppertunityListReponse(response);
        }, (error) => {
            console.log(error);
            this.notification.error(error);
        });
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
    CompanyOppertunityListReponse(webResponse) {
        if (webResponse.code == "1") {
            var docList = [];
            docList = this.ExtractSummaryField(webResponse.response);
            docList.sort(d => d.RemainingDays);
            this.oppertunityList = new MatTableDataSource(docList);
            this.oppertunityList.sort = this.sort;
            this.oppertunityList.paginator = this.paginator;
        }
    }
    ExtractSummaryField(opportunityNameList) {
        //let opportunityNameList: Array<OpportunityName> = companyOppertunityListReponse.opportunityNameList;
        var docList = [];
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
    loadOppertunity(opportunityId) {
        console.log('>>>>>loadOppertunity<<<<<');
        this.dialogRef.close(opportunityId);
        //this.DocumentParserFormComponent.getSavedDocInfo(null, null, RfpdocumentId);
        //const queryParams = { 'category': 'summary' };
        //this.router.navigate(['/'], { queryParams })
    }
};
__decorate([
    ViewChild(MatSort, { static: true })
], DocumentListComponent.prototype, "sort", void 0);
__decorate([
    ViewChild(MatPaginator, { static: true })
], DocumentListComponent.prototype, "paginator", void 0);
DocumentListComponent = __decorate([
    Component({
        selector: 'app-document-list',
        templateUrl: './document-list.component.html',
        styleUrls: ['./document-list.component.css']
    }),
    __param(3, Optional()),
    __param(4, Optional()),
    __param(4, Inject(MAT_DIALOG_DATA))
], DocumentListComponent);
export { DocumentListComponent };
//# sourceMappingURL=document-list.component.js.map