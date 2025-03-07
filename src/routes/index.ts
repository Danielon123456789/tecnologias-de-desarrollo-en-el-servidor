
import { Router } from 'express';
import { login, perfil } from '../controllers/users';
import { authenticateToken } from '../middlewares/auth';

const router = Router();

router.post('/login', login);

router.get('/perfil', authenticateToken, perfil);

export default router;