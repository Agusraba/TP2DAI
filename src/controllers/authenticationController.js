import { Router } from 'express';
import {authenticationService } from '../services/authenticationService.js';

const router = Router();
const AuthenticationService = new autheticationService();

router.get('', async (req, res) => {
  console.log(`This is a get operation`);

  const Auth = await authenticationService.getSignedToken();

  return res.status(200).json(Auth);
});