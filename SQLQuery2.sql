USE [DAI-Personajes]
GO
/****** Object:  Table [dbo].[Peliculas]    Script Date: 2/6/2022 11:54:33 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Peliculas](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Imagen] [varchar](max) NULL,
	[Titulo] [varchar](max) NULL,
	[FechaDeCreacion] [datetime] NULL,
	[Calificacion] [int] NULL,
 CONSTRAINT [PK_Peliculas] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PeliculasxPersonajes]    Script Date: 2/6/2022 11:54:33 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PeliculasxPersonajes](
	[IdPersonajes] [int] NULL,
	[IdPeliculas] [int] NULL,
	[IdRelacion] [int] NOT NULL,
 CONSTRAINT [PK_PeliculasxPersonajes] PRIMARY KEY CLUSTERED 
(
	[IdRelacion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Personajes]    Script Date: 2/6/2022 11:54:33 ******/
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
	[Id] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK_Personajes] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Peliculas] ON 

INSERT [dbo].[Peliculas] ([Id], [Imagen], [Titulo], [FechaDeCreacion], [Calificacion]) VALUES (1, N'B', N'Piratas del Caribe', CAST(N'2005-01-21T00:00:00.000' AS DateTime), 3)
INSERT [dbo].[Peliculas] ([Id], [Imagen], [Titulo], [FechaDeCreacion], [Calificacion]) VALUES (2, N'R', N'Transformer', CAST(N'2005-02-03T03:00:00.000' AS DateTime), 3)
INSERT [dbo].[Peliculas] ([Id], [Imagen], [Titulo], [FechaDeCreacion], [Calificacion]) VALUES (3, N'D', N'Aviones 2', CAST(N'2011-01-01T00:00:00.000' AS DateTime), 5)
INSERT [dbo].[Peliculas] ([Id], [Imagen], [Titulo], [FechaDeCreacion], [Calificacion]) VALUES (4, N'E', N'El Agujero', CAST(N'1998-03-05T00:00:00.000' AS DateTime), 2)
SET IDENTITY_INSERT [dbo].[Peliculas] OFF
GO
INSERT [dbo].[PeliculasxPersonajes] ([IdPersonajes], [IdPeliculas], [IdRelacion]) VALUES (1, 1, 1)
INSERT [dbo].[PeliculasxPersonajes] ([IdPersonajes], [IdPeliculas], [IdRelacion]) VALUES (2, 2, 2)
INSERT [dbo].[PeliculasxPersonajes] ([IdPersonajes], [IdPeliculas], [IdRelacion]) VALUES (3, 3, 3)
GO
SET IDENTITY_INSERT [dbo].[Personajes] ON 

INSERT [dbo].[Personajes] ([Imagen], [Nombre], [Peso], [Edad], [Historia], [Id]) VALUES (N'CgNpbWcQARgAMgsIABCABBCxAxCDATILCAAQgAQQsQMQgwEyBQgAEIAEMgsIABCABBCxAxCDATIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoHCAAQsQMQQzoKCAAQsQMQgwEQQzoICAAQgAQQsQM6CAgAELEDEIMBOgQIABBDUKgHWKUMYNQWaABwAHgAgAE6iAHOApIBATaYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ', N'Lionel Andres Messi                               ', 70, 34, N'Es el mejor jugador delmundo y uno de los mas grandes de la historia                                                                                                                                                                                           ', 1)
INSERT [dbo].[Personajes] ([Imagen], [Nombre], [Peso], [Edad], [Historia], [Id]) VALUES (N'B', N'carlos                                            ', 100, 15, N'AAAAAAAAAAAAA                                                                                                                                                                                                                                                  ', 2)
INSERT [dbo].[Personajes] ([Imagen], [Nombre], [Peso], [Edad], [Historia], [Id]) VALUES (N'CD', N'Deep                                              ', 50, 55, N'Piratas del Caribe                                                                                                                                                                                                                                             ', 3)
INSERT [dbo].[Personajes] ([Imagen], [Nombre], [Peso], [Edad], [Historia], [Id]) VALUES (N'DE', N'Radcliffe                                         ', 60, 40, N'Harry Potter                                                                                                                                                                                                                                                   ', 6)
INSERT [dbo].[Personajes] ([Imagen], [Nombre], [Peso], [Edad], [Historia], [Id]) VALUES (N'EF', N'Bayardo                                           ', 80, 60, N'El Agujero                                                                                                                                                                                                                                                     ', 7)
SET IDENTITY_INSERT [dbo].[Personajes] OFF
GO
ALTER TABLE [dbo].[PeliculasxPersonajes]  WITH CHECK ADD  CONSTRAINT [FK_PeliculasxPersonajes_Peliculas] FOREIGN KEY([IdPeliculas])
REFERENCES [dbo].[Peliculas] ([Id])
GO
ALTER TABLE [dbo].[PeliculasxPersonajes] CHECK CONSTRAINT [FK_PeliculasxPersonajes_Peliculas]
GO
ALTER TABLE [dbo].[PeliculasxPersonajes]  WITH CHECK ADD  CONSTRAINT [FK_PeliculasxPersonajes_Personajes] FOREIGN KEY([IdPersonajes])
REFERENCES [dbo].[Personajes] ([Id])
GO
ALTER TABLE [dbo].[PeliculasxPersonajes] CHECK CONSTRAINT [FK_PeliculasxPersonajes_Personajes]
GO
USE [master]
GO
ALTER DATABASE [DAI-Personajes] SET  READ_WRITE 
GO