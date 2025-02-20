import { registerUser, loginUser } from '../services/authService.js';
import { generateToken } from '../utils/jwtUtils.js';

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await registerUser(email, password);
    res.status(201).json({ message: 'Usuario registrado exitosamente', user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await loginUser(email, password);
    const token = generateToken(user.id);
    res.status(200).json({ message: 'Login exitoso', token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};