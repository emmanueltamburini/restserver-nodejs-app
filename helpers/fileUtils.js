import { v4 as uuidv4 } from 'uuid';
import * as url from 'url';
import path from 'path'
import { LOCAL_ASSETS_FOLDER_PATH, LOCAL_PREVIOUS_PATH, LOCAL_UPLOAD_PATH } from '../constant/routes.constant.js';
import fs from 'fs';
import { DEFAULT_IMAGE } from '../constant/values.constant.js';

export const __dirname = url.fileURLToPath(new URL(LOCAL_PREVIOUS_PATH, import.meta.url));

export const generateNameFile = (file) => `${uuidv4()}.${getExtFromFile(file)}`

export const getExtFromFile = (file) => {
    const cutName = file.name.split('.');
    return cutName[cutName.length - 1];
}

export const getFile = (nameFile = '', folder = '') => {
    const imagePath = path.join(__dirname, LOCAL_UPLOAD_PATH, folder, nameFile);

    if (nameFile !== '' && fs.existsSync(imagePath)) {
        return imagePath;
    }

    return path.join(__dirname, LOCAL_ASSETS_FOLDER_PATH, '', DEFAULT_IMAGE);
}

export const uploadFile = (file, folder = '') => {
    return new Promise((resolve, reject) => {
        const nameFile = generateNameFile(file);
        const uploadPath = path.join(__dirname, LOCAL_UPLOAD_PATH, folder, nameFile);
  
        file.mv(uploadPath, function(error) {
          if (error) {
            console.log(error);
            reject(error);
          }
      
          resolve(nameFile);
        });
    })
}

export const deleteFile = (nameFile = '', folder = '') => {
    const imagePath = path.join(__dirname, LOCAL_UPLOAD_PATH, folder, nameFile);

    if (nameFile !== '' && fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath)
    }
}