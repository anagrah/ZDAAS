export class RFPFile implements IRFPFileParam {

    public OpportunityName?: string;
    public OrignalFile?: File;
    public FileName: string;
    
    public FileNameColor: string;
    public fileRFPDbId?: number;
    public HTMLFile?: string;
    public SavedSharePoint?: boolean = false;
    
    public FilePathSharePoint?: string;
    public Saved?: boolean;
    public View?: boolean;
    public Parsed?: boolean;

    constructor(private rfpFileParam: IRFPFileParam) {
        this.OpportunityName = rfpFileParam.OpportunityName;
        this.FileName = rfpFileParam.FileName;
        
        this.FileNameColor = rfpFileParam.FileNameColor;
        this.OrignalFile = rfpFileParam.OrignalFile;
        this.HTMLFile = rfpFileParam.HTMLFile;
        this.fileRFPDbId = rfpFileParam.fileRFPDbId;
        this.SavedSharePoint = rfpFileParam.SavedSharePoint;
        
        this.FilePathSharePoint = rfpFileParam.FilePathSharePoint;
        this.Parsed = rfpFileParam.Parsed;
        this.Saved = rfpFileParam.Saved;
        this.View = rfpFileParam.View;
        

    }
}


export interface IRFPFileParam {
    OpportunityName?: string;
    OrignalFile?: File;
    FileName: string;
   
    FileNameColor: string;
    fileRFPDbId?: number;
    HTMLFile?: string;
    SavedSharePoint?: boolean;
   
    FilePathSharePoint?: string;
    Saved?: boolean;
    View?: boolean;
    Parsed?: boolean;
}