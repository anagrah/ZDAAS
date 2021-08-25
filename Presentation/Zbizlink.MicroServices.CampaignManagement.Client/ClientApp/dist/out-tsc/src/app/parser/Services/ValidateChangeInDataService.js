import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ValidateChangeInDataService = class ValidateChangeInDataService {
    constructor() {
        this.filteredOpportunityDataArray = [];
        this.filteredDataArrayString = null;
        this.summaryArray = null;
    }
    onContentBeforeSave() {
    }
    initData(filteredOpportunityDataArray) {
        //this.filteredOpportunityDataArray =filteredOpportunityDataArray;
        let rfpDoc = '';
        if (filteredOpportunityDataArray.length > 0) {
            for (let index = 0; index < filteredOpportunityDataArray.length; index++) {
                const element = filteredOpportunityDataArray[index];
                rfpDoc += element.outerHTML;
            }
            this.filteredDataArrayString = rfpDoc;
        }
        //console.log("filteredOpportunityDataArrayString");
        //console.log(this.filteredDataArrayString);
    }
    isEqual(initialDataStr) {
        var n = initialDataStr.localeCompare(this.filteredDataArrayString);
        switch (n) {
            case 0: // 0 if the two strings are equal
                return true;
            default:
                return false;
        }
    }
    initDataSummary(summaryFieldArray, fieldTextStr) {
        this.summaryArray = summaryFieldArray;
        if (summaryFieldArray && summaryFieldArray != null && summaryFieldArray.length > 0) {
            let fieldTextString = "";
            summaryFieldArray.forEach(x => {
                fieldTextString += x.FieldText;
            });
            this.summaryInitStr = fieldTextString;
        }
        else if (fieldTextStr) {
            this.summaryInitStr = fieldTextStr;
        }
    }
    isEqualSummary(initialDataStr, summarArray) {
        debugger;
        if (!this.CheckSummarySequenceEqual(summarArray)) {
            return false;
        }
        var n = initialDataStr.localeCompare(this.summaryInitStr);
        switch (n) {
            case 0: // 0 if the two strings are equal
                return true;
            default:
                return false;
        }
    }
    CheckSummarySequenceEqual(newSummaryArray) {
        let oldSummaryArrayLength = this.summaryArray.length;
        let newSummaryArrayLength = newSummaryArray.length;
        if (oldSummaryArrayLength != newSummaryArrayLength) {
            return false;
        }
        else if (!this.OldNewSummarySequenceSame(newSummaryArray)) {
            return false;
        }
        return true;
    }
    OldNewSummarySequenceSame(newSummaryArray) {
        let newSummaryArrayLength = newSummaryArray.length;
        for (let index = 0; index < newSummaryArrayLength; index++) {
            let newSummaryElement = newSummaryArray[index];
            let oldSummaryElement = this.summaryArray[index];
            if (newSummaryElement.FieldDisplayName != oldSummaryElement.FieldDisplayName) {
                return false;
            }
        }
        return true;
    }
};
ValidateChangeInDataService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ValidateChangeInDataService);
export { ValidateChangeInDataService };
//# sourceMappingURL=ValidateChangeInDataService.js.map