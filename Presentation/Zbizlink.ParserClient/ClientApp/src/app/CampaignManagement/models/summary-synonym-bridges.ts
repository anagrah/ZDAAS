import { BridgeSummarySynonymAgencyList } from './bridge-summary-synonym-agency-list';
import { BridgeSummarySynonymContractVehicleList } from './bridge-summary-synonym-contract-vehicle-list';
import { BridgeSummarySynonymIndustryList } from './bridge-summary-synonym-industry-list';
import { BridgeSummarySynonymOpportunityTypeList } from './bridge-summary-synonym-opportunity-type-list';
import { BridgeSummarySynonymStatesList } from './bridge-summary-synonym-states-list';

export class SummarySynonymBridges {
    // public decimal UserId { get; set; }
    //     public decimal SummarySynonymId { get; set; } 
    BridgeSummarySynonymAgencyList: Array<BridgeSummarySynonymAgencyList>;
    BridgeSummarySynonymContractVehicleList: Array<BridgeSummarySynonymContractVehicleList>;
    BridgeSummarySynonymIndustryList: Array<BridgeSummarySynonymIndustryList>;
    BridgeSummarySynonymOpportunityTypeList: Array<BridgeSummarySynonymOpportunityTypeList>;
    BridgeSummarySynonymStatesList: Array<BridgeSummarySynonymStatesList>;
}
