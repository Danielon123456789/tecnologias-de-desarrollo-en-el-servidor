import { Request, Response } from 'express';



export function getAll(req: Request, res : Response){
    res.send('GET - All products');
}

