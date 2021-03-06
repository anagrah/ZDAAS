USE [CampaignManagement]
GO
/****** Object:  Table [dbo].[CampaignOpportunity]    Script Date: 2/25/2021 5:45:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CampaignOpportunity](
	[CampaignOpportunityID] [numeric](18, 0) IDENTITY(1,1) NOT NULL,
	[SentUserList] [varchar](max) NULL,
	[CampaignSentStatus] [int] NULL,
	[CampaignSentDate] [datetime] NULL,
	[CreatedBy] [numeric](18, 0) NOT NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedBy] [numeric](18, 0) NULL,
	[ModifiedDate] [datetime] NOT NULL,
	[OpportunityId] [numeric](18, 0) NULL,
	[OpportunityName] [varchar](250) NULL,
 CONSTRAINT [PK_CampaignOpportunity] PRIMARY KEY CLUSTERED 
(
	[CampaignOpportunityID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[CampaignOpportunity] ADD  CONSTRAINT [DF_CampaignOpportunity_CreatedDate]  DEFAULT (getdate()) FOR [CreatedDate]
GO
ALTER TABLE [dbo].[CampaignOpportunity] ADD  CONSTRAINT [DF_CampaignOpportunity_ModifiedDate]  DEFAULT (getdate()) FOR [ModifiedDate]
GO
