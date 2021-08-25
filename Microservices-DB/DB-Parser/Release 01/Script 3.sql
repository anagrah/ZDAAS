/* Data will be updated in three tables (RFPDocument, RFPSummary, RFPDocumentId)*/
update RFPDocument
set Parsed = 1;

Declare @OpportunityId numeric(18,0); 
Declare @RFPDocumentId numeric(18,0); 

Declare ZdaasCursor CURSOR FOR 
SELECT OpportunityId, RFPDocumentId from Opportunity

Open ZdaasCursor

Fetch Next from ZdaasCursor into @OpportunityId, @RFPDocumentId

While(@@FETCH_STATUS = 0)
Begin

update RFPDocument
set OpportunityId = @OpportunityId
where RFPDocumentId = @RFPDocumentId;

update RFPSummary
set OpportunityId = @OpportunityId
where RFPDocumentId = @RFPDocumentId;

update RFPCategoryData
set OpportunityId = @OpportunityId
where RFPDocumentId = @RFPDocumentId;

Fetch Next from ZdaasCursor into @OpportunityId, @RFPDocumentId;
end

CLOSE ZdaasCursor 

DEALLOCATE ZdaasCursor




