import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { CONFIG } from './config/config';
import { connectDB } from './config/database';
import logger from './config/logger';
import { errorHandler } from './middleware/errorHandler';
import AppError from './utils/appError';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();


app.get('/', (req, res) => {
  res.json({ message: 'API is running' });
});

app.all('*', (req, res, next) => {
  next(new AppError(`No se encontró ${req.originalUrl} en este servidor!`, 404));
});


app.use(errorHandler);


app.listen(CONFIG.PORT, () => {
  logger.info(`Server is running on port ${CONFIG.PORT}`);
});

export default app;
// Instrucciones del codigo:
// Iniciar servidor
// Middleware de manejo de errores
// Manejo de rutas no encontradas
// Ruta de prueba
// Conexión a la base de datos
// Middlewares