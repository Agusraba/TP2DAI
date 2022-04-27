USE [DAI-Personajes]
GO
/****** Object:  Table [dbo].[Pizzas]    Script Date: 3/13/2022 3:24:39 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Personajes](
	[Imagen] [varchar](max) NOT NULL,
	[Nombre] [nchar](50) NOT NULL,
	[Peso] [float] NOT NULL,
	[Edad] [int] NOT NULL,
	[Historia] [nchar](255) NOT NULL,
	[Id] [int] NOT NULL,
 CONSTRAINT [PK_Personajes] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[Personajes] ([Imagen], [Nombre], [Peso], [Edad], [Historia], [Id]) VALUES (N'CgNpbWcQARgAMgsIABCABBCxAxCDATILCAAQgAQQsQMQgwEyBQgAEIAEMgsIABCABBCxAxCDATIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoHCAAQsQMQQzoKCAAQsQMQgwEQQzoICAAQgAQQsQM6CAgAELEDEIMBOgQIABBDUKgHWKUMYNQWaABwAHgAgAE6iAHOApIBATaYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ', N'Lionel Andres Messi                               ', 70, 34, N'Es el mejor jugador delmundo y uno de los mas grandes de la historia                                                                                                                                                                                           ', 1)
GO

