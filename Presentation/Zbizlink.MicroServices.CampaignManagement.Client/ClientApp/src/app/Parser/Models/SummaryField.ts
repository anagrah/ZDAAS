export class SummaryField {
    constructor(fieldDisplayName:string,controlType:any, fieldText:string, displayOrder:number, filedTypeId:number ){
        this.FieldDisplayName=fieldDisplayName;
        this.ControlType=controlType;
        this.FieldText=fieldText;
        this.DisplayOrder=displayOrder;
        this.FiledTypeId = filedTypeId;
    }

    FieldDisplayName:string
    FieldText:any;
    ControlType:string;
    DisplayOrder:number;
    FiledTypeId:number;

}
