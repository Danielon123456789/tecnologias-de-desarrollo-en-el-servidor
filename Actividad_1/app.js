const express = require('express');
require('dotenv').config();
const rutas = require('./routes')


const app = express();

app.use(rutas)

const port = process.env.PORT || 3000


app.listen(port, () => {
    console.log(`app is running in port ${port}`); // no concatenar porque crea m'as espacios en memoria por la inmutabilidad de las cadenas.
});


