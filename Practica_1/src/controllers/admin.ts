import { Request, Response } from "express";
import usermodel from "../models/User";
import { HttpStatus} from '../types/http-status'

export const listarUsuarios = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        if (id) {
            // Si se proporciona un ID, buscar solo ese usuario
            const usuario = await usermodel.findById(id, "nombre email rol");
            
            if (!usuario) {
                res.status(HttpStatus.NOT_FOUND).json({ message: "Usuario no encontrado" });
                return;
            }

            res.status(HttpStatus.OK).json(usuario);
        } else {
            // Si no hay ID, listar todos los usuarios
            const usuarios = await usermodel.find({}, "nombre email rol");
            res.status(HttpStatus.OK).json(usuarios);
        }
    } catch (error) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error al obtener usuarios", error });
    }
};

export const crearUsuario = async (req: Request, res: Response): Promise<void> => {

    try {

        const { nombre, email, contrasena, rol } = req.body;

        // Validación básica
        if (!nombre || !email || !contrasena || !rol) {
            res.status(HttpStatus.BAD_REQUEST).json({ message: "Todos los campos son obligatorios" });
            return;
        }

        // Verificar si el usuario ya existe
        const existeUsuario = await usermodel.findOne({ email });
        if (existeUsuario) {
            res.status(HttpStatus.CONFLICT).json({ message: "El usuario ya está registrado" });
            return;
        }

        // Crear usuario
        const nuevoUsuario = new usermodel({ nombre, email, contrasena, rol });
        await nuevoUsuario.save();

        res.status(HttpStatus.CREATED).json({ message: "Usuario creado exitosamente" });
    } catch (error) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error al crear usuario", error });
    }
};

export const actualizarUsuario = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { nombre, email, rol } = req.body;

        const usuarioActualizado = await usermodel.findByIdAndUpdate(
            id,
            { nombre, email, rol },
            { new: true, select: "nombre email rol" } // Devolvemos el usuario actualizado
        );

        if (!usuarioActualizado) {
            res.status(HttpStatus.NOT_FOUND).json({ message: "Usuario no encontrado" });
            return;
        }

        res.status(HttpStatus.OK).json({ message: "Usuario actualizado", usuario: usuarioActualizado });
    } catch (error) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error al actualizar usuario", error });
    }
};

export const eliminarUsuario = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        const usuarioEliminado = await usermodel.findByIdAndDelete(id);

        if (!usuarioEliminado) {
            res.status(HttpStatus.NOT_FOUND).json({ message: "Usuario no encontrado" });
            return;
        }

        res.status(HttpStatus.OK).json({ message: "Usuario eliminado correctamente" });
    } catch (error) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error al eliminar usuario", error });
    }
};