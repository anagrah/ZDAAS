

update RFPSummarySynonym
set synonym = 'RFP Title'
where synonym = 'RFP Title:';

GO

declare @RFPSummaryFieldId numeric(18, 0);

select @RFPSummaryFieldId = RFPSummaryFieldId from RFPSummaryField where FieldName = 'Agency';

if (@RFPSummaryFieldId is not null)
begin
INSERT INTO [dbo].[RFPSummarySynonym]
           ([Synonym]
           ,[RFPSummaryFieldId])
     VALUES
           ('TORFP Issuing Office'
           ,@RFPSummaryFieldId)
End

GO

delete from RFPSummarySynonym where synonym = ' Facilities';

GO
