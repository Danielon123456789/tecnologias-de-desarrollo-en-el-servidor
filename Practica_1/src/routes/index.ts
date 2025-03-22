import { Router } from 'express'
import { register, login, perfil } from '../controllers/users'
import { listarUsuarios , crearUsuario, actualizarUsuario, eliminarUsuario } from '../controllers/admin'
import { crearPublicacion, listarPublicaciones } from '../controllers/publicaciones'
import { isAdmin } from '../middlaweres/isadmin'
import {authenticateToken} from '../middlaweres/auth'

const router = Router();

router.post("/registro", register);
router.post("/login", login);
router.get("/perfil",authenticateToken,perfil)

router.get("/usuarios", authenticateToken, listarUsuarios);

router.post("/usuarios", authenticateToken, isAdmin, crearUsuario);
router.get("/usuarios/:id?", authenticateToken, isAdmin, listarUsuarios);
router.put("/usuarios/:id", authenticateToken, isAdmin, actualizarUsuario);
router.delete("/usuarios/:id", authenticateToken, isAdmin, eliminarUsuario);

router.post("/publicaciones", authenticateToken, crearPublicacion);
router.get("/publicaciones", authenticateToken, listarPublicaciones);


export default router;