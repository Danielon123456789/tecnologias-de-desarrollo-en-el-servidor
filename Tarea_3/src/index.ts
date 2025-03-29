
import {join} from 'path';
import express from 'express';
import {config} from 'dotenv';
config();

import { engine } from 'express-handlebars';

import routes from "./routes/index"


const port = process.env.PORT || 3000;

const app = express();

app.use('/uploads', express.static(join(process.cwd(), 'uploads')));

app.engine('.handlebars', engine({ extname: '.handlebars' }));
app.set('view engine', '.handlebars');
app.set('views', join(__dirname, 'views')); // Ruta absoluta

const publicPath = join(__dirname,'.','public');

app.use('/assets',express.static(publicPath));
 

app.use('',routes);

app.listen(port,()=>{
    console.log(`app is running in port ${port} `)
})

