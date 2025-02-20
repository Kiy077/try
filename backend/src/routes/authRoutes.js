import express from 'express';
import { register, login } from '../controllers/authController.js';
import { validateRegister, validateLogin } from '../middlewares/validationMiddleware.js';

const router = express.Router();

// Ruta para registro de usuarios
router.post('/register', validateRegister, register);

// Ruta para login de usuarios
router.post('/login', validateLogin, login);

export default router;