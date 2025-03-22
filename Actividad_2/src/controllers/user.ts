import { Request, Response } from 'express';
import User from '../models/user';






export async function getAll(req: Request, res : Response){
    // User.find({}).then().catch();
    try{
        const users = await User.find({});
        res.send(users);
    } catch (e){
        res.status(400).send();
    }
}

