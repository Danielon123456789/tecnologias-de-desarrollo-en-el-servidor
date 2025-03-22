
import express from 'express';
import {config} from 'dotenv';
config();

import connectDB from './config/database';

import routes from './routes/index';

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.get('',(req,res)=>{
    res.send('OK')
})

app.use('/',routes);

connectDB().then(()=>{
    app.listen(port,()=>{
        console.log(`app is running in port ${port}`);
    })
}).catch((error)=>{
    console.log('No se pudo conectar a la base de datos MongoDB',error);
    process.exit(1);
})


