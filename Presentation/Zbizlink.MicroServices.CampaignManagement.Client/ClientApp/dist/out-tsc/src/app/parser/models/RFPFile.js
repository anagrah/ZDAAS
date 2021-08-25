export class RFPFile {
    constructor(rfpFileParam) {
        this.rfpFileParam = rfpFileParam;
        this.SavedSharePoint = false;
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
//# sourceMappingURL=RFPFile.js.map