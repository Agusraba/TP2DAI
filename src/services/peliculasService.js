import sql from 'mssql'
import config from '../../db.js'
import 'dotenv/config'

const personajeTabla = process.env.DB_TABLA_PERSONAJE;
const peliculaTabla = process.env.DB_TABLA_PELICULAS;
const intermediaTabla = process.env.DB_TABLA_INTERMEDIA;

export class peliculasService {
    getPeliculas = async (orden, titulo) => {
        console.log('This is a function on the service');
        const pool = await sql.connect(config);
        let response = 0
        if(!orden){
            if(!titulo){
                 response = await pool.request()
            .query(`SELECT Imagen,Id,Titulo,FechaDeCreacion from ${peliculaTabla}`);
            }else{
                 response = await pool.request()
                 .input('titulo', sql.VarChar, titulo)
            .query(`SELECT Imagen,Id,Titulo,FechaDeCreacion from ${peliculaTabla} WHERE @titulo = Titulo`);
            }
        }else{
             response = await pool.request()
            .query(`SELECT Imagen,Id,Titulo,FechaDeCreacion from ${peliculaTabla} Order By Titulo ${orden}`);
        }
        
        console.log(response)

        return response.recordset;

    }

    createPelicula = async (Pelicula) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('imagen', sql.VarChar, Pelicula?.Imagen ?? '')
            .input('titulo', sql.VarChar, Pelicula?.Titulo ?? '')
            .input('FechaDeCreacion', sql.DateTime, Pelicula?.FechaDeCreacion ?? '')
            .input('calificacion', sql.Int, Pelicula?.Calificacion ?? '')
            .query(`INSERT INTO ${peliculaTabla}(Imagen, Titulo, FechaDeCreacion, Calificacion) VALUES (@imagen, @titulo, @FechaDeCreacion, @calificacion)`);
        console.log(response)

        return response.recordset;
    }

    updatePeliculaById = async (id, Pelicula) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
        .input('imagen', sql.VarChar, Pelicula?.Imagen ?? '')
        .input('titulo', sql.VarChar, Pelicula?.Titulo ?? '')
        .input('FechaDeCreacion', sql.DateTime, Pelicula?.FechaDeCreacion ?? '')
        .input('calificacion', sql.Int, Pelicula?.Calificacion ?? '')
        .input('id', sql.Int, id)
            .query(`UPDATE ${peliculaTabla} SET Imagen = @imagen, Titulo = @titulo, FechaDeCreacion = @FechaDeCreacion, Calificacion = @calificacion WHERE Id = @id`);
        console.log(response)

        return response.recordset;
    }

    deletePeliculaById = async (id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id', sql.Int, id)
            .query(`DELETE FROM ${peliculaTabla} WHERE id = @id`);
        console.log(response)

        return response.recordset;
    }
    getPeliculaConPerAsociado = async (id) => {
        console.log('This is a function on the service');
        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id', sql.Int, id)
            .query(`SELECT * FROM ${peliculaTabla} where id = @id`)
        const personaje = await pool.request()
            .input('id', sql.Int, id)
            .query(`SELECT ${personajeTabla}.Nombre, ${personajeTabla}.Id, ${personajeTabla}.Imagen FROM ${personajeTabla} INNER JOIN ${intermediaTabla} ON PeliculasxPersonajes.IdPeliculas = Personajes.Id INNER JOIN ${peliculaTabla} ON Peliculas.Id = PeliculasxPersonajes.IdPersonajes WHERE Peliculas.Id = @id`);

        response.recordset[0].personaje = personaje.recordset
        console.log(response)
        return response.recordset[0];
    }
}