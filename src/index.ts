// Primero se importan las dependencias:

import express from 'express';

import dotenv from 'dotenv';
dotenv.config();

import Routes from './routes/index';



const app = express();

app.use(express.json());

// Rutas de autenticación
app.use('/', Routes);

// Puerto donde corre la aplicación
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});