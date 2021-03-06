CREATE TABLE [dbo].[JobTitle](
	[JobTitleId] [numeric](18, 0) IDENTITY(1,1) NOT NULL,
	[Title] [varchar](200) NOT NULL,
 CONSTRAINT [PK_Title] PRIMARY KEY CLUSTERED 
(
	[JobTitleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
 CONSTRAINT [Parser_JobTitle] UNIQUE NONCLUSTERED 
(
	[JobTitleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

GO
CREATE TABLE [dbo].[JobTitleAddOn](
	[JobTitleAddOnId] [numeric](18, 0) IDENTITY(1,1) NOT NULL,
	[AddOn] [varchar](50) NOT NULL,
 CONSTRAINT [PK_JobTitleAddOn] PRIMARY KEY CLUSTERED 
(
	[JobTitleAddOnId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
 CONSTRAINT [Unique_AddOn] UNIQUE NONCLUSTERED 
(
	[JobTitleAddOnId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO


GO
SET IDENTITY_INSERT [dbo].[JobTitle] ON 

INSERT [dbo].[JobTitle] ([JobTitleId], [Title]) VALUES (CAST(1 AS Numeric(18, 0)), N'Accountant')
INSERT [dbo].[JobTitle] ([JobTitleId], [Title]) VALUES (CAST(2 AS Numeric(18, 0)), N'Administrator')
INSERT [dbo].[JobTitle] ([JobTitleId], [Title]) VALUES (CAST(9 AS Numeric(18, 0)), N'Expert')
INSERT [dbo].[JobTitle] ([JobTitleId], [Title]) VALUES (CAST(12 AS Numeric(18, 0)), N'Architect')
INSERT [dbo].[JobTitle] ([JobTitleId], [Title]) VALUES (CAST(17 AS Numeric(18, 0)), N'Historian')
INSERT [dbo].[JobTitle] ([JobTitleId], [Title]) VALUES (CAST(19 AS Numeric(18, 0)), N'Supervisor')
INSERT [dbo].[JobTitle] ([JobTitleId], [Title]) VALUES (CAST(22 AS Numeric(18, 0)), N'Auditor')
INSERT [dbo].[JobTitle] ([JobTitleId], [Title]) VALUES (CAST(23 AS Numeric(18, 0)), N'Illustrator')
INSERT [dbo].[JobTitle] ([JobTitleId], [Title]) VALUES (CAST(26 AS Numeric(18, 0)), N'Operator')
INSERT [dbo].[JobTitle] ([JobTitleId], [Title]) VALUES (CAST(27 AS Numeric(18, 0)), N'Programmer')
INSERT [dbo].[JobTitle] ([JobTitleId], [Title]) VALUES (CAST(35 AS Numeric(18, 0)), N'Electrician')
INSERT [dbo].[JobTitle] ([JobTitleId], [Title]) VALUES (CAST(36 AS Numeric(18, 0)), N'Engineer')
INSERT [dbo].[JobTitle] ([JobTitleId], [Title]) VALUES (CAST(37 AS Numeric(18, 0)), N'Engineer Information')
INSERT [dbo].[JobTitle] ([JobTitleId], [Title]) VALUES (CAST(53 AS Numeric(18, 0)), N'Analyst')
INSERT [dbo].[JobTitle] ([JobTitleId], [Title]) VALUES (CAST(55 AS Numeric(18, 0)), N'Technician')
INSERT [dbo].[JobTitle] ([JobTitleId], [Title]) VALUES (CAST(56 AS Numeric(18, 0)), N'Trainee')
INSERT [dbo].[JobTitle] ([JobTitleId], [Title]) VALUES (CAST(57 AS Numeric(18, 0)), N'Developer')
INSERT [dbo].[JobTitle] ([JobTitleId], [Title]) VALUES (CAST(58 AS Numeric(18, 0)), N'Facilitator')
INSERT [dbo].[JobTitle] ([JobTitleId], [Title]) VALUES (CAST(62 AS Numeric(18, 0)), N'Professional')
INSERT [dbo].[JobTitle] ([JobTitleId], [Title]) VALUES (CAST(70 AS Numeric(18, 0)), N'Automation')
INSERT [dbo].[JobTitle] ([JobTitleId], [Title]) VALUES (CAST(71 AS Numeric(18, 0)), N'Photographer')
INSERT [dbo].[JobTitle] ([JobTitleId], [Title]) VALUES (CAST(72 AS Numeric(18, 0)), N'Planner')
INSERT [dbo].[JobTitle] ([JobTitleId], [Title]) VALUES (CAST(91 AS Numeric(18, 0)), N'Instructor')
INSERT [dbo].[JobTitle] ([JobTitleId], [Title]) VALUES (CAST(92 AS Numeric(18, 0)), N'Editor')
INSERT [dbo].[JobTitle] ([JobTitleId], [Title]) VALUES (CAST(93 AS Numeric(18, 0)), N'Writer')
INSERT [dbo].[JobTitle] ([JobTitleId], [Title]) VALUES (CAST(97 AS Numeric(18, 0)), N'Consultant')
INSERT [dbo].[JobTitle] ([JobTitleId], [Title]) VALUES (CAST(110 AS Numeric(18, 0)), N'Manager')
INSERT [dbo].[JobTitle] ([JobTitleId], [Title]) VALUES (CAST(119 AS Numeric(18, 0)), N'Archeologist')
INSERT [dbo].[JobTitle] ([JobTitleId], [Title]) VALUES (CAST(120 AS Numeric(18, 0)), N'Specialist')
INSERT [dbo].[JobTitle] ([JobTitleId], [Title]) VALUES (CAST(128 AS Numeric(18, 0)), N'Developer')
INSERT [dbo].[JobTitle] ([JobTitleId], [Title]) VALUES (CAST(129 AS Numeric(18, 0)), N'Programmer')
SET IDENTITY_INSERT [dbo].[JobTitle] OFF
SET IDENTITY_INSERT [dbo].[JobTitleAddOn] ON 

INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(1 AS Numeric(18, 0)), N'Cost')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(2 AS Numeric(18, 0)), N'Systems')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(3 AS Numeric(18, 0)), N'System')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(6 AS Numeric(18, 0)), N'Financial')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(9 AS Numeric(18, 0)), N'Advanced')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(11 AS Numeric(18, 0)), N'Applications')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(14 AS Numeric(18, 0)), N'Archeologist')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(15 AS Numeric(18, 0)), N'Historic')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(17 AS Numeric(18, 0)), N'Application')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(20 AS Numeric(18, 0)), N'Internet')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(22 AS Numeric(18, 0)), N'Design')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(23 AS Numeric(18, 0)), N'Architectural')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(26 AS Numeric(18, 0)), N'Integration')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(27 AS Numeric(18, 0)), N'Junior')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(31 AS Numeric(18, 0)), N'Preservation')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(39 AS Numeric(18, 0)), N'Audit')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(41 AS Numeric(18, 0)), N'Lead')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(42 AS Numeric(18, 0)), N'Staff')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(44 AS Numeric(18, 0)), N'Graphics')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(46 AS Numeric(18, 0)), N'Center')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(48 AS Numeric(18, 0)), N'Database')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(49 AS Numeric(18, 0)), N'Management')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(50 AS Numeric(18, 0)), N'Documentation')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(51 AS Numeric(18, 0)), N'Journeyman')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(52 AS Numeric(18, 0)), N'Licensed')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(53 AS Numeric(18, 0)), N'Master')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(54 AS Numeric(18, 0)), N'Helper')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(55 AS Numeric(18, 0)), N'Facility')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(59 AS Numeric(18, 0)), N'Interdisciplinary')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(61 AS Numeric(18, 0)), N'Senior')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(62 AS Numeric(18, 0)), N'IT')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(64 AS Numeric(18, 0)), N'Security')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(65 AS Numeric(18, 0)), N'Radio')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(66 AS Numeric(18, 0)), N'Frequency')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(68 AS Numeric(18, 0)), N'Stationary')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(71 AS Numeric(18, 0)), N'Engineering')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(72 AS Numeric(18, 0)), N'Facilities')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(73 AS Numeric(18, 0)), N'Specialist')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(76 AS Numeric(18, 0)), N'Supervisor')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(78 AS Numeric(18, 0)), N'Level ')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(79 AS Numeric(18, 0)), N'I')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(80 AS Numeric(18, 0)), N'II')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(81 AS Numeric(18, 0)), N'III')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(82 AS Numeric(18, 0)), N'Geographic')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(83 AS Numeric(18, 0)), N'Information')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(86 AS Numeric(18, 0)), N'GeoSpatial')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(87 AS Numeric(18, 0)), N'Web')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(88 AS Numeric(18, 0)), N'Group ')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(89 AS Numeric(18, 0)), N'Help')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(90 AS Numeric(18, 0)), N'Desk')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(92 AS Numeric(18, 0)), N'Intranet')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(96 AS Numeric(18, 0)), N'Market')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(97 AS Numeric(18, 0)), N'Research')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(98 AS Numeric(18, 0)), N'Network ')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(99 AS Numeric(18, 0)), N'Office')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(100 AS Numeric(18, 0)), N'Automation')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(101 AS Numeric(18, 0)), N'Operations')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(104 AS Numeric(18, 0)), N'Administration')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(106 AS Numeric(18, 0)), N'Project')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(108 AS Numeric(18, 0)), N'Quality')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(109 AS Numeric(18, 0)), N'Assurance')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(110 AS Numeric(18, 0)), N'Risk')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(113 AS Numeric(18, 0)), N'Computer')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(115 AS Numeric(18, 0)), N'Data')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(117 AS Numeric(18, 0)), N'Subject ')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(118 AS Numeric(18, 0)), N'Matter')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(119 AS Numeric(18, 0)), N'Wireless')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(120 AS Numeric(18, 0)), N'Telecommunications')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(121 AS Numeric(18, 0)), N'Telecommunication')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(122 AS Numeric(18, 0)), N'Testing')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(123 AS Numeric(18, 0)), N'Training')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(124 AS Numeric(18, 0)), N'Technical')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(125 AS Numeric(18, 0)), N'Development')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(127 AS Numeric(18, 0)), N'Business')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(128 AS Numeric(18, 0)), N'Process')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(129 AS Numeric(18, 0)), N'Change')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(132 AS Numeric(18, 0)), N'Software')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(137 AS Numeric(18, 0)), N'Technology')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(140 AS Numeric(18, 0)), N'Site')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(141 AS Numeric(18, 0)), N'Program')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(143 AS Numeric(18, 0)), N'Control')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(144 AS Numeric(18, 0)), N'Deputy')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(145 AS Numeric(18, 0)), N'Functional ')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(148 AS Numeric(18, 0)), N'Assessment ')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(155 AS Numeric(18, 0)), N'Advanced')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(156 AS Numeric(18, 0)), N'Business ')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(157 AS Numeric(18, 0)), N'Process')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(158 AS Numeric(18, 0)), N'Change')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(159 AS Numeric(18, 0)), N'Management')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(160 AS Numeric(18, 0)), N'Computer')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(161 AS Numeric(18, 0)), N'Integration')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(162 AS Numeric(18, 0)), N'Junior')
INSERT [dbo].[JobTitleAddOn] ([JobTitleAddOnId], [AddOn]) VALUES (CAST(163 AS Numeric(18, 0)), N'Documentation')
SET IDENTITY_INSERT [dbo].[JobTitleAddOn] OFF


GO

declare @CategoryId numeric(18, 0);

select @CategoryId = CategoryId from Category where Name = 'Labor';

if (@CategoryId is not null)
begin
delete from CategorySynonym
where categoryid = @CategoryId
End

GO

