import sql from 'mssql'
import config from '../../db.js'
import 'dotenv/config'

const personajeTabla = process.env.DB_TABLA_PERSONAJE;
const peliculaTabla = process.env.DB_TABLA_PELICULAS;
const intermediaTabla = process.env.DB_TABLA_INTERMEDIA;

export class personajeService {

    getPersonaje = async (nombre, edad, peso, serie) => {
        console.log('This is a function on the service');
        let query = `SELECT ${personajeTabla}.Id, ${personajeTabla}.Imagen, ${personajeTabla}.Nombre FROM ${personajeTabla},${intermediaTabla} WHERE ${personajeTabla}.Id = ${intermediaTabla}.idPersonajes `
        let response;
        if (nombre) {
            query += `AND ${personajeTabla}.Nombre = @nombre`;
        } if (edad) {
            query += ` AND ${personajeTabla}.Edad = @edad`;
        } if (peso) {
            query += ` AND ${personajeTabla}.Peso = @peso`;
        } if (serie) {
            query += ` AND ${intermediaTabla}.IdPeliculas = @serie`;
        }
        console.log(query)
        const pool = await sql.connect(config);
        response = await pool.request()
            .input('nombre', sql.VarChar, nombre)
            .input('edad', sql.Int, edad)
            .input('peso', sql.Float, peso)
            .input('serie', sql.VarChar, serie)
            .query(query);
            console.log(query)
        console.log(response)

        return response.recordset;
    }

    getPersonajeImaNomId = async () => {
        console.log('This is a function on the service');
        const pool = await sql.connect(config);
        const response = await pool.request()
            .query(`SELECT imagen,id,nombre from ${personajeTabla}`);
        console.log(response)

        return response.recordset;

    }
    getPersonajeConPelAsociada = async (id) => {
        console.log('This is a function on the service');
        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id', sql.Int, id)
            .query(`SELECT * FROM ${personajeTabla} where id = @id`)
        const personaje = await pool.request()
            .input('id', sql.Int, id)
            .query(`SELECT ${peliculaTabla}.Titulo, ${peliculaTabla}.Id, ${peliculaTabla}.Imagen, ${peliculaTabla}.FechaDeCreacion, ${peliculaTabla}.Calificacion FROM ${peliculaTabla} INNER JOIN ${intermediaTabla} ON PeliculasxPersonajes.IdPeliculas = Peliculas.Id INNER JOIN ${personajeTabla} ON Personajes.Id = PeliculasxPersonajes.IdPersonajes WHERE Personajes.Id = @id`);

        response.recordset[0].peliculas = personaje.recordset
        console.log(response)
        return response.recordset[0];
    }

    getPersonajeById = async (id) => {
        console.log('This is a function on the service');
        const response = await pool.request()
            .input('id', sql.Int, id)
            .query(`SELECT * from ${personajeTabla} where id = @id`);
        console.log(response)
        return response.recordset[0];
    }

    createPersonaje = async (Personaje) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('imagen', sql.VarChar, Personaje?.Imagen ?? '')
            .input('nombre', sql.VarChar, Personaje?.Nombre ?? '')
            .input('edad', sql.Int, Personaje?.Edad ?? 0)
            .input('peso', sql.Float, Personaje?.Peso ?? 0)
            .input('historia', sql.VarChar, Personaje?.Historia ?? '')
            .query(`INSERT INTO ${personajeTabla}(Imagen, Nombre, Peso, Edad, Historia) VALUES (@imagen, @nombre, @peso, @edad, @historia)`);
        console.log(response)

        return response.recordset;
    }

    updatePersonajeById = async (id, Personaje) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('imagen', sql.VarChar, Personaje?.Imagen ?? '')
            .input('nombre', sql.VarChar, Personaje?.Nombre ?? '')
            .input('edad', sql.Int, Personaje?.Edad ?? 0)
            .input('peso', sql.Float, Personaje?.Peso ?? 0)
            .input('historia', sql.VarChar, Personaje?.Historia ?? '')
            .input('id', sql.Int, id)
            .query(`UPDATE Personajes SET Imagen = @imagen, Nombre = @nombre, Edad = @edad, Peso = @peso, Historia = @historia WHERE Id = @id`);
        console.log(response)

        return response.recordset;
    }

    deletePersonajeById = async (id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id', sql.Int, id)
            .query(`DELETE FROM ${personajeTabla} WHERE id = @id`);
        console.log(response)

        return response.recordset;
    }
}