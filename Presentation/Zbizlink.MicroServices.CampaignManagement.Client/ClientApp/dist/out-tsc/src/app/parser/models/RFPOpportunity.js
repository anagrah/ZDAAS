import { CategoryData } from './CategoryData';
export class RFPOpportunity {
    constructor() {
        this._rfpFileList = [];
        this._catetoryDataList = new Array();
        this._catetoryDataListModified = new Array();
        this._fileType = "";
    }
    get CatetoryDataListModified() {
        return this._catetoryDataListModified;
    }
    get FileType() {
        return this._fileType;
    }
    set FileType(value) {
        this._fileType = value;
    }
    get CategoryNameList() {
        return this._categoryNameList;
    }
    set CategoryNameList(value) {
        this._categoryNameList = value;
    }
    get OpportunityId() {
        return this._opportunityId;
    }
    set OpportunityId(value) {
        this._opportunityId = value;
    }
    get OpportunityName() {
        return this._opportunityName;
    }
    set OpportunityName(value) {
        this._opportunityName = value;
    }
    get RfpFileList() {
        return this._rfpFileList;
    }
    get SummaryFieldList() {
        return this._summaryFieldList;
    }
    set SummaryFieldList(value) {
        this._summaryFieldList = value;
    }
    get CatetoryDataList() {
        return this._catetoryDataList;
    }
    set CatetoryDataList(value) {
        this._catetoryDataList = value;
    }
    AddRfpFile(rfpFile) {
        this._rfpFileList.push(rfpFile);
    }
    AddSummaryFieldList(summaryFieldList) {
        this._summaryFieldList = summaryFieldList;
    }
    AddCategoryDataModified(categoryId, filteredOpportunityDataArray) {
        if (this._catetoryDataListModified.length == 0) {
            let categoryData = new CategoryData();
            categoryData.CategoryId = categoryId;
            for (let index = 0; index < filteredOpportunityDataArray.length; index++) {
                const element = filteredOpportunityDataArray[index];
                categoryData.CategoryData += element.outerHTML;
            }
            this._catetoryDataListModified.push(categoryData);
        }
        else {
            let categoryIndex = this._catetoryDataListModified.findIndex(c => c.CategoryId == categoryId);
            if (categoryIndex == -1) {
                let categoryData = new CategoryData();
                categoryData.CategoryId = categoryId;
                for (let index = 0; index < filteredOpportunityDataArray.length; index++) {
                    const element = filteredOpportunityDataArray[index];
                    categoryData.CategoryData += element.outerHTML;
                }
                this._catetoryDataListModified.push(categoryData);
            }
            else {
                let categoryData = this._catetoryDataListModified[categoryIndex];
                categoryData.CategoryData = "";
                for (let index = 0; index < filteredOpportunityDataArray.length; index++) {
                    const element = filteredOpportunityDataArray[index];
                    categoryData.CategoryData += element.outerHTML;
                }
            }
        }
    }
}
//# sourceMappingURL=RFPOpportunity.js.map