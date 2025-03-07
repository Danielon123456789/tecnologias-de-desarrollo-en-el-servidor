
import { Request, Response} from 'express'
import jwt from 'jsonwebtoken';
import { IGetUserAuthInfoRequest } from '../types/request';
import { HttpStatus} from '../types/http-status'

const JWT_SECRET = process.env.JWT_SECRET?? "";


// Controlador para el login
export function login(req: Request, res: Response): void {
    
    const { email, password } = req.body;
  
    if (!email || !password) {

      res.status(HttpStatus.UNAUTHORIZED).json({
        message: 'Email y contraseña son requeridos',
      });

      return; 
    }
  
    
    const token = jwt.sign({ email, password }, JWT_SECRET , { expiresIn: '1h' });
  
    res.json({ token });
  }
  
  // Controlador para el perfil
  export function perfil(req: IGetUserAuthInfoRequest, res: Response): void {
    if (!req.user) {
      res.status(HttpStatus.UNAUTHORIZED).json({ message: 'Usuario no autenticado' });
      return;
    }
  
    res.json({
      email: req.user.email,
      password: req.user.password,
    });
}