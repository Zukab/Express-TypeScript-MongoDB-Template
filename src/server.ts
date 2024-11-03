import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { CONFIG } from './config/config';
import { connectDB } from './config/database';
import logger from './config/logger';

const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Conexión a la base de datos
connectDB();

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'API is running' });
});

// Iniciar servidor
app.listen(CONFIG.PORT, () => {
  logger.info(`Server is running on port ${CONFIG.PORT}`);
});

export default app;
