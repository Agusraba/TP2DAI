USE [DAI-Personajes]
GO
CREATE LOGIN [Personaje] WITH PASSWORD=N'Personaje', DEFAULT_DATABASE=[DAI-Personajes], CHECK_EXPIRATION=OFF, CHECK_POLICY=OFF
GO

USE [DAI-Personajes]
GO
CREATE USER [Personajes] FOR LOGIN [Personajes]
GO
USE [DAI-Personajes]
GO
ALTER ROLE [db_owner] ADD MEMBER [Personajes]
GO