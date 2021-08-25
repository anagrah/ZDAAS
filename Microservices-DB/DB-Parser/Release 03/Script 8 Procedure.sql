create or ALTER PROCEDURE [dbo].[spGetCategoryData]
	@opportunityId decimal(18, 0)
AS
BEGIN
select RFPCategoryData.CategoryData as CategoryData,RFPCategoryData.CategoryId as CategoryId 
from RFPCategoryData 
where OpportunityId = @opportunityId


END

GO
create or ALTER    PROCEDURE [dbo].[spGetDocInfoByOpportunityNo]
	@opportunityId decimal(18, 0)
AS
BEGIN

	SELECT  	 
	dbo.RFPSummary.FieldValue as SolicitationNo,
	 dbo.Opportunity.CompanyId as CompanyId,
	  dbo.Opportunity.UserId as UserId,
	  dbo.Opportunity.ClientId as ClientId,
	  dbo.Opportunity.SegmentId as SegmentId
FROM     dbo.Opportunity INNER JOIN
                  dbo.RFPSummary ON dbo.Opportunity.OpportunityId = dbo.RFPSummary.OpportunityId
where dbo.Opportunity.OpportunityId = @opportunityId and dbo.RFPSummary.FieldName = 'Solicitation Number';
END
