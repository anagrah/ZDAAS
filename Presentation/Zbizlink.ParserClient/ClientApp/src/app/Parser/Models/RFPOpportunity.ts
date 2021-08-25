import { RFPFile } from './RFPFile';
import { CategoryName } from 'src/app/parser/models/CategoryName';
import { SummaryField } from './SummaryField';
import { CategoryData } from './CategoryData';

export class RFPOpportunity {

    private _opportunityId: string;
    private _opportunityName: string;
    private _rfpFileList: RFPFile[] = [];
    private _categoryNameList: CategoryName[];
    private _summaryFieldList: Array<SummaryField>;
    private _catetoryDataList: Array<CategoryData> = new Array<CategoryData>();
    private _catetoryDataListModified: Array<CategoryData> = new Array<CategoryData>();
    private _fileType: string = "";

    constructor() { }

    public get CatetoryDataListModified(): Array<CategoryData> {
        return this._catetoryDataListModified;
    }

    public get FileType(): string {
        return this._fileType;
    }

    public set FileType(value: string) {
        this._fileType = value;
    }

    public get CategoryNameList(): CategoryName[] {
        return this._categoryNameList;
    }

    public set CategoryNameList(value: CategoryName[]) {
        this._categoryNameList = value;
    }

    public get OpportunityId(): string {
        return this._opportunityId;
    }

    public set OpportunityId(value: string) {
        this._opportunityId = value;
    }
    public get OpportunityName(): string {
        return this._opportunityName
    }

    public set OpportunityName(value: string) {
        this._opportunityName = value;
    }

    public get RfpFileList(): RFPFile[] {
        return this._rfpFileList;
    }

    public get SummaryFieldList(): Array<SummaryField> {
        return this._summaryFieldList;
    }


    public set SummaryFieldList(value: Array<SummaryField>) {
        this._summaryFieldList = value;
    }

    public get CatetoryDataList(): Array<CategoryData> {
        return this._catetoryDataList;
    }


    public set CatetoryDataList(value: Array<CategoryData>) {
        this._catetoryDataList = value;
    }


    public AddRfpFile(rfpFile: RFPFile) {

        this._rfpFileList.push(rfpFile);
    }

    public AddSummaryFieldList(summaryFieldList: Array<SummaryField>) {
        this._summaryFieldList = summaryFieldList;
    }

    public AddCategoryDataModified(categoryId: number, filteredOpportunityDataArray: Element[]) {

        if (this._catetoryDataListModified.length == 0) {
            let categoryData: CategoryData = new CategoryData()
            categoryData.CategoryId = categoryId;
            for (let index = 0; index < filteredOpportunityDataArray.length; index++) {
                const element = filteredOpportunityDataArray[index];
                categoryData.CategoryData += element.outerHTML;
            }

            this._catetoryDataListModified.push(categoryData);
        }else{

           let categoryIndex: number =  this._catetoryDataListModified.findIndex(c => c.CategoryId == categoryId);

           if(categoryIndex == -1){
            let categoryData: CategoryData = new CategoryData()
            categoryData.CategoryId = categoryId;
            for (let index = 0; index < filteredOpportunityDataArray.length; index++) {
                const element = filteredOpportunityDataArray[index];
                categoryData.CategoryData += element.outerHTML;
            }

            this._catetoryDataListModified.push(categoryData);
           }else{
            let categoryData: CategoryData = this._catetoryDataListModified[categoryIndex];
            categoryData.CategoryData = "";
            for (let index = 0; index < filteredOpportunityDataArray.length; index++) {
                const element = filteredOpportunityDataArray[index];
                categoryData.CategoryData += element.outerHTML;
            }
           }
        }
    }

}


