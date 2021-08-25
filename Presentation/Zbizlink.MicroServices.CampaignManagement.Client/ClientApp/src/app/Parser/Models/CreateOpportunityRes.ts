import { FileName } from './FileName';
import { SummaryField } from './SummaryField';

export class CreateOpportunityRes{

    opportunityId: string;
    opportunityName: string;
    fileNameList: Array<FileName>;  
    summary: Array<SummaryField>;
    
}