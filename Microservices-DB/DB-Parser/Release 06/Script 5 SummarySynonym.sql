IF COL_LENGTH('RFPSummarySynonym', 'OpportunityTypeId') IS  NULL
BEGIN
    ALTER TABLE RFPSummarySynonym ADD OpportunityTypeId numeric(18, 0);
	
END

IF COL_LENGTH('RFPSummarySynonym', 'AgencyId') IS  NULL
BEGIN
    ALTER TABLE RFPSummarySynonym ADD AgencyId int;
	
END

IF COL_LENGTH('RFPSummarySynonym', 'StateId') IS  NULL
BEGIN
    ALTER TABLE RFPSummarySynonym ADD StateId int;
	
END

IF COL_LENGTH('RFPSummarySynonym', 'ContractVehicleId') IS  NULL
BEGIN
    ALTER TABLE RFPSummarySynonym ADD ContractVehicleId numeric(18, 0);
	
END

IF COL_LENGTH('RFPSummarySynonym', 'IndustryId') IS  NULL
BEGIN
    ALTER TABLE RFPSummarySynonym ADD IndustryId int;
	
END

ALTER TABLE RFPSummarySynonym
ADD FOREIGN KEY (OpportunityTypeId) REFERENCES OpportunityType(OpportunityTypeId);

ALTER TABLE RFPSummarySynonym
ADD FOREIGN KEY (AgencyID) REFERENCES Agency(AgencyID);

ALTER TABLE RFPSummarySynonym
ADD FOREIGN KEY (StateId) REFERENCES States(StateID);

ALTER TABLE RFPSummarySynonym
ADD FOREIGN KEY (ContractVehicleId) REFERENCES ContractVehicle(ContractVehicleId);

ALTER TABLE RFPSummarySynonym
ADD FOREIGN KEY (IndustryId) REFERENCES Industry(IndustryID);