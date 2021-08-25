export class SummaryField {
    constructor(fieldDisplayName:string,controlType:any, fieldText:string, displayOrder:number, filedTypeId:number, mandatory: boolean ){
        this.FieldDisplayName=fieldDisplayName;
        this.ControlType=controlType;
        this.FieldText=fieldText;
        this.DisplayOrder=displayOrder;
        this.FiledTypeId = filedTypeId;
       this.Mandatory = mandatory
    }

    FieldDisplayName:string
    FieldText:any;
    ControlType:string;
    DisplayOrder:number;
    FiledTypeId:number;
    Mandatory: boolean;

}
