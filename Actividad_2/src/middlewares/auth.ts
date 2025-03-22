
import { Request, Response, NextFunction } from 'express';


export function auth(req : Request, res : Response, next: NextFunction) {
    if ( req.query.token === '12345'){
        next();
    }else{
        res.status(401).send('Usuario no logueado');
    }
    
}
