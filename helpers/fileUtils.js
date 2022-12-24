import { v4 as uuidv4 } from 'uuid';
import * as url from 'url';
import path from 'path'

export const __dirname = url.fileURLToPath(new URL('../', import.meta.url));

export const generateNameFile = (file) => `${uuidv4()}.${getExtFromFile(file)}`

export const getExtFromFile = (file) => {
    const cutName = file.name.split('.');
    return cutName[cutName.length - 1];
}

export const uploadFile = (file, folder = '') => {
    return new Promise((resolve, reject) => {
        const nameFile = generateNameFile(file);
        const uploadPath = path.join(__dirname, 'uploads/', folder, nameFile)
  
        file.mv(uploadPath, function(error) {
          if (error) {
            console.log(error);
            reject(error);
          }
      
          resolve(nameFile);
        });
    })
}