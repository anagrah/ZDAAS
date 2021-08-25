import { Injectable } from '@angular/core';
import { SummaryField } from '../models/SummaryField';

@Injectable({
  providedIn: 'root'
})
export class ValidateChangeInDataService {

  constructor() { }
  filteredOpportunityDataArray: Element[] = [];
  filteredDataArrayString: string = null;
  summaryInitStr: string;
  summaryArray: Array<SummaryField> = null;
  onContentBeforeSave() {
  }

  initData(filteredOpportunityDataArray: Element[]) {
    //this.filteredOpportunityDataArray =filteredOpportunityDataArray;
   
    let rfpDoc: string = '';
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
  isEqual(initialDataStr: string): boolean {

    var n = initialDataStr.localeCompare(this.filteredDataArrayString);
    switch (n) {
      case 0:         // 0 if the two strings are equal
        return true
      default:
        return false
    }
  }
  initDataSummary(summaryFieldArray: Array<SummaryField>, fieldTextStr: string) {

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

  isEqualSummary(initialDataStr: string, summarArray: Array<SummaryField>) {
    debugger;
    if (!this.CheckSummarySequenceEqual(summarArray)) {
      return false;
    }
    var n = initialDataStr.localeCompare(this.summaryInitStr);
    switch (n) {
      case 0:         // 0 if the two strings are equal
        return true
      default:
        return false
    }
  }

  private CheckSummarySequenceEqual(newSummaryArray: Array<SummaryField>): boolean {

    let oldSummaryArrayLength: number = this.summaryArray.length;
    let newSummaryArrayLength: number = newSummaryArray.length;

    if (oldSummaryArrayLength != newSummaryArrayLength) {
      return false
    } else if (!this.OldNewSummarySequenceSame(newSummaryArray)) {
      return false;
    }
    return true;
  }

  private OldNewSummarySequenceSame(newSummaryArray: Array<SummaryField>): boolean {

    let newSummaryArrayLength: number = newSummaryArray.length;

    for (let index = 0; index < newSummaryArrayLength; index++) {
      let newSummaryElement = newSummaryArray[index];
      let oldSummaryElement = this.summaryArray[index];

      if (newSummaryElement.FieldDisplayName != oldSummaryElement.FieldDisplayName) {
        return false;
      }
      
    }
    return true;
  }
}
