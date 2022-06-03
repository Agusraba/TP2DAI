import { Router } from 'express';
import { peliculasService } from '../services/peliculasService.js';
import { Authenticate }from "../common/jwt.strategy.js";

const router = Router();
const PeliculasService = new peliculasService();

router.get('/movies', Authenticate, async (req, res) => {
  console.log(`This is a get operation`);
  let orden = req.query.order
  let titulo = req.query.titulo
  const peliculas = await PeliculasService.getPeliculas(orden, titulo);

  return res.status(200).json(peliculas);
});

router.post('', Authenticate,  async (req, res) => {
  console.log(`This is a post operation`);

  const peliculas = await PeliculasService.createPelicula(req.body);

  return res.status(201).json(peliculas);
});

router.put('/:id', Authenticate,  async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a put operation`);

  const peliculas = await PeliculasService.updatePeliculaById(req.params.id, req.body);

  return res.status(200).json(peliculas);
});

router.delete('/:id', Authenticate,  async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a delete operation`);

  const peliculas = await PeliculasService.deletePeliculaById(req.params.id);

  return res.status(200).json(peliculas);
});


  router.get('/detallePel/:id', Authenticate,  async (req, res) => {
    console.log(`Request URL Param: ${req.params.id}`);
    console.log(`This is a get operation`);
    const peliculas = await PeliculasService.getPeliculaConPerAsociado(req.params.id);
  
    return res.status(200).json(peliculas);
});

export default router;