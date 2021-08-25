/* Required data form othere tabls will be inserted/update in opportunity table */

Declare @RFPDocumentId numeric(18,0);
Declare @UserId numeric(18,0); 
Declare @SolicitationNumber nvarchar(1000);
Declare @SolicitationTitle nvarchar(1000);
Declare @CompanyId numeric(18, 0);
Declare @ClientId numeric(18, 0);
Declare @SegmentId numeric(18, 0);

Declare ZdaasCursor CURSOR FOR 
SELECT RFPDocument.RFPDocumentId, RFPDocument.UserId, Summary.FieldValue as SolicitationNumber,
(Select summ.FieldValue  from RFPSummary as summ 
where (summ.FieldName = 'Solicitation Title' or summ.FieldName = 'Title of Proposal')
and RFPDocument.RFPDocumentId = summ.RFPDocumentId) as SolicitationTitle,
RFPDocument.CompanyId, RFPDocument.ClientId, RFPDocument.SegmentId
from RFPDocument
left join Opportunity on RFPDocument.RFPDocumentId = Opportunity.RFPDocumentId
INNER JOIN RFPSummary as Summary on RFPDocument.RFPDocumentId = Summary.RFPDocumentId
and (Summary.FieldName = 'Solicitation Number')
where Opportunity.RFPDocumentId is null

Open ZdaasCursor

Fetch Next from ZdaasCursor into @RFPDocumentId, @UserId, @SolicitationNumber, @SolicitationTitle, @CompanyId , @ClientId , @SegmentId

While(@@FETCH_STATUS = 0)
Begin

if(len(@SolicitationTitle) > 250)
begin
set @SolicitationTitle = SUBSTRING(@SolicitationTitle, 0, 249)
end

if(len(@SolicitationNumber) > 50)
begin
set @SolicitationNumber = SUBSTRING(@SolicitationNumber, 0, 49)
end

INSERT INTO Opportunity(RFPDocumentId, OpportunityName, SolicitationNumber, CompanyId, ClientId, UserId, SegmentId)
VALUES (@RFPDocumentId, @SolicitationTitle, @SolicitationNumber, @CompanyId, @ClientId, @UserId, @SegmentId)


Fetch Next from ZdaasCursor into @RFPDocumentId, @UserId, @SolicitationNumber, @SolicitationTitle, @CompanyId , @ClientId , @SegmentId
end

CLOSE ZdaasCursor 

DEALLOCATE ZdaasCursor




