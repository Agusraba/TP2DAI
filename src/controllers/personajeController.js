import { Router } from 'express';
import { personajeService } from '../services/personajeService.js';
import { Authenticate }from "../common/jwt.strategy.js";

const router = Router();
const PersonajeService = new personajeService();

router.get('', Authenticate, async (req, res) => {
  console.log(`This is a get operation`);
  console.log("Nombre: ", req.query.nombre);
  console.log("Edad: ", req.query.edad);
  console.log("Peso: ", req.query.peso);
  console.log("Serie: ", req.query.serie);

  const {nombre, edad, peso, serie} = req.query;
  
  const personaje = await PersonajeService.getPersonaje(nombre, edad, peso, serie);

  return res.status(200).json(personaje);
});
router.get('/characters', Authenticate, async (req, res) => {
  console.log(`This is a get operation`);
  
  const personaje = await PersonajeService.getPersonajeImaNomId();

  return res.status(200).json(personaje);
});

router.get('/characters', Authenticate, async (req, res) => {
  console.log(`This is a get operation`);
  
  const personaje = await PersonajeService.getPersonajeImaNomId();

  return res.status(200).json(personaje);
});

router.get('/:id', Authenticate,  async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a get operation`);

  const personaje = await PersonajeService.getPersonajeById(req.params.id);

  return res.status(200).json(personaje);
});

router.post('', Authenticate,  async (req, res) => {
  console.log(`This is a post operation`);

  const personaje = await PersonajeService.createPersonaje(req.body);

  return res.status(201).json(personaje);
});

router.put('/:id', Authenticate,  async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a put operation`);

  const personaje = await PersonajeService.updatePersonajeById(req.params.id, req.body);

  return res.status(200).json(personaje);
});

router.delete('/:id', Authenticate,  async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a delete operation`);

  const personaje = await PersonajeService.deletePersonajeById(req.params.id);

  return res.status(200).json(personaje);
});

router.get('/:nombre', Authenticate,  async (req, res) => {
  console.log(`Request URL Param: ${req.params.nombre}`);
  console.log(`This is a get operation`);

  const personaje = await PersonajeService.getPersonajeByEdad(req.params.nombre);

  return res.status(200).json(personaje);
});

  router.get('/detallePer/:id', Authenticate,  async (req, res) => {
    console.log(`Request URL Param: ${req.params.id}`);
    console.log(`This is a get operation`);
    const personaje = await PersonajeService.getPersonajeConPelAsociada(req.params.id);
  
    return res.status(200).json(personaje);
});

export default router;