IF (select Synonym from CategorySynonym where Synonym = 'ITEM NO') IS  NULL
 BEGIN
		INSERT INTO [dbo].[CategorySynonym]
           ([Synonym]
           ,[Description]
           ,[CategoryId]
           ,[CreatedBy]
           ,[CreatedDate]
           ,[ModifiedBy]
           ,[ModifiedDate])
     VALUES
           ('ITEM NO',
           null,
           4,
           1,
           GETDATE(),
           1,
           GETDATE())
END