// Importaciones necesarias

const express = require('express');
require('dotenv').config();  // Para utilizar mis variables de entorno
const rutas = require ('./routes'); // Donde esta las rutas de los endpoints

const app = express();

app.use(rutas)

const port = process.env.Port || 5000 // variable del puerto

app.listen( port, () => {
    console.log(`App is running in port ${port}`);
})