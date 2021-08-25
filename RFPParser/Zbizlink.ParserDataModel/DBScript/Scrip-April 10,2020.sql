


if (select RFPSummaryFieldId from RFPSummaryField where FieldName = 'Original Posted Date') is not null
Begin
	if (select RFPSummaryFieldId from RFPSummarySynonym where Synonym = 'Date of Issue') is null
	begin
		INSERT INTO [dbo].[RFPSummarySynonym]
           ([Synonym]
           ,[CreatedBy]
           ,[CreatedDate]
           ,[RFPSummaryFieldId])
		VALUES
           ('RFP Issue Date',
            1,
            GETDATE(),
            (select RFPSummaryFieldId from RFPSummaryField where FieldName = 'Original Posted Date'));
	End

	if (select RFPSummaryFieldId from RFPSummarySynonym where Synonym = 'Date of Issue') is null
	begin
			INSERT INTO [dbo].[RFPSummarySynonym]
           ([Synonym]
           ,[CreatedBy]
           ,[CreatedDate]
           ,[RFPSummaryFieldId])
     VALUES
           ('Date of Issue',
            1,
            GETDATE(),
            (select RFPSummaryFieldId from RFPSummaryField where FieldName = 'Original Posted Date'));
	End
End
GO



if (select RFPSummaryFieldId from RFPSummaryField where FieldName = 'Closing Date') is not null
Begin

	if (select RFPSummaryFieldId from RFPSummarySynonym where Synonym = 'Submission Deadline') is null
	Begin
		INSERT INTO [dbo].[RFPSummarySynonym]
           ([Synonym]
           ,[CreatedBy]
           ,[CreatedDate]
           ,[RFPSummaryFieldId])
		VALUES
           ('Submission Deadline',
            1,
            GETDATE(),
            (select RFPSummaryFieldId from RFPSummaryField where FieldName = 'Closing Date'));
	End

	if (select RFPSummaryFieldId from RFPSummarySynonym where Synonym = 'Closing Date and Time') is null
	Begin
		INSERT INTO [dbo].[RFPSummarySynonym]
           ([Synonym]
           ,[CreatedBy]
           ,[CreatedDate]
           ,[RFPSummaryFieldId])
		VALUES
           ('Closing Date and Time',
            1,
            GETDATE(),
            (select RFPSummaryFieldId from RFPSummaryField where FieldName = 'Closing Date'));
	End

	
	if (select RFPSummaryFieldId from RFPSummarySynonym where Synonym = 'Proposal Due Closing Date') is null
	Begin
		INSERT INTO [dbo].[RFPSummarySynonym]
           ([Synonym]
           ,[CreatedBy]
           ,[CreatedDate]
           ,[RFPSummaryFieldId])
		VALUES
           ('Proposal Due Closing Date',
            1,
            GETDATE(),
            (select RFPSummaryFieldId from RFPSummaryField where FieldName = 'Closing Date'));
	End
End
GO



if (select  RFPSummaryFieldId from RFPSummaryField where FieldName = 'Title of Proposal') is not null
Begin
	if (select RFPSummaryFieldId from RFPSummarySynonym where Synonym = 'Request for Proposal') is null
	Begin
		INSERT INTO [dbo].[RFPSummarySynonym]
           ([Synonym]
           ,[CreatedBy]
           ,[CreatedDate]
           ,[RFPSummaryFieldId])
		VALUES
           ('Request for Proposal',
            1,
            GETDATE(),
            (select  RFPSummaryFieldId from RFPSummaryField where FieldName = 'Title of Proposal'));
	End
End
GO


if (select RFPSummaryFieldId from RFPSummaryField where FieldName = 'Agency') is not null
Begin
	if (select RFPSummaryFieldId from RFPSummarySynonym where Synonym = 'RFP Issuing Department') is null
	Begin
		INSERT INTO [dbo].[RFPSummarySynonym]
           ([Synonym]
           ,[CreatedBy]
           ,[CreatedDate]
           ,[RFPSummaryFieldId])
		 VALUES
           ('RFP Issuing Department',
            1,
            GETDATE(),
            (select RFPSummaryFieldId from RFPSummaryField where FieldName = 'Agency'));
	End
End
GO

WITH cte AS (
    SELECT 
        Synonym,
        ROW_NUMBER() OVER (
            PARTITION BY 
                Synonym
            ORDER BY 
                Synonym
        ) row_num
     FROM 
        RFPSummarySynonym
)
DELETE FROM cte
WHERE row_num > 1;


