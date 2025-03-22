
import { Router } from 'express';
import { getAll } from '../controllers/user'
import { getAll as getAllProducts } from '../controllers/products'
import { role } from '../middlewares/role'
import { Roles } from '../types/roles';
import { downloadFile, uploadFile } from '../controllers/files'
import { upload } from '../middlewares/upload'



const router = Router();

/**
 * @swagger
 * /products:
 *   get:
 *     description: endpoint para listar productos
 *     tags: 
 *       - Users
 *     parameters:
 *       - in: query
 *         name: test
 *         description: nomas para poner algo
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: lista de productos
 *       400:
 *         description: te falto un parametro.
 *       500:
 *         description: se esta quemando el servidor
 */
router.get('/products', getAllProducts)

router.get('/download',downloadFile)

router.post('/upload', upload.single('image') ,uploadFile)

router.get('/')

router.get('/imagen')

router.get('/test', (req, res) => {
    res.send('test endpoint works')
})

router.get('/users', role([Roles.ADMIN]), getAll)

export default router;


