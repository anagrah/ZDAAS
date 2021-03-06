USE [ZRFPParser_Test]
GO
/****** Object:  Table [dbo].[OpportunityType]    Script Date: 3/17/2021 3:38:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OpportunityType](
	[OpportunityTypeId] [numeric](18, 0) IDENTITY(1,1) NOT NULL,
	[OpportunityType] [varchar](50) NULL,
	[OpportunityTypeCode] [int] NULL,
	[CreatedBy] [numeric](18, 0) NULL,
	[CreatedDate] [datetime] NOT NULL,
	[ModifiedBy] [numeric](18, 0) NULL,
	[ModifiedDate] [datetime] NOT NULL,
 CONSTRAINT [PK_OpportunityType] PRIMARY KEY CLUSTERED 
(
	[OpportunityTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[OpportunityType] ON 

INSERT [dbo].[OpportunityType] ([OpportunityTypeId], [OpportunityType], [OpportunityTypeCode], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (CAST(1 AS Numeric(18, 0)), N'Federal', 1, NULL, CAST(N'2021-03-17T14:35:48.543' AS DateTime), NULL, CAST(N'2021-03-17T14:35:48.543' AS DateTime))
INSERT [dbo].[OpportunityType] ([OpportunityTypeId], [OpportunityType], [OpportunityTypeCode], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (CAST(2 AS Numeric(18, 0)), N'State', 2, NULL, CAST(N'2021-03-17T14:40:37.443' AS DateTime), NULL, CAST(N'2021-03-17T14:40:37.443' AS DateTime))
INSERT [dbo].[OpportunityType] ([OpportunityTypeId], [OpportunityType], [OpportunityTypeCode], [CreatedBy], [CreatedDate], [ModifiedBy], [ModifiedDate]) VALUES (CAST(3 AS Numeric(18, 0)), N'Commercial', 3, NULL, CAST(N'2021-03-17T14:41:21.903' AS DateTime), NULL, CAST(N'2021-03-17T14:41:21.903' AS DateTime))
SET IDENTITY_INSERT [dbo].[OpportunityType] OFF
GO
ALTER TABLE [dbo].[OpportunityType] ADD  CONSTRAINT [DF_OpportunityType_CreatedDate]  DEFAULT (getdate()) FOR [CreatedDate]
GO
ALTER TABLE [dbo].[OpportunityType] ADD  CONSTRAINT [DF_OpportunityType_ModifiedDate]  DEFAULT (getdate()) FOR [ModifiedDate]
GO
