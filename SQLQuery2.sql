SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Personajes](
	[Imagen] [varchar](max) NOT NULL,
	[Nombre] [nchar](50) NOT NULL,
	[Peso] [float] NOT NULL,
	[Edad] [int] NOT NULL,
	[Historia] [nchar](255) NOT NULL,
	[Id] [int] IDENTITY(1,1) NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[Personajes] ([Imagen], [Nombre], [Peso], [Edad], [Historia]) VALUES (N'CgNpbWcQARgAMgsIABCABBCxAxCDATILCAAQgAQQsQMQgwEyBQgAEIAEMgsIABCABBCxAxCDATIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoHCAAQsQMQQzoKCAAQsQMQgwEQQzoICAAQgAQQsQM6CAgAELEDEIMBOgQIABBDUKgHWKUMYNQWaABwAHgAgAE6iAHOApIBATaYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ', N'Lionel Andres Messi                               ', 70, 34, N'Es el mejor jugador delmundo y uno de los mas grandes de la historia                                                                                                                                                                                           ')
GO

