import { Request, Response } from "express";
import Publicacion from "../models/Publicacion";
import { HttpStatus } from "../types/http-status";
import { IGetUserAuthInfoRequest } from "../types/request";

export const crearPublicacion = async (req: IGetUserAuthInfoRequest, res: Response): Promise<void> => {
    try {
      if (!req.user) {
        res.status(HttpStatus.UNAUTHORIZED).json({ message: "Usuario no autenticado" });
        return;
      }
  
      const { titulo, contenido } = req.body;
  
      if (!titulo || !contenido) {
        res.status(HttpStatus.BAD_REQUEST).json({ message: "Título y contenido son requeridos" });
        return;
      }
  
      const nuevaPublicacion = new Publicacion({
        titulo,
        contenido,
        autor: req.user.id, // ID del usuario autenticado
      });
  
      await nuevaPublicacion.save();
      res.status(HttpStatus.CREATED).json(nuevaPublicacion);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error al crear la publicación", error });
    }
  };

export const listarPublicaciones = async (req: Request, res: Response) => {
    try {
      const publicaciones = await Publicacion.find().populate("autor", "nombre email");
  
      res.status(HttpStatus.OK).json(publicaciones);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error al obtener publicaciones", error });
    }
  };