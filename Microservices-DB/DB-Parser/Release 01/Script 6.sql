IF COL_LENGTH('Opportunity', 'OpportunityType') IS  NULL
BEGIN
    ALTER TABLE Opportunity ADD OpportunityType );
	
END

IF COL_LENGTH('RFPDocument', 'DocContent') IS not  NULL
BEGIN
    ALTER TABLE RFPDocument
ALTER COLUMN DocContent ntext NULL;
END

