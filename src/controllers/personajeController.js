import { Router } from 'express';
import { personajeService } from '../services/personajeService.js';

const router = Router();
const PersonajeService = new personajeService();

router.get('', async (req, res) => {
  console.log(`This is a get operation`);
  console.log("Nombre: ", req.query.Nombre);
  console.log("Edad: ", req.query.Edad);
  const {Nombre, Edad} = req.query;
  
  const personaje = await PersonajeService.getPersonaje(Nombre, Edad);

  return res.status(200).json(personaje);
});

router.get('/:id', async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a get operation`);

  const personaje = await PersonajeService.getPersonajeById(req.params.id);

  return res.status(200).json(personaje);
});

router.post('', async (req, res) => {
  console.log(`This is a post operation`);

  const personaje = await PersonajeService.createPersonaje(req.body);

  return res.status(201).json(personaje);
});

router.put('/:id', async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a put operation`);

  const personaje = await PersonajeService.updatePersonajeById(req.params.id, req.body);

  return res.status(200).json(personaje);
});

router.delete('/:id', async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a delete operation`);

  const personaje = await PersonajeService.deletePersonajeById(req.params.id);

  return res.status(200).json(personaje);
});

router.get('/:nombre', async (req, res) => {
  console.log(`Request URL Param: ${req.params.nombre}`);
  console.log(`This is a get operation`);

  const personaje = await PersonajeService.getPersonajeByEdad(req.params.nombre);

  return res.status(200).json(personaje);
});

export default router;