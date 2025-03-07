
import express from 'express';
import { config } from 'dotenv'
config();


import { connect } from 'mongoose';
import swaggerJsDoc from 'swagger-jsdoc';
import {serve, setup} from 'swagger-ui-express';
import { swaggerConfig} from './../swagger.config';


import routes from './routes/index';


const port = 3000

const app = express();



app.get('', (req, res) => {
    res.send('api works!')
})


app.use('', routes);

// swagger 

const swaggerDocs = swaggerJsDoc(swaggerConfig);

app.use('/swagger', serve , setup(swaggerDocs));


// Connect to mongoose
const db_uri = process.env.MONGO_URL ?? '';

connect(db_uri).then( res =>{
    app.listen(port, () => {
        console.log(`app is running in port ${port}`)
    })
    
}).catch(e=>{
    console.log('failed to connect to Mongo: ', e)
})



