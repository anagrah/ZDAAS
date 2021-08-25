/* Constraint will be added following tables (RFPDocument, RFPCategoryData, RFPSummary )*/

if ((select top(1) name from sys.objects where name  = 'FK_RFPDocument_Opportunity') is null)
ALTER TABLE RFPDocument
   ADD CONSTRAINT FK_RFPDocument_Opportunity FOREIGN KEY (OpportunityId)
      REFERENCES Opportunity (OpportunityId)
      ON DELETE CASCADE
      ON UPDATE CASCADE;
else
print 'FK_RFPDocument_Opportunity Already exist';

if ((select top(1) name from sys.objects where name  = 'FK_RFPSummary_Opportunity') is null)
ALTER TABLE RFPSummary
   ADD CONSTRAINT FK_RFPSummary_Opportunity FOREIGN KEY (OpportunityId)
      REFERENCES Opportunity (OpportunityId)
      ON DELETE CASCADE
      ON UPDATE CASCADE;
else
print 'FK_RFPSummary_Opportunity Already exist';

if ((select top(1) name from sys.objects where name  = 'FK_RFPCategoryData_Opportunity') is null)
ALTER TABLE RFPCategoryData
   ADD CONSTRAINT FK_RFPCategoryData_Opportunity FOREIGN KEY (OpportunityId)
      REFERENCES Opportunity (OpportunityId)
      ON DELETE CASCADE
      ON UPDATE CASCADE;
else
print 'FK_RFPCategoryData_Opportunity Already exist';
