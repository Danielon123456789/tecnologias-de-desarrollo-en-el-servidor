import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

export const getUploadPage = (req: Request, res: Response) => {
  res.render('upload', { error: req.query.error });
};

export const uploadFile = (req: Request, res: Response) => {
  if (!req.file) return res.redirect('/upload?error=No se subió ningún archivo');
  res.redirect('/');
};

export const getGallery = (req: Request, res: Response) => {

  const uploadPath = path.join(__dirname, '../../uploads');
  
  fs.readdir(uploadPath, (err, files) => {
    if (err) {
      console.error(err);
      files = [];
    }
    
    res.render('gallery', { 
      images: files,
      isEmpty: files.length === 0 
    });
  });
};