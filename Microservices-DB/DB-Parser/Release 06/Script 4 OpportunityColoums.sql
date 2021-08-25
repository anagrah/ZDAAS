IF COL_LENGTH('Opportunity', 'OpportunityTypeId') IS  NULL
BEGIN
    ALTER TABLE Opportunity ADD OpportunityTypeId numeric(18, 0);
	
END

IF COL_LENGTH('Opportunity', 'AgencyId') IS  NULL
BEGIN
    ALTER TABLE Opportunity ADD AgencyId int;
	
END

IF COL_LENGTH('Opportunity', 'StateId') IS  NULL
BEGIN
    ALTER TABLE Opportunity ADD StateId int;
	
END

IF COL_LENGTH('Opportunity', 'ContractVehicleId') IS  NULL
BEGIN
    ALTER TABLE Opportunity ADD ContractVehicleId numeric(18, 0);
	
END

IF COL_LENGTH('Opportunity', 'IndustryId') IS  NULL
BEGIN
    ALTER TABLE Opportunity ADD IndustryId int;
	
END

ALTER TABLE Opportunity
ADD FOREIGN KEY (OpportunityTypeId) REFERENCES OpportunityType(OpportunityTypeId);

ALTER TABLE Opportunity
ADD FOREIGN KEY (AgencyID) REFERENCES Agency(AgencyID);

ALTER TABLE Opportunity
ADD FOREIGN KEY (StateId) REFERENCES States(StateID);

ALTER TABLE Opportunity
ADD FOREIGN KEY (ContractVehicleId) REFERENCES ContractVehicle(ContractVehicleId);

ALTER TABLE Opportunity
ADD FOREIGN KEY (IndustryId) REFERENCES Industry(IndustryID);