import sql from 'mssql'
import config from '../../db.js'
import 'dotenv/config'

const personajeTabla = process.env.DB_TABLA_PERSONAJE;

export class personajeService {

    getPersonaje = async (nombre, edad) => {
        console.log('This is a function on the service');
        const pool = await sql.connect(config);
        const response = await pool.request()
        .input('Nombre',sql.VarChar, nombre)
        .input('Edad',sql.VarChar, edad)
        if(!nombre && edad){
            response.query(`SELECT * from ${personajeTabla} where  Edad = @edad`);
        }
        else if(nombre && !edad){
        response.query(`SELECT * from ${personajeTabla} where  Nombre = @nombre`);
        }
        else if(nombre == undefined && edad == undefined){
        response.query(`SELECT * from ${personajeTabla} where  Edad = @edad and Nombre = @nombre `);
        }
        else{
        response.query(`SELECT * from ${personajeTabla}`);
        }

        return response.recordset;
    }

    getPersonajeById = async (id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .query(`SELECT * from ${personajeTabla} where id = @id`);
        console.log(response)

        return response.recordset[0];
    }

    createPersonaje = async (Personaje) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('imagen',sql.VarChar, Personaje?.Imagen ?? '')
            .input('nombre',sql.VarChar, Personaje?.Nombre ?? '')
            .input('edad',sql.Int, Personaje?.Edad ?? 0)
            .input('peso',sql.Float, Personaje?.Peso ?? 0)
            .input('historia',sql.VarChar, Personaje?.Historia ?? '')
            .query(`INSERT INTO ${personajeTabla}(Imagen, Nombre, Peso, Edad, Historia) VALUES (@imagen, @nombre, @peso, @edad, @historia)`);
        console.log(response)

        return response.recordset;
    }

    updatePersonajeById = async (id, Personaje) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('imagen',sql.VarChar, Personaje?.Imagen ?? '')
            .input('nombre',sql.VarChar, Personaje?.Nombre ?? '')
            .input('edad',sql.Int, Personaje?.Edad ?? 0)
            .input('peso',sql.Float, Personaje?.Peso ?? 0)
            .input('historia',sql.VarChar, Personaje?.Historia ?? '')
            .input('id',sql.Int, id)
            .query(`UPDATE Personajes SET Imagen = @imagen, Nombre = @nombre, Edad = @edad, Peso = @peso, Historia = @historia WHERE Id = @id`);
        console.log(response)

        return response.recordset;
    }

    deletePersonajeById = async (id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .query(`DELETE FROM ${personajeTabla} WHERE id = @id`);
        console.log(response)

        return response.recordset;
    }
}