import multer from "multer";
import { Request } from "express";

const storage = multer.diskStorage({

    destination: (req, file, cb) =>{
        cb(null, 'uploads');
    },
    filename: (req, file, cb) =>{
        const name = Date.now() + '_' + file.originalname;
        cb(null,name);
    }

})

const fileFilter = (req: Request, file: Express.Multer.File, cb:any )=>{
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null,true);
    } else {
        cb(new Error('tipo de archivo no permitido, solo se aceptan JPG/PNG'), false);
    }
}

const upload = multer ({
    storage,
    fileFilter
})

export default upload