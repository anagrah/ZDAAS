/* New column will add in existing table.*/

IF COL_LENGTH('Opportunity', 'OpportunityName') IS  NULL
BEGIN
    ALTER TABLE Opportunity ADD OpportunityName varchar(50);
END

IF COL_LENGTH('Opportunity', 'OpportunityName') IS not  NULL
BEGIN
ALTER TABLE Opportunity 
ALTER COLUMN OpportunityName varchar(250);
END

IF COL_LENGTH('Opportunity', 'UserId') IS  NULL
BEGIN
    ALTER TABLE Opportunity ADD UserId numeric(18, 0);
END

IF COL_LENGTH('RFPSummary', 'OpportunityId') IS  NULL
BEGIN
    ALTER TABLE RFPSummary ADD OpportunityId numeric(18, 0);
END

IF COL_LENGTH('RFPCategoryData', 'OpportunityId') IS  NULL
BEGIN
    ALTER TABLE RFPCategoryData ADD OpportunityId numeric(18, 0);
END

IF COL_LENGTH('RFPDocument', 'Parsed') IS  NULL
BEGIN
    ALTER TABLE RFPDocument ADD Parsed bit;
END

IF COL_LENGTH('RFPDocument', 'OpportunityId') IS  NULL
BEGIN
    ALTER TABLE RFPDocument ADD OpportunityId numeric(18, 0);
END

IF COL_LENGTH('Opportunity', 'OldOpportunity') IS  NULL
BEGIN
    ALTER TABLE Opportunity ADD OldOpportunity bit DEFAULT ((0));
END




