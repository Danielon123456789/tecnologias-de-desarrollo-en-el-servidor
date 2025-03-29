import {Router} from 'express';
import { getUploadPage, uploadFile, getGallery} from '../controllers/files';
import upload from '../middlaweres/upload'

const router = Router();

router.get('/', getGallery);
router.get('/upload',getUploadPage);
router.post('/upload', upload.single('image'), uploadFile);



export default router;