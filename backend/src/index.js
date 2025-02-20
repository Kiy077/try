import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import guestRoutes from './routes/guestRoutes.js'

const app = express();

// 🔹 Definir __filename y __dirname correctamente
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 🔹 Definir frontendPath antes de usarlo
const frontendPath = path.join(__dirname, '../../frontend/src');

// Middlewares
app.use(cors());
app.use(express.json());

// 🔹 Ahora sí podemos usar frontendPath
app.use(express.static(frontendPath));

// Rutas
app.use('/api/auth', authRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'));
});

app.use('/api/guest', guestRoutes)

// Iniciar el servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

