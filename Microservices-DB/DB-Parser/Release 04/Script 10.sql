
Create or ALTER     PROCEDURE [dbo].[spGetRFPCategoryDataById]
	@RFPCategoryDataId decimal(18, 0),
	@OpportunityId decimal(18, 0)

AS
BEGIN

	SELECT RFPCategoryDataId, CategoryData, CategoryId, OpportunityId, CompanyId, CreatedBy, UserId, CreatedDate, ModifiedBy, ModifiedDate, Published
FROM     dbo.RFPCategoryData
where  RFPCategoryDataId = @RFPCategoryDataId and OpportunityId = @OpportunityId  

	
	 
END