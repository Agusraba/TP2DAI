import { Router } from 'express';
import {AuthenticationService } from '../services/authenticationService.js';

const router = Router();
const authenticationService = new AuthenticationService();

router.get('/login', async (req, res) => {
  console.log(`This is a get operation`);

  const Auth = await authenticationService.getToken();

  return res.status(200).json(Auth);
});
export default router;