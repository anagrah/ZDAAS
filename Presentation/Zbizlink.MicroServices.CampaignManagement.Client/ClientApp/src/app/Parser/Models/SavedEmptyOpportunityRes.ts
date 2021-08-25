
// export class SavedEmptyOpportunityRes {

//     public opportunity: Opportunity;
// }

export class SavedEmptyOpportunityRes {
    public OpportunityId: number;
    public OpportunityName: string;

    public RfpDocumentViewModel: RfpDocumentViewModel[];
    public RfpSummaryViewModel: RfpSummaryViewModel[];
    public RfpCategoryDataViewModel: RfpCategoryDataViewModel[];
}
export class RfpDocumentViewModel {

    public OpportunityName: string;
    public OrignalFile: File;
    public FileName: string;
    
    public FileNameColor: string;
    public fileRFPDbId: number;
    public HTMLFile: string;
    public SavedSharePoint: boolean;
    public FilePathSharePoint: string;
    public Saved: boolean;
    public View: boolean;
    public Parsed: boolean;
}

export class RfpSummaryViewModel {
    public FieldDisplayName: string;
    public FieldText: string;
    public ControlType: string;
    public DisplayOrder: number;
    public FiledTypeId: number;
}

export class RfpCategoryDataViewModel {
    public CategoryId: number;
    public Name: string
    public CategoryData: string
}