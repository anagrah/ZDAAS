

create or alter    PROCEDURE [dbo].[spGetRfpDocument]
	@RfpDocumentId decimal(18, 0)
AS
BEGIN

	select RFPDocumentId,DocName,DocContent,Published,CreatedBy,CreatedDate,CompanyId,UserId,FilePath,
	ClientId,SegmentId,Parsed,OpportunityId
	from RfpDocument
	where RFPDocumentId = @RfpDocumentId;

END
GO




create  or alter   PROCEDURE [dbo].[spGetRFPCategoryData]
	@OpportunityId decimal(18, 0)
AS
BEGIN

	SELECT RFPCategoryDataId, CategoryData, CategoryId, OpportunityId, CompanyId, CreatedBy, UserId, CreatedDate, ModifiedBy, ModifiedDate, Published
FROM     dbo.RFPCategoryData
where OpportunityId = @OpportunityId

	

END

go

create or ALTER      PROCEDURE [dbo].[spGetRFPSummary]
	@OpportunityId decimal(18, 0)
AS
BEGIN

	SELECT RFPSummaryId, FieldName, FieldValue, FieldTypeId, OpportunityId, DisplayOrder, CompanyId, UserId, CreatedBy, CreatedDate, ModifiedBy, ModifiedDate
FROM     dbo.RFPSummary
	where OpportunityId = @OpportunityId;

END
